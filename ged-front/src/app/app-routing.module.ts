import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';
import { ListWorkflowComponent } from './pages/management/workflow/list-workflow/list-workflow.component';
const toto: Route={
  path: 'toto',
  component: ListWorkflowComponent,
};
const routes: Routes = [
  toto,
  {path:"", redirectTo:"toto",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }