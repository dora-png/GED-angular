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

const spb: Route={
  path: 'signal-problem',
  component: SignalPbComponent,
  data: {
    title: 'Signaler un probleme',
    breadcrumb: [
      { routerLink: '/documentation', text: 'Acceuil' }
    ]
  }
};
const help: Route={
  path: 'help',
  component: HelpPageComponent,
  data: {
    title: 'HELP',
    breadcrumb: [
      { routerLink: '/documentation', text: 'Acceuil' }
    ]
  }
};
const organigram: Route={
  path: 'manage/organigram',
  component: OrganigramComponent,
  data: {
    title: 'Organigram',
    breadcrumb: [
      { routerLink: '/dashboard', text: 'Dashboard' }
    ]
  }
};
const dashboard: Route={
  path: 'dashboard',
  component: DashboardComponent,
  data: {
    title: 'Dashboard'
  }
};
const liasse: Route={
  path: 'manage/liasse',
  component: ListLiasseComponent,
  data: {
    title: 'Liste des Documents',
    breadcrumb: [
      { routerLink: '/dashboard', text: 'Dashboard' }
    ]
  }
};
const documentation: Route={
  path: 'documentation',
  component: LastDocOpenComponent,
  data: {
    title: 'Accueil'
  }
};
const archive: Route={
  path: 'archive',
  component: ListArchiveComponent,
  data: {
    title: 'Archive'
  }
};
const courrier: Route={
  path: 'courrier',
  component: ListCourrierComponent,
  data: {
    title: 'Courrier'
  }
};
const structure: Route={
  path: 'manage/structure',
  component: ListStructureComponent,
  data: {
    title: 'Liste des Structures',
    breadcrumb: [
      { routerLink: '/dashboard', text: 'Dashboard' }
    ]
  }
};
const user: Route={
  path: 'manage/users',
  component: ListUserComponent,
  data: {
    title: 'Liste des Users',
    breadcrumb: [
      { routerLink: '/dashboard', text: 'Dashboard' }
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
  data: {
    title: 'Liste des Postes',
    breadcrumb: [
      { routerLink: '/dashboard', text: 'Dashboard' }
    ]
  }
};
const workflow: Route={
  path: 'manage/workflow',
  component: ListWorkflowComponent,
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
  data: {
    title: 'Type de Documents',
    breadcrumb: [
      { routerLink: '/dashboard', text: 'Dashboard' }
    ]
  }
};
const routes: Routes = [
  archive,
  typeLiasse,
  dashboard,
  liasse,
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
  {path:"", redirectTo:"dashboard",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }