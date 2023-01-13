import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    constructor() { }

    isLoggedIn() {
        const helper = new JwtHelperService();
        let token = localStorage.getItem('userToken');
        const isExpired = helper.isTokenExpired(token?.toString()!);
        return !isExpired;
    }
}
