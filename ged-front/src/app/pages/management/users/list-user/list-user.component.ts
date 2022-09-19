import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { delay } from 'rxjs';
import { LoaderService } from 'src/app/loader/loader.service';
import { OpenDialogService } from 'src/app/loader/open-dialog.service';
import { PageProfiles, Profiles, UsersControllerService } from 'src/app/model';
import { AddRemoveDroitComponent } from '../add-remove-droit/add-remove-droit.component';
import { AddRemoveInGroupComponent } from '../add-remove-in-group/add-remove-in-group.component';
import { AddUserComponent } from '../add-user/add-user.component';
import { ProfilComponent } from '../profil/profil.component';
import { UpdateNameComponent } from '../update-name/update-name.component';
import { UpdateUserComponent } from '../update-user/update-user.component';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  profileFormGroup!: FormGroup;
  pageUsers!: PageProfiles;
  isEmpty: boolean = false;
  loading: boolean = true;
  loadingPage: boolean = false;
  research: boolean = false;
  view: boolean = false;
  valueToSearch: string = "";
  statusProfiles: any = [
    {value: 0, name: "Profiles desactivé"},
    {value: 1, name: "Profiles activé"},
    {value: 2, name: "Tous les profiles"},
  ];
  private pagesize ={page: 0, size: 5};


  constructor(
    private apiService: UsersControllerService,     
    private route: Router, 
    private formBuilder: FormBuilder,   
    private toastr: ToastrService
    ) { 
      this.profileFormGroup = this.formBuilder.group(
        {
          statusprofile: new FormControl(2, Validators.required),
        }
      ); 
    }

    ngOnInit(): void {
      this.initData(0,5);
    }

    viewProfile(user: Profiles){
      this.route.navigate(['/profile/view-profile',user.idProfiles]);
    }

    newProfile(){
      this.route.navigate(['/profile/add-profile']);
    }
  
    get f(): { [key: string]: AbstractControl } {
      return this.profileFormGroup.controls;
    }

    private initData(page: number, size: number){
      this.loading = true;
      this.apiService.findAllProfiles(status=this.f["statusprofile"].value, page =page, size = size).subscribe(
        response=>{
          
          if(response==null){
            this.isEmpty=true;
            this.loading = false;
          }else{
            this.isEmpty=false;
            this.pageUsers=response;
            this.loading = false;
          }
        },
        error=>{
          this.loading = false;
        }
      );
    }

    private pageSwitch(page: number, size: number){
      this.loadingPage = true;
      this.apiService.findAllProfiles(status=this.f["statusprofile"].value, page =page, size = size).subscribe(
        response=>{
          if(response==null){
            this.isEmpty=true;
            this.loadingPage = false;
          }else{
            this.isEmpty=false;
            this.pageUsers=response;
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
    this.loading = true;
    this.apiService.searchUsersByName(name,this.f["statusprofile"].value, page, size).subscribe(
      response=>{
        if(response==null){
          this.isEmpty=true;
          this.loading = false;
        }else{
          this.isEmpty=false;
          this.pageUsers=response;
          this.loading = false;
        }
      },
      error=>{
        this.loading = false;
      }
    );
  }

  private pageSwitchsearchName(name: string, page: number, size: number){
    this.loadingPage = true;
    this.apiService.searchUsersByName(name,this.f["statusprofile"].value, page, size).subscribe(
      response=>{
        if(response==null){
          this.isEmpty=true;
          this.loadingPage = false;
        }else{
          this.isEmpty=false;
          this.pageUsers=response;          
          this.loadingPage = false;
        }
      },
      error=>{
        this.loadingPage = false;
      }

    );
  }

  search(){
    if(this.valueToSearch.trim().length!>0){
      this.searchName(this.valueToSearch, 0, 5);
    }else{
      this.valueToSearch = "";
      this.initData(0,5);
      this.research=false;
    }

  }

    viewList(){
      this.view=!this.view;
  
    }
  
    refresf(){
      this.initData(0,5);
    }

    updateOnclickGen(e: any) {
      if(this.valueToSearch.length!>0){
        this.pageSwitchsearchName(this.valueToSearch, 0, 5);
      }else{
        this.pageSwitch(0,5);
      }
    }
}
