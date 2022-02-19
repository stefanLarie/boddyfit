import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TempUser } from '../../libs/dto';
import { constants } from '../constants/app.constants';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor(private http: HttpClient) {

  }

  singUp(restUserDTO: TempUser): Observable<any> {
    return this.http.post(constants.serverUrl+'api/rest/openwout/register', {
      username: restUserDTO.username,
      password: restUserDTO.password,
      email: restUserDTO.email,
      firstName: restUserDTO.firstName,
      lastName: restUserDTO.lastName,
      passwordConfirmation: restUserDTO.passwordConfirmation,
      gender:restUserDTO.gender
    })
  }

  logIn(userCredentials: any): Observable<any> {
    const haderParameters = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
       'Authorization' :'BASIC '+ btoa(userCredentials.username+":"+userCredentials.password)
    }
    const haderOprions = {                                                                                                                                                                                 
      headers:new HttpHeaders(haderParameters) ,
    };
    return this.http.post(constants.serverUrl+'api/rest/wout/login',null,haderOprions);
  }

  logout() : Observable<any>{
   return this.http.post(constants.serverUrl+'logout',null);
  }

}




