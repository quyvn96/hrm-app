import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SystemConstants } from '.././common/system.constant';
import { LoggedInUser } from '.././domain/loggedin.user';
import { map } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class AuthenService {

  constructor(private _http: HttpClient) { }
  login(username: string, password: string) {
    return this._http.post<any>(SystemConstants.BASE_API + '/api/security/authenticate', { username, password })
    .pipe(map((user:LoggedInUser) => {
     if (user && user.token) {
       localStorage.removeItem(SystemConstants.CURRENT_USER);
       localStorage.setItem(SystemConstants.CURRENT_USER, JSON.stringify(user));
     }
   }));
  }
  logout() {
    localStorage.removeItem(SystemConstants.CURRENT_USER);
  }
  isAuthenticated(): boolean {
    let user = localStorage.getItem(SystemConstants.CURRENT_USER);
    if (user != null)
      return true;
    else
      return false;
  }
  getLoggedInUser(): any {
    let user: LoggedInUser;
    if (this.isAuthenticated()) {
      var userData = JSON.parse(localStorage.getItem(SystemConstants.CURRENT_USER));
      user = new LoggedInUser(userData.userName, userData.dataPermission, userData.userPermission
        , userData.userLocked, userData.nameDisplay, userData.token);
    }
    else
      user = null;
    return user;
  }
}
