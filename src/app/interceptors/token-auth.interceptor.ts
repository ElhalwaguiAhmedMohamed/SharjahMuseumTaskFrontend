import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class TokenAuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService, private router: Router) { }
    intercept(
        request: HttpRequest<unknown>,
        next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
        if (window.location.href.includes('home')) {
            request = request.clone({
                setHeaders: {
                    Authorization: 'true',
                },
            });
        } else {
            if (this.authService.isLoggedIn()) {
                request = request.clone({
                    setHeaders: {
                        Authorization: `Bearer ${localStorage.getItem('userToken')}`,
                    },
                });
            } else {
                this.router.navigate(['login']);
            }
        }
        return next.handle(request);
    }
}
