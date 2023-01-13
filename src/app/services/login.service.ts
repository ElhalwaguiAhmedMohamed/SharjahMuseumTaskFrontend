import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { LoginReponse } from '../models/LoginResponse';
import { UserCredentials } from '../models/UserCredentials'

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    BASE_URL = "https://localhost:7017/api/Users/Login"

    constructor(private httpClient: HttpClient) { }

    login(userCredentials: UserCredentials): Observable<LoginReponse> {
        return this.httpClient.post<LoginReponse>(this.BASE_URL, userCredentials);
    }
}