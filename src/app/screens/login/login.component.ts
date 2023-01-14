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
  goToPage: string;
  constructor(private loginService: LoginService, private router: Router) {
    this.goToPage = '';
  }
  ngOnInit(): void { }

  login() {
    this.loginService
      .login(this.userCredentials)
      .subscribe({
        next: (data: LoginReponse) => {
          localStorage.setItem('userToken', data.token);
          this.router.navigate(['/employees'])
        },
        error: (err) => console.log(err),
        complete: () => console.log('Login completed', this.goToPage)
      })
  }
}
