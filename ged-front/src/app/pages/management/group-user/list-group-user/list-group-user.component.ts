import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { GroupUser, GroupUserControllerService, PageGroupUser } from 'src/app/model';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-group-user',
  templateUrl: './list-group-user.component.html',
  styleUrls: ['./list-group-user.component.scss']
})
export class ListGroupUserComponent implements OnInit {


  groupFormGroup!: FormGroup;
  isEmpty: boolean = false;
  loading: boolean = true;
  loadingPage: boolean = false;
  research: boolean = false;
  view: boolean = false;
  valueToSearch: string = "";
  statusGroup: any = [
    {value: 0, name: "Groupes desactivé"},
    {value: 1, name: "Groupes activé"},
    {value: 2, name: "Tous les Groupes"},
  ];
  pageGroupUser!: PageGroupUser;

  constructor(
    private apiService: GroupUserControllerService,
    private formBuilder: FormBuilder,    
    private route: Router,     
    private toastr: ToastrService
    ) {
      this.groupFormGroup = this.formBuilder.group(
        {
          statusgroup: new FormControl(2, Validators.required),
        }
      ); 
    }

  ngOnInit(): void {
    this.initData(0,5);
  }
  
  private initData(page: number, size: number){
    this.loading = true;
    this.apiService.findAllGroup(status=this.f["statusgroup"].value, page =page, size = size).subscribe(
      response => {
        if(response==null){
          this.isEmpty=true;
            this.loading = false;
        }else{
          this.isEmpty=false;
          this.pageGroupUser=response;
          this.loading = false;
        }
      },error => {
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.groupFormGroup.controls;
  }

  newGroupUser() {
    this.route.navigate(['/group/add-group-user']);
  }

  viewGroup(group: GroupUser) {
    this.route.navigate(['/group/view-group',group.idgroupes]);
  }

  private changePageOrSize(page: number, size: number){
    this.pageSwitch(page,size);
  }

  private changePageOrSizeSearchByName(name: string, page: number, size: number){
    this.loadingPage = true;
    this.apiService.searchGroupUserByName(name=name, status=this.f["statusgroup"].value, page =page, size = size).subscribe(
      res => {
        if(res==null){
          this.isEmpty=true;
          this.pageGroupUser=res;
        }else{
          this.isEmpty=false;
          this.pageGroupUser=res;
        }
        this.loadingPage = false;
      },error => {
      }
    );
  }


  changePageAndSize(event: {page: number, size: number}){
    if(this.valueToSearch.trim().length!<=0){
      this.changePageOrSize(event.page, event.size);
    }else{
        this.changePageOrSizeSearchByName(this.valueToSearch!, event.page, event.size);

    }    
  }
 
  private searchName(name: string){
    this.loadingPage = true;
    this.apiService.searchGroupUserByName(name, status=this.f["statusgroup"].value).subscribe(
      res => {
        if(res==null){
          this.isEmpty=true;
          this.loadingPage = false;
        }else{
          this.isEmpty=false;
          this.pageGroupUser = res;
          this.loadingPage = false;
        }
      },error => {
        this.loadingPage = false;
      }
    );
  }

  

  search(){
    if(this.valueToSearch.trim().length!>0){
      this.searchName(this.valueToSearch);
    }else{
      this.valueToSearch = "";
      this.pageSwitch(0,5);
    }
  }

  viewList(){
    this.view=!this.view;

  }

  refresf(){
    this.pageSwitch(0,5);
  }

  private pageSwitchsearchName(name: string, page: number, size: number){
    this.loadingPage = true;
    this.apiService.searchGroupUserByName(name,this.f["statusgroup"].value, page, size).subscribe(
      response=>{
        if(response==null){
          this.isEmpty=true;
          this.loadingPage = false;
        }else{
          this.isEmpty=false;
          this.pageGroupUser=response;          
          this.loadingPage = false;
        }
      },
      error=>{
        this.loadingPage = false;
      }

    );
  }

  private pageSwitch(page: number, size: number){
    this.loadingPage = true;
    this.apiService.findAllGroup(status=this.f["statusgroup"].value, page =page, size = size).subscribe(
      response=>{
        if(response==null){
          this.isEmpty=true;
          this.loadingPage = false;
        }else{
          this.isEmpty=false;
          this.pageGroupUser=response;
          this.loadingPage = false;
        }
      },
      error=>{
        this.loadingPage = false;
      }
    );
  }

  
  updateOnclickGen(e: any) {
    if(this.valueToSearch.length!>0){
      this.pageSwitchsearchName(this.valueToSearch, 0, 5);
    }else{
      this.pageSwitch(0,5);
    }
  }



}
