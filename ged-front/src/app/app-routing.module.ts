import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';
import { ListTypedocComponent } from './pages/documentation/typedoc/list-typedoc/list-typedoc.component';
import { ListLiasseComponent } from './pages/documentation/liasse/list-liasse/list-liasse.component';
import { ListTypeliasseComponent } from './pages/documentation/typeliasse/list-typeliasse/list-typeliasse.component';
import { LastDocOpenComponent } from './pages/documentation/document/last-doc-open/last-doc-open.component';
import { DashboardComponent } from './pages/management/dashboard/dashboard.component';
import { ListStructureComponent } from './pages/management/structure/list-structure/list-structure.component';
import { ListPosteComponent } from './pages/management/postes/list-poste/list-poste.component';
import { LoginComponent } from './pages/login/login.component';
import { ListWorkflowComponent } from './pages/management/workflow/list-workflow/list-workflow.component';
import { OrganigramComponent } from './pages/management/organigramme/organigram/organigram.component';
import { HelpPageComponent } from './utils/help-page/help-page.component';
import { ListUserComponent } from './pages/management/users/list-user/list-user.component';
import { SignalPbComponent } from './utils/signal-pb/signal-pb.component';
import { ListArchiveComponent } from './pages/archive/list-archive/list-archive.component';
import { ListCourrierComponent } from './pages/courrier/list-courrier/list-courrier.component';
import { ManageIndexComponent } from './pages/management/manage-index/manage-index.component';
import { ListGroupUserComponent } from './pages/management/group-user/list-group-user/list-group-user.component';
import { AuthGuard } from './loader/auth-guard-service';
import { AddUserComponent } from './pages/management/users/add-user/add-user.component';
import { ErrorComponent } from './utils/error/error.component';
import { HomeComponent } from './pages/home/home/home.component';
import * as constant from './loader/constante';
import { MultipleFilesComponent } from './utils/multiple-files/multiple-files.component';
import { SingleFileComponent } from './utils/single-file/single-file.component';
import { MyfilesComponent } from './pages/documentation/myfiles/myfiles.component';
import { EntrepotsComponent } from './pages/documentation/entrepots/entrepots.component';
import { DashbordUserComponent } from './pages/documentation/dashbord/dashbord.component';
import { ProfilComponent } from './pages/management/users/profil/profil.component';
import { AddGroupUserComponent } from './pages/management/group-user/add-group-user/add-group-user.component';
import { InfosGroupUserComponent } from './pages/management/group-user/infos-group-user/infos-group-user.component';
import { CreateStructureComponent } from './pages/management/structure/create-structure/create-structure.component';
import { ReadStructureComponent } from './pages/management/structure/read-structure/read-structure.component';
import { AddSubstructureComponent } from './pages/management/structure/add-substructure/add-substructure.component';

const addSubStructure: Route={
  path: "structure/add-sub-structure/:id",
  component: AddSubstructureComponent,
  canActivate:[AuthGuard],
  data: {
    title: "Listes Structures",
    breadcrumb: [
      { routerLink: constant.structurePath, text: "Add SubStructure" }
    ]
  }
};

const addStructure: Route={
  path: "structure/add-structure",
  component: CreateStructureComponent,
  canActivate:[AuthGuard],
  data: {
    title: "Listes Structures",
    breadcrumb: [
      { routerLink: constant.structurePath, text: "Add Structures" }
    ]
  }
};

const viewStructure: Route={
  path: "structure/view-structure/:id",
  component: ReadStructureComponent,
  canActivate:[AuthGuard],
  data: {
    title: "Listes Structures",
    update: false,
    breadcrumb: [
      { routerLink: constant.structurePath, text: "view Structure" }
    ]
  }
};

const viewGroupUser: Route={
  path: "group/view-group/:id",
  component: InfosGroupUserComponent,
  canActivate:[AuthGuard],
  data: {
    title: "Listes Groupe",
    update: false,
    breadcrumb: [
      { routerLink: constant.groupPath, text: "view User Group" }
    ]
  }
};

const addGroupUser: Route={
  path: "group/add-group-user",
  component: AddGroupUserComponent,
  canActivate:[AuthGuard],
  data: {
    title: "Listes Groupes",
    breadcrumb: [
      { routerLink: constant.groupPath, text: "Add Group User" }
    ]
  }
};

const viewUser: Route={
  path: "profile/view-profile/:id",
  component: ProfilComponent,
  canActivate:[AuthGuard],
  data: {
    title: "Listes Profile",
    update: false,
    breadcrumb: [
      { routerLink: constant.userPath, text: "view User Profile" }
    ]
  }
};

const entrepot: Route={
  path: "entrepot",
  component: EntrepotsComponent,
  canActivate:[AuthGuard],
  data: {
    title: "Entrepot"    
  }
};
const updateUser: Route={
  path: "profile/update-profile/:id",
  component: ProfilComponent,
  canActivate:[AuthGuard],
  data: {
    title: "Listes Profile",
    update: true,
    breadcrumb: [
      { routerLink: constant.userPath, text: "Update User" }
    ]
  }
};
const addUser: Route={
  path: "profile/add-profile",
  component: AddUserComponent,
  canActivate:[AuthGuard],
  data: {
    title: "Listes Profile",
    breadcrumb: [
      { routerLink: constant.userPath, text: "Add User" }
    ]
  }
};
const spb: Route={
  path: constant.spb,
  component: SignalPbComponent,
  canActivate:[AuthGuard],
  data: {
    title: constant.spbName,
    breadcrumb: [
      { routerLink: constant.documentationPath, text: constant.documentationName }
    ]
  }
};
const defaultRoute: Route = {
  path: constant.defaultRoute,
  component: LoginComponent//change
};
const multipleFile: Route = {
  path: "download-folder",
  //canActivate:[AuthGuard],
  component: MultipleFilesComponent//change
};
const singleFile: Route = {
  path: "download-file",
  //canActivate:[AuthGuard],
  component: SingleFileComponent//change
};
const myfile: Route = {
  path: 'myfile',
  component: MyfilesComponent,
  canActivate:[AuthGuard]
};
const dashboarduser: Route = {
  path: 'dashboarduser',
  component: DashbordUserComponent,
  canActivate:[AuthGuard]
};
const home: Route = {
  path: constant.home,
  component: HomeComponent,
  canActivate:[AuthGuard]
};
const help: Route={
  path: constant.help,
  component: HelpPageComponent,
  canActivate:[AuthGuard],
  data: {
    title: constant.helpName,
    breadcrumb: [
      { routerLink: constant.documentationPath, text: constant.documentationName }
    ]
  }
};

const group: Route={
  path: constant.group,
  component: ListGroupUserComponent,
  canActivate:[AuthGuard],
  data: {
    title: constant.groupName,
    breadcrumb: [
      { routerLink: constant.manageIndexPath, text: constant.manageName }
    ]
  }
};
const organigram: Route={
  path: constant.organigram,
  component: OrganigramComponent,
  canActivate:[AuthGuard],
  data: {
    title: constant.organigramName,    
    breadcrumb: [
      { routerLink: constant.manageIndexPath, text: constant.manageName }
    ]
  }
};
const dashboard: Route={
  path: constant.dashboard,
  component: DashboardComponent,
  canActivate:[AuthGuard],
  data: {
    title: constant.dashboardName,
    breadcrumb: [
      { routerLink: constant.manageIndexPath, text: constant.manageName }
    ]
  }
};
const liasse: Route={
  path: constant.liasse,
  component: ListLiasseComponent,
  canActivate:[AuthGuard],
  data: {
    title: constant.liasseName,
    breadcrumb: [
      { routerLink: constant.manageIndexPath, text: constant.manageName }
    ]
  }
};
const documentation: Route={
  path: constant.documentation,
  component: LastDocOpenComponent,
  canActivate:[AuthGuard],
  data: {
    title: constant.documentationName
  }
};
const archive: Route={
  path: constant.archive,
  component: ListArchiveComponent,
  canActivate:[AuthGuard],
  data: {
    title: constant.archiveName,
    breadcrumb: [
      { routerLink: constant.manageIndexPath, text: constant.manageName }
    ]
  }
  
};
const courrier: Route={
  path: constant.courrier,
  component: ListCourrierComponent,
  canActivate:[AuthGuard],
  data: {
    title: constant.courrierName,
    breadcrumb: [
      { routerLink: constant.manageIndexPath, text: constant.manageName }
    ]
  }
  
};
const structure: Route={
  path: constant.structure,
  component: ListStructureComponent,
  canActivate:[AuthGuard],
  data: {
    title: constant.structureName,
    breadcrumb: [
      { routerLink: constant.manageIndexPath, text: constant.manageName }
    ]
  }
};
const user: Route={
  path: constant.user,
  component: ListUserComponent,
  canActivate:[AuthGuard],
  data: {
    title: constant.userName,
    breadcrumb: [
      { routerLink: constant.manageIndexPath, text: constant.manageName }
    ]
  }
};
const login: Route={
  path: constant.login,
  component: LoginComponent
};
const poste: Route={
  path: constant.poste,
  component: ListPosteComponent,
  canActivate:[AuthGuard],
  data: {
    title: constant.posteName,
    breadcrumb: [
      { routerLink: constant.manageIndexPath, text: constant.manageName }
    ]
  }
};
const workflow: Route={
  path: constant.workflow,
  component: ListWorkflowComponent,
  canActivate:[AuthGuard],
  data: {
    title: constant.workflowName,
    breadcrumb: [
      { routerLink: constant.manageIndexPath, text: constant.manageName }
    ]
  }
};
const index: Route={
  path: constant.manageIndex,
  component: ManageIndexComponent,
  canActivate:[AuthGuard],
  data: {
    title: constant.manageName
  }
};
const typeLiasse: Route={
  path: constant.typeLiasse,
  component: ListTypeliasseComponent,
  canActivate:[AuthGuard],
  data: {
    title: constant.typeLiasseName,
    breadcrumb: [
      { routerLink: constant.manageIndexPath, text: constant.manageName }
    ]
  }
};
const routes: Routes = [
  archive,
  typeLiasse,
  dashboard,
  dashboarduser,
  liasse,
  group,
  documentation,
  structure,
  poste,
  workflow,
  organigram,
  entrepot,
  help,
  viewGroupUser,
  addGroupUser,
  home,
  addSubStructure,
  addStructure,
  viewStructure,
  spb,
  addUser,
  updateUser,
  viewUser,
  user,
  login,
  courrier,
  index,
  multipleFile,
  singleFile,
  myfile,
  {path:constant.tokenDefaultValue, redirectTo: constant.loginPath, pathMatch: constant.full},
  defaultRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }