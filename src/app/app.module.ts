import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { MyProfileModule } from './my-profile/my-profile.module'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProgressSpinnerComponent } from './ui-components/progress-spinner/progress-spinner.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProgressSpinnerInterceptorService } from './interceptors/progress-spinner/progress-spinner-interceptor.service';
import { sessionIdInterceptor } from './interceptors/session-Id/session-Id-interceptor';



@NgModule({
  declarations: [
    AppComponent,
    ProgressSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthenticationModule,
    MyProfileModule,
    
    MatProgressSpinnerModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:ProgressSpinnerInterceptorService, multi:true},
    {provide:HTTP_INTERCEPTORS, useClass:sessionIdInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
