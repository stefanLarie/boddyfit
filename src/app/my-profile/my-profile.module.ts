import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyProfileRoutingModule } from './my-profile-routing.module';


import {AvatarComponent} from '../ui-components/avatar/avatar.component'
import { SelfComponent } from './self/self.component';
import { MenuListWrapperFacadeComponent } from './menu-list/menu-list-wrapper-facade/menu-list-wrapper-facade.component';
import { EditProfileComponent } from './menu-list/edit-profile/edit-profile.component';
import { MyTeamComponent } from './menu-list/my-team/my-team.component';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTreeModule} from '@angular/material/tree';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    AvatarComponent,
    SelfComponent,
    MenuListWrapperFacadeComponent,
    EditProfileComponent,
    MyTeamComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatSidenavModule,
    MatTreeModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatTabsModule,
    MyProfileRoutingModule
  ]
})
export class MyProfileModule { }
