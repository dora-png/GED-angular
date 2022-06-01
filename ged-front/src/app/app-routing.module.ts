import { NgModule } from '@angular/core';
import { RouterModule, Routes, Route } from '@angular/router';
import { ListTypeliasseComponent } from './pages/documentation/typeliasse/list-typeliasse/list-typeliasse.component';
const toto: Route={
  path: 'toto',
  component: ListTypeliasseComponent,
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