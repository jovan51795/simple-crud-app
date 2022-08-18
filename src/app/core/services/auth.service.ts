import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { catchError, Observable, of, tap } from 'rxjs';
import { UserAuth } from 'src/app/auth-components/model/auth-model';
import { User } from 'src/app/user/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router, private toast: ToastrService ) { }

  register = (userData: UserAuth) => {
    return this.http.post(`${environment.url}/register`, userData).pipe(
      catchError(err => {
        this.toast.error(err.error)
        return of(err)
      }),
      tap((x: any) => {
        if(x.accessToken) {
          this.router.navigate(['login'])
        }
      })
    )
  }

  login = (userData: any) => {
    return this.http.post(`${environment.url}/login`, userData)
    .pipe(
      catchError(err => {
        console.log(err)
        this.toast.error(err.error)
        return of(err)
      }),
      tap(x => x)

    )
  }

  getToken(){
    return localStorage.getItem("token")? true: false;
  }

}
