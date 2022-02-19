import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelfComponent } from './self/self.component'


const routes: Routes = [
  { path: 'my-profile', component: SelfComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyProfileRoutingModule { }
