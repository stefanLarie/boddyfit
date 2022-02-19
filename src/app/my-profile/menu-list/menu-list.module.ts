import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuListWrapperFacadeComponent } from './menu-list-wrapper-facade/menu-list-wrapper-facade.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MyTeamComponent } from './my-team/my-team.component';




@NgModule({
  declarations: [
    MenuListWrapperFacadeComponent,
    MyTeamComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule
  ] 
  
})
export class MenuListModule { }
