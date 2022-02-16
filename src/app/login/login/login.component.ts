import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { loginModel } from 'src/app/Models/LoginModel';
import { User } from 'src/app/Models/user/User';
import { TokenStorageService } from 'src/app/Services/token.storage.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', './login.component.css']
})
export class LoginComponent implements OnInit {
  user : User;
  loader : boolean = false;
  constructor(private router: Router,
    private _loginService: LoginService,
    private _snackBar: MatSnackBar,
    private _tokenService : TokenStorageService) { }
  loginModel: loginModel;
  @ViewChild('loginForm') loginForm: NgForm;

  ngOnInit() {
    this.loginModel = {
      email: "",
      password: ''
    };

  }
  onSubmit(loginForm) {
    this.loader = true;

    this._loginService.logInFormApi(this.loginModel).subscribe(
      res => {
        if (res.isAuthenticated) {
          // Authenticate user
          this.user = res.applicatonUser
          this._tokenService.saveUser(this.user);
          this._tokenService.saveToken(res.accessToken);
          this._tokenService.isLoggedin();
          this.loader = false;
          this.router.navigate(['/dashboard']);
          
        } else {
          this.loader = false;
          // user isAuthenticated
          // this._snackBar.open('Cannonball!!', 'Splash', {
          //   duration: 2000,
          //   horizontalPosition: 'end',
          //   verticalPosition: 'top',
          // });
          // localStorage.setItem('isLoggedin', 'false');
        }
      },
      // unAuthenticated user logined 
      err => {
        this._snackBar.open(err.error.errors, '', {
          duration: 2000,
          horizontalPosition: 'end',
          verticalPosition: 'top',
          panelClass: ["snackBar-custom-style"]
        });
        this.loader = false;
      }
    )
  }

}

