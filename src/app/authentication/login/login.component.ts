import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from '../authentication-service.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hidePassword = true;
  public employee = 0;
  constructor(private _router: Router, private _snackBar: MatSnackBar, private _authenticationService: AuthenticationServiceService) { }

  ngOnInit(): void {
  }

  login(username: string, password: string) {
    const _restUserCredentials: any = {
      username: username,
      password: password
    }

    this._authenticationService.logIn(_restUserCredentials).subscribe(
      success => {
        this._router.navigateByUrl('/my-profile')
      },
      exception => {
        this._snackBar.open("account not found", "", {
          duration: 3500,
          horizontalPosition: "center",
          verticalPosition: "top",
          panelClass: ['warning-snackbar']
        });
      })
  }
}
