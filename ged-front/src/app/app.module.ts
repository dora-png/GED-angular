import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTreeModule} from '@angular/material/tree';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSortModule} from '@angular/material/sort';
import {MatDialogModule} from '@angular/material/dialog';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDividerModule} from '@angular/material/divider';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatSelectModule} from '@angular/material/select';
import { NgxOrgChartModule } from 'ngx-org-chart';
import { NgChartsModule } from 'ng2-charts';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatStepperModule } from '@angular/material/stepper';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterceptorService } from './loader/interceptor.service';
import { NavComponent } from './nav/nav.component';
import { ApiModule, Configuration } from './model/index';
import { CreateDocComponent } from './pages/documentation/document/create-doc/create-doc.component';
import { ReadDocComponent } from './pages/documentation/document/read-doc/read-doc.component';
import { UpdateDocComponent } from './pages/documentation/document/update-doc/update-doc.component';
import { DeleteDocComponent } from './pages/documentation/document/delete-doc/delete-doc.component';
import { CreateTypedocComponent } from './pages/documentation/typedoc/create-typedoc/create-typedoc.component';
import { ReadTypedocComponent } from './pages/documentation/typedoc/read-typedoc/read-typedoc.component';
import { UpdateTypedocComponent } from './pages/documentation/typedoc/update-typedoc/update-typedoc.component';
import { DeleteTypedocComponent } from './pages/documentation/typedoc/delete-typedoc/delete-typedoc.component';
import { ListTypedocComponent } from './pages/documentation/typedoc/list-typedoc/list-typedoc.component';
import { ListLiasseComponent } from './pages/documentation/liasse/list-liasse/list-liasse.component';
import { CreateLiasseComponent } from './pages/documentation/liasse/create-liasse/create-liasse.component';
import { UpdateLiasseComponent } from './pages/documentation/liasse/update-liasse/update-liasse.component';
import { DeleteLiasseComponent } from './pages/documentation/liasse/delete-liasse/delete-liasse.component';
import { ReadLiasseComponent } from './pages/documentation/liasse/read-liasse/read-liasse.component';
import { ReadTypeliasseComponent } from './pages/documentation/typeliasse/read-typeliasse/read-typeliasse.component';
import { CreateTypeliasseComponent } from './pages/documentation/typeliasse/create-typeliasse/create-typeliasse.component';
import { UpdateTypeliasseComponent } from './pages/documentation/typeliasse/update-typeliasse/update-typeliasse.component';
import { ListTypeliasseComponent } from './pages/documentation/typeliasse/list-typeliasse/list-typeliasse.component';
import { DeleteTypeliasseComponent } from './pages/documentation/typeliasse/delete-typeliasse/delete-typeliasse.component';
import { LastDocOpenComponent } from './pages/documentation/document/last-doc-open/last-doc-open.component';
import { CreateCourrierComponent } from './pages/courrier/create-courrier/create-courrier.component';
import { UpdateCourrierComponent } from './pages/courrier/update-courrier/update-courrier.component';
import { ReadCourrierComponent } from './pages/courrier/read-courrier/read-courrier.component';
import { DeleteCourrierComponent } from './pages/courrier/delete-courrier/delete-courrier.component';
import { SendCourrierToStructureComponent } from './pages/courrier/send-courrier-to-structure/send-courrier-to-structure.component';
import { ReadArchiveComponent } from './pages/archive/read-archive/read-archive.component';
import { UpdateArchiveComponent } from './pages/archive/update-archive/update-archive.component';
import { ShareArchiveComponent } from './pages/archive/share-archive/share-archive.component';
import { AddArchiveComponent } from './pages/archive/add-archive/add-archive.component';
import { SearchDocComponent } from './pages/documentation/document/search-doc/search-doc.component';
import { SearchArchiveComponent } from './pages/archive/search-archive/search-archive.component';
import { SearchCourrierComponent } from './pages/courrier/search-courrier/search-courrier.component';
import { DashboardComponent } from './pages/management/dashboard/dashboard.component';
import { ListStructureComponent } from './pages/management/structure/list-structure/list-structure.component';
import { CreateStructureComponent } from './pages/management/structure/create-structure/create-structure.component';
import { UpdateStructureComponent } from './pages/management/structure/update-structure/update-structure.component';
import { DeleteStructureComponent } from './pages/management/structure/delete-structure/delete-structure.component';
import { ReadStructureComponent } from './pages/management/structure/read-structure/read-structure.component';
import { AddSubstructureComponent } from './pages/management/structure/add-substructure/add-substructure.component';
import { ListPosteComponent } from './pages/management/postes/list-poste/list-poste.component';
import { CreatePosteComponent } from './pages/management/postes/create-poste/create-poste.component';
import { ReadPosteComponent } from './pages/management/postes/read-poste/read-poste.component';
import { UpdatePosteComponent } from './pages/management/postes/update-poste/update-poste.component';
import { DeletePosteComponent } from './pages/management/postes/delete-poste/delete-poste.component';
import { AddSubposteComponent } from './pages/management/postes/add-subposte/add-subposte.component';
import { SetUserToSubposteComponent } from './pages/management/postes/set-user-to-subposte/set-user-to-subposte.component';
import { RoleToPosteComponent } from './pages/management/postes/role-to-poste/role-to-poste.component';
import { LoginComponent } from './pages/login/login.component';
import { CreateWorkflowComponent } from './pages/management/workflow/create-workflow/create-workflow.component';
import { ReadWorkflowComponent } from './pages/management/workflow/read-workflow/read-workflow.component';
import { UpdateWorkflowComponent } from './pages/management/workflow/update-workflow/update-workflow.component';
import { DeleteWorkflowComponent } from './pages/management/workflow/delete-workflow/delete-workflow.component';
import { ListWorkflowComponent } from './pages/management/workflow/list-workflow/list-workflow.component';
import { AddPosteToWorkflowComponent } from './pages/management/workflow/add-poste-to-workflow/add-poste-to-workflow.component';
import { OrganigramStructureComponent } from './pages/management/organigramme/organigram-structure/organigram-structure.component';
import { OrganigramComponent } from './pages/management/organigramme/organigram/organigram.component';
import { BreadcrumbComponent } from './utils/breadcrumb/breadcrumb.component';
import { BottomsheetComponent } from './utils/bottomsheet/bottomsheet.component';
import { FooterComponent } from './utils/footer/footer.component';
import { HelpPageComponent } from './utils/help-page/help-page.component';
import { SearchComponent } from './utils/search/search.component';
import { SignalPbComponent } from './utils/signal-pb/signal-pb.component';
import { HardwareComponent } from './utils/hardware/hardware.component';
import { LoaderComponent } from './utils/loader/loader.component';
import { LoaderSliteComponent } from './utils/loader-slite/loader-slite.component';
import { NavTableComponent } from './utils/nav-table/nav-table.component';
import { SearchTypeliasseComponent } from './pages/documentation/typeliasse/search-typeliasse/search-typeliasse.component';
import { SearchLiasseComponent } from './pages/documentation/liasse/search-liasse/search-liasse.component';
import { ListDocComponent } from './pages/documentation/document/list-doc/list-doc.component';
import { ListUserComponent } from './pages/management/users/list-user/list-user.component';
import { ReadUserComponent } from './pages/management/users/read-user/read-user.component';
import { ListArchiveComponent } from './pages/archive/list-archive/list-archive.component';
import { ListCourrierComponent } from './pages/courrier/list-courrier/list-courrier.component';
import { ProfilComponent } from './pages/management/users/profil/profil.component';
import { ErrorComponent } from './utils/error/error.component';
import { AuthenticationService } from './loader/authentication.service';
import { LocalDaoService } from './loader/local-dao.service';
import { ManageIndexComponent } from './pages/management/manage-index/manage-index.component';
import { MenuManageComponent } from './pages/management/menu-manage/menu-manage.component';
import { ListGroupUserComponent } from './pages/management/group-user/list-group-user/list-group-user.component';
import { AddGroupUserComponent } from './pages/management/group-user/add-group-user/add-group-user.component';
import { UpdateGroupUserComponent } from './pages/management/group-user/update-group-user/update-group-user.component';
import { InfosGroupUserComponent } from './pages/management/group-user/infos-group-user/infos-group-user.component';
import { AddRoleGroupUserComponent } from './pages/management/group-user/add-role-group-user/add-role-group-user.component';
import { AddPosteGroupUserComponent } from './pages/management/group-user/add-poste-group-user/add-poste-group-user.component';
import { AuthGuard } from './loader/auth-guard-service';
import { ListEmptyComponent } from './utils/list-empty/list-empty.component';
import { FolderComponent } from './pages/home/folder/folder.component';
import { FilesComponent } from './pages/home/files/files.component';
import { HomeComponent } from './pages/home/home/home.component';
import { UploadFileComponent } from './utils/upload-file/upload-file.component';
import { UploadFolderComponent } from './utils/upload-folder/upload-folder.component';
import { AddFolderComponent } from './utils/add-folder/add-folder.component';
import { DetailsComponent } from './pages/home/details/details.component';
import { SingleFileComponent } from './utils/single-file/single-file.component';
import { MultipleFilesComponent } from './utils/multiple-files/multiple-files.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { DndDirective } from './directives/dnd.directive';
import { ProgressComponent } from './utils/progress/progress.component';
import { AddUserComponent } from './pages/management/users/add-user/add-user.component';
import { AddRemoveInGroupComponent } from './pages/management/users/add-remove-in-group/add-remove-in-group.component';
import { AddRemoveDroitComponent } from './pages/management/users/add-remove-droit/add-remove-droit.component';
import { UpdateNameComponent } from './pages/management/users/update-name/update-name.component';
import { UpdateUserComponent } from './pages/management/users/update-user/update-user.component';

export const getConfiguration = () => {
  return new Configuration({
    /*basePath: environment.basePath,
    accessToken: getToken*/
  })
}
const MATERIAL=[
  MatListModule,
  MatTabsModule,
  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatSelectModule,
  MatTreeModule,
  MatCardModule,
  MatTableModule,
  MatCheckboxModule,
  MatRadioModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatTooltipModule,
  MatDialogModule,
  MatSortModule,
  MatBadgeModule,
  MatDatepickerModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatBottomSheetModule,
  MatDividerModule,
  MatListModule,
  MatGridListModule,
  ReactiveFormsModule,
  MatProgressSpinnerModule,
  MatTreeModule,
  MatExpansionModule,
  MatStepperModule,
  MatSlideToggleModule,
  MatGridListModule,
  ReactiveFormsModule,
  LayoutModule,
  MatButtonModule,
  MatProgressBarModule,
  MatMenuModule,
];
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CreateDocComponent,
    ReadDocComponent,
    UpdateDocComponent,
    DeleteDocComponent,
    CreateTypedocComponent,
    ReadTypedocComponent,
    UpdateTypedocComponent,
    DeleteTypedocComponent,
    ListTypedocComponent,
    ListLiasseComponent,
    CreateLiasseComponent,
    UpdateLiasseComponent,
    DeleteLiasseComponent,
    ReadLiasseComponent,
    ReadTypeliasseComponent,
    CreateTypeliasseComponent,
    UpdateTypeliasseComponent,
    ListTypeliasseComponent,
    DeleteTypeliasseComponent,
    LastDocOpenComponent,
    CreateCourrierComponent,
    UpdateCourrierComponent,
    ReadCourrierComponent,
    DeleteCourrierComponent,
    SendCourrierToStructureComponent,
    ReadArchiveComponent,
    UpdateArchiveComponent,
    ShareArchiveComponent,
    AddArchiveComponent,
    SearchDocComponent,
    SearchArchiveComponent,
    SearchCourrierComponent,
    DashboardComponent,
    ListStructureComponent,
    CreateStructureComponent,
    UpdateStructureComponent,
    DeleteStructureComponent,
    ReadStructureComponent,
    AddSubstructureComponent,
    ListPosteComponent,
    CreatePosteComponent,
    ReadPosteComponent,
    UpdatePosteComponent,
    DeletePosteComponent,
    AddSubposteComponent,
    SetUserToSubposteComponent,
    RoleToPosteComponent,
    LoginComponent,
    CreateWorkflowComponent,
    ReadWorkflowComponent,
    UpdateWorkflowComponent,
    DeleteWorkflowComponent,
    ListWorkflowComponent,
    AddPosteToWorkflowComponent,
    OrganigramStructureComponent,
    OrganigramComponent,
    BreadcrumbComponent,
    BottomsheetComponent,
    FooterComponent,
    HelpPageComponent,
    SearchComponent,
    SignalPbComponent,
    HardwareComponent,
    LoaderComponent,
    LoaderSliteComponent,
    NavTableComponent,
    SearchTypeliasseComponent,
    SearchLiasseComponent,
    ListDocComponent,
    ListUserComponent,
    ReadUserComponent,
    ListArchiveComponent,
    ListCourrierComponent,
    ProfilComponent,
    ErrorComponent,
    ManageIndexComponent,
    MenuManageComponent,
    ListGroupUserComponent,
    AddGroupUserComponent,
    UpdateGroupUserComponent,
    InfosGroupUserComponent,
    AddRoleGroupUserComponent,
    AddPosteGroupUserComponent,
    ListEmptyComponent,
    FolderComponent,
    FilesComponent,
    HomeComponent,
    UploadFileComponent,
    UploadFolderComponent,
    AddFolderComponent,
    DetailsComponent,
    SingleFileComponent,
    MultipleFilesComponent,
    DndDirective,
    ProgressComponent,
    AddUserComponent,
    AddRemoveInGroupComponent,
    AddRemoveDroitComponent,
    UpdateNameComponent,
    UpdateUserComponent,
  ],
  imports: [
    AppRoutingModule,    
    BrowserModule,
    MATERIAL,
    FormsModule,
    NgChartsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxOrgChartModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    DragDropModule,
    NgxDropzoneModule,
	  ApiModule.forRoot(getConfiguration)
  ],
  providers: [
    AuthenticationService,
    LocalDaoService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
