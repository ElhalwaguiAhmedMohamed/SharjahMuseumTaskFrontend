import { Component, OnInit } from '@angular/core';
import { UserCredentials } from 'src/app/models/UserCredentials';
import { Router } from '@angular/router'
import { LoginService } from 'src/app/services/login.service';
import { LoginReponse } from 'src/app/models/LoginResponse';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userCredentials: UserCredentials = new UserCredentials('', '');
  constructor(private loginService: LoginService, private router: Router) {

  }
  ngOnInit(): void { }

  login() {
    this.loginService
      .login(this.userCredentials)
      .subscribe({
        next: (data: LoginReponse) => {
          localStorage.setItem('userToken', data.token);
        },
        error: (err) => console.log(err),
        complete: () => console.log('Login completed')
      })
  }
}
