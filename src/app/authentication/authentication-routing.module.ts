import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component'


const routes: Routes = [
  { path: '', redirectTo: 'authentication', pathMatch: 'full'},
  { path: 'authentication', component: NavBarComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
