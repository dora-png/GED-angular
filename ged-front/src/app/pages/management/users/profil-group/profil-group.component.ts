import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GroupUser, GroupUserControllerService, PageGroupUser } from 'src/app/model';

@Component({
  selector: 'app-profil-group',
  templateUrl: './profil-group.component.html',
  styleUrls: ['./profil-group.component.scss']
})
export class ProfilGroupComponent implements OnInit {
  
  groupUserPage!: PageGroupUser;
  groupUser!:GroupUser;  
  valid: boolean= true;
  clicked: boolean= false;
  isEmpty: boolean = false;
  loading: boolean = true;
  loadingPage: boolean = false;
  research: boolean = false;
  view: boolean = false;
  valueToSearch: string = "";

  constructor(    
    @Inject(MAT_DIALOG_DATA) private data: GroupUser,
    private apiServiceGroup: GroupUserControllerService,
    private dialogRef:  MatDialogRef<ProfilGroupComponent>
  ) { }

  ngOnInit(): void {
    this.groupUser = this.data;
    this.init(0,5); 
  }

  private pageSwitch(page: number, size: number){
    this.loadingPage = true;
    this.apiServiceGroup.findAllGroup(1, page =page, size = size).subscribe(
      response=>{
        console.log(response)
        if(response==null){
          this.isEmpty=true;
          this.loadingPage = false;
        }else{
          this.isEmpty=false;
          this.groupUserPage = response;
          this.loadingPage = false;
        }
      },
      error=>{
        this.loadingPage = false;
      }
    );
  }
  
private changePageOrSize(page: number, size: number){
  this.pageSwitch(page,size);
}

private changePageOrSizeSearchByName(name: string, page: number, size: number){ 
  this.pageSwitchsearchName(name=name, page=page, size=size);
}

changePageAndSize(event: {page: number, size: number}){
  if(this.valueToSearch.trim().length!<=0){
    this.changePageOrSize(event.page, event.size);
  }else{
    this.changePageOrSizeSearchByName(this.valueToSearch!, event.page, event.size);
  }  
}

private searchName(name: string, page: number, size: number){
  this.loadingPage = true;
  this.apiServiceGroup.searchGroupUserByName(name,1, page, size).subscribe(
    response=>{
      if(response==null){
        this.isEmpty=true;
        this.loadingPage = false;
      }else{
        this.isEmpty=false;
        this.groupUserPage = response;
        this.loadingPage = false;
      }
    },
    error=>{
      this.loadingPage = false;
    }
  );
}

private pageSwitchsearchName(name: string, page: number, size: number){  
  this.searchName(name, page, size);
}

search(){
  if(this.valueToSearch.trim().length!>0){
    this.searchName(this.valueToSearch, 0, 5);
  }else{
    this.valueToSearch = "";
    this.init(0,5);
    this.research=false;
  }

}

  addGroupToProfile(groupUser: GroupUser){
    this.groupUser = groupUser;
    this.valid = false;
  }
  containGroupUser(groupUser: GroupUser){
    return groupUser.name === this.groupUser.name;
  }
  removeGroupUser(groupUser: GroupUser){  
    if(this.groupUser.idgroupes == groupUser.idgroupes)  {
      this.groupUser = this.initGroup(); 
      this.valid = true;
    }
  }

  private initGroup():GroupUser{
    return{
        idgroupes:0,
        dateCreation: undefined,
        name: undefined,
        sigle: undefined,
        status: undefined,
    };
  }

  private init(page: number, size: number){
    this.loading = true;
    this.apiServiceGroup.findAllGroup(1,page=page, size=size).subscribe(
      response=>{
        if(response==null){
          this.isEmpty=true;
          this.loading = false;
        }else{
          this.isEmpty=false;
          this.groupUserPage = response;
          this.loading = false;
        }
        
      },
      error=>{
        this.loading = false;
      }
    ); 
  }

  onClose(){
    this.dialogRef.close(this.data);
  }

  onReset(){
    this.groupUser = this.initGroup();
    this.valid = true;
  }

  save(){
    this.dialogRef.close(this.groupUser);
  }

}
