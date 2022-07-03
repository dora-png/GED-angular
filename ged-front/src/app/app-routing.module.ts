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


const spb: Route={
  path: 'signal-problem',
  component: SignalPbComponent,
  canActivate:[AuthGuard],
  data: {
    title: 'Signaler un probleme',
    breadcrumb: [
      { routerLink: '/documentation', text: 'Acceuil' }
    ]
  }
};
const defaultRoute: Route = {
  path: '**',
  component: LoginComponent//change
};
const help: Route={
  path: 'help',
  component: HelpPageComponent,
  canActivate:[AuthGuard],
  data: {
    title: 'HELP',
    breadcrumb: [
      { routerLink: '/documentation', text: 'Acceuil' }
    ]
  }
};

const group: Route={
  path: 'manage/security',
  component: ListGroupUserComponent,
  canActivate:[AuthGuard],
  data: {
    title: 'Roles & Groupes',
    breadcrumb: [
      { routerLink: '/manage/index', text: 'Dashboard Management' }
    ]
  }
};
const organigram: Route={
  path: 'manage/organigram',
  component: OrganigramComponent,
  canActivate:[AuthGuard],
  data: {
    title: 'Organigram',
    breadcrumb: [
      { routerLink: '/manage/index', text: 'Dashboard Management' }
    ]
  }
};
const dashboard: Route={
  path: 'dashboard',
  component: DashboardComponent,
  canActivate:[AuthGuard],
  data: {
    title: 'Dashboard'
  }
};
const liasse: Route={
  path: 'manage/liasse',
  component: ListLiasseComponent,
  canActivate:[AuthGuard],
  data: {
    title: 'Liste des Documents',
    breadcrumb: [
      { routerLink: '/manage/index', text: 'Dashboard Management' }
    ]
  }
};
const documentation: Route={
  path: 'documentation',
  component: LastDocOpenComponent,
  canActivate:[AuthGuard],
  data: {
    title: 'Accueil'
  }
};
const archive: Route={
  path: 'archive',
  component: ListArchiveComponent,
  canActivate:[AuthGuard],
  data: {
    title: 'Archive'
  }
};
const courrier: Route={
  path: 'courrier',
  component: ListCourrierComponent,
  canActivate:[AuthGuard],
  data: {
    title: 'Courrier'
  }
};
const structure: Route={
  path: 'manage/structure',
  component: ListStructureComponent,
  canActivate:[AuthGuard],
  data: {
    title: 'Liste des Structures',
    breadcrumb: [
      { routerLink: '/manage/index', text: 'Dashboard Management' }
    ]
  }
};
const user: Route={
  path: 'manage/users',
  component: ListUserComponent,
  canActivate:[AuthGuard],
  data: {
    title: 'Liste des Users',
    breadcrumb: [
      { routerLink: '/manage/index', text: 'Dashboard Management' }
    ]
  }
};
const login: Route={
  path: 'login',
  component: LoginComponent
};
const poste: Route={
  path: 'manage/poste',
  component: ListPosteComponent,
  canActivate:[AuthGuard],
  data: {
    title: 'Liste des Postes',
    breadcrumb: [
      { routerLink: '/manage/index', text: 'Dashboard Management' }
    ]
  }
};
const workflow: Route={
  path: 'manage/workflow',
  component: ListWorkflowComponent,
  canActivate:[AuthGuard],
  data: {
    title: 'Liste des Workflows',
    breadcrumb: [
      { routerLink: '/manage/index', text: 'Dashboard Management' }
    ]
  }
};
const index: Route={
  path: 'manage/index',
  component: ManageIndexComponent,
  canActivate:[AuthGuard],
  data: {
    title: 'Liste des Workflows',
    breadcrumb: [
      { routerLink: '/dashboard', text: 'Dashboard' }
    ]
  }
};
const typeLiasse: Route={
  path: 'manage/type-of-liasse',
  component: ListTypeliasseComponent,
  canActivate:[AuthGuard],
  data: {
    title: 'Type de Documents',
    breadcrumb: [
      { routerLink: '/manage/index', text: 'Dashboard Management' }
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
  spb,
  user,
  login,
  courrier,
  index,
  {path:"", redirectTo:"login",pathMatch:"full"},
  defaultRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }