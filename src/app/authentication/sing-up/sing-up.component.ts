import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationServiceService } from '../authentication-service.service'
import { TempUser } from '../../../libs/dto'
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})

export class SingUpComponent implements OnInit {
  hidePassword = true;
  strongPassword: number;

  constructor(private _snackBar: MatSnackBar, private _authenticationService: AuthenticationServiceService) {
    this.strongPassword = 0;
  }

  setSlider(password: string) {
    var reg = ["(?=.*[0-9])", "(?=.*[A-Z])", "(?=.{8,})", "(?=.*[a-z])"];
    this.strongPassword = 0;
    reg.forEach((regularExp) => {
      var strongRegex = new RegExp(regularExp);
      if (strongRegex.test(password)) {
        this.strongPassword++;
      }
    })
  }

  ngOnInit(): void {

  }

  singUp(firstName: string, lastName: string, username: string, email: string, password: string, passwordConfirmation: string, gender: number) {
    const _restUser: TempUser = {email:email,
      username:username,
      gender:gender,
      firstName:firstName,
      lastName:lastName,
      password:password,
      passwordConfirmation:passwordConfirmation
    }
    _restUser.username = username;
    _restUser.password = password;
    _restUser.passwordConfirmation = passwordConfirmation
    _restUser.email = email;
    _restUser.firstName = firstName;
    _restUser.lastName = lastName;
    _restUser.gender = gender;


    this._authenticationService.singUp(_restUser)
      .subscribe(
        success => {
          this._snackBar.open(success.message, "", {
            duration: 3500,
            horizontalPosition: "center",
            verticalPosition: "top",
            panelClass: ['success-snackbar']
          })
        },
        exception => {
          this._snackBar.open(exception.error.reason, "", {
            duration: 3500,
            horizontalPosition: "center",
            verticalPosition: "top",
            panelClass: ['warning-snackbar']
          });
        });

  }

}
