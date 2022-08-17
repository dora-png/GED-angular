import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { delay } from 'rxjs';
import { LoaderService } from 'src/app/loader/loader.service';
import { GroupProfile, GroupProfilesBean, GroupUserControllerService, PageGroupProfile } from 'src/app/model';

@Component({
  selector: 'app-add-remove-in-group',
  templateUrl: './add-remove-in-group.component.html',
  styleUrls: ['./add-remove-in-group.component.scss']
})
export class AddRemoveInGroupComponent implements OnInit {

  
  isEmpty: boolean = true;
  loading: boolean = true;
  clicked: boolean = false;
  pageGroupProfile!: PageGroupProfile;

  constructor( 
    @Inject(MAT_DIALOG_DATA) private data: number,
    private loaderService: LoaderService,
    private apiService: GroupUserControllerService,
    private dialogRef:  MatDialogRef<AddRemoveInGroupComponent>
  ) { }

  ngOnInit(): void {
    //this.listenToLoading();
    this.init(0,5);
    
  }

  private listenToLoading(): void {
    this.loaderService.getSub
      .pipe(delay(0)) // This prevents a ExpressionChangedAfterItHasBeenCheckedError for subsequent requests
      .subscribe((loading) => {
        this.loading = loading;
      });
  }

  private init(page: number, size: number) {
    this.apiService.findAllGroupForProfile(this.data, page, size).subscribe(
      response=>{
        if(response==null){
          this.isEmpty = true;
          this.pageGroupProfile = response;
        }else{
          this.isEmpty = false;
          this.pageGroupProfile = response;
        }
        this.loading = false;
        
      },
      error=>{

      }
    );
  }

  changePageAndSize(event: any){
    this.init(event.page,5);
  }

  onRemove(groupProfile: GroupProfile){    
    let groupProfilesBean: GroupProfilesBean = {
      groupe: groupProfile.groupuserId?.idgroupes!,
      profile: groupProfile.profileId?.idProfiles!
    } 
    this.listenToLoading();
    this.apiService.removeProfileToGroup(groupProfilesBean).subscribe(
      response=>{
        this.init(0,5);

      },
      error=>{

      }
    );

  }

  onClose(){
    this.closeModal(false);
  }

  private closeModal(value: boolean){
    this.dialogRef.close(value);
  }

}
