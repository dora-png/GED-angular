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
import { ErrorComponent } from './utils/error/error.component';
import { HomeComponent } from './pages/home/home/home.component';
import * as constant from './loader/constante';
import { MultipleFilesComponent } from './utils/multiple-files/multiple-files.component';
import { SingleFileComponent } from './utils/single-file/single-file.component';


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
  liasse,
  group,
  documentation,
  structure,
  poste,
  workflow,
  organigram,
  help,
  home,
  spb,
  user,
  login,
  courrier,
  index,
  multipleFile,
  singleFile,
  {path:constant.tokenDefaultValue, redirectTo: constant.loginPath, pathMatch: constant.full},
  defaultRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }