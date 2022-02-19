import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestUserProfile } from 'src/libs/dto';
import { constants } from '../constants/app.constants';

@Injectable({
  providedIn: 'root'
})
export class MyProfileService {

  constructor(private http: HttpClient){ 


  }

  myProfile(): Observable<RestUserProfile>{
   return this.http.get<RestUserProfile>(constants.serverUrl+'api/rest/wout/myprofile',{withCredentials:true});
  }
}
