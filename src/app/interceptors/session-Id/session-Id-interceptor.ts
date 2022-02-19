import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class sessionIdInterceptor  implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    req = req.clone({
      withCredentials: true
    });
    if(!req.url.includes('wout/login')){

     req = req.clone({
       headers:req.headers.set('Authorization','')
     })
    }
    return next.handle(req);
  }

  
}
