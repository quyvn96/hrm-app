import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { SystemConstants } from '.././common/system.constant';
import { AuthenService } from './authen.service';
import { NotificationService } from './notification.service';
import { UtilityService } from './utility.service';
import { MessageConstants } from '../common/message.constant';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private headers = new HttpHeaders();
  constructor(private _http: HttpClient, private _router: Router
    , private _authenService: AuthenService
    , private _notificationService: NotificationService
    , private _utilityService: UtilityService) {
    this.headers = new HttpHeaders();
    this.headers.append('Content-Type', 'application/json');
  }
  private httpHeaders = this.headers.set("Authorization", "Bearer " + this._authenService.getLoggedInUser().token);
  // api get method
  get(uri: string) {
    return this._http.get(SystemConstants.BASE_API + uri, { headers: this.httpHeaders}).pipe(map(this.extractData));
  }
  //api post method
  post(uri: string, data?: any) {
    return this._http.post(SystemConstants.BASE_API + uri, data, { headers: this.httpHeaders }).pipe(map(this.extractData));
  }
  // api put method
  put(uri: string, data?: any) {
    return this._http.put(SystemConstants.BASE_API + uri, data, { headers: this.httpHeaders }).pipe(map(this.extractData));
  }
  // api delete method
  delete(uri: string, key: string, id: string) {
    return this._http.delete(SystemConstants.BASE_API + uri + "/?" + key + "=" + id, { headers: this.httpHeaders }).pipe(map(this.extractData));
  }
  // api delete multi
  deleteWithMultiParams(uri: string, params) {
    var paramStr: string = '';
    for (let param in params) {
      paramStr += param + "=" + params[param] + '&';
    }
    return this._http.delete(SystemConstants.BASE_API + uri + "/?" + paramStr,  { headers: this.httpHeaders }).pipe(map(this.extractData));

  }
  // api post file method
  postFile(uri: string, data?: any) {
    let newHeader = new HttpHeaders();
    newHeader.set("Authorization", "Bearer " + this._authenService.getLoggedInUser().token);
    return this._http.post(SystemConstants.BASE_API + uri, data,{ headers: newHeader }).pipe(map(this.extractData));
  }
  private extractData(res: HttpResponse<object>) {
    let body = res;
    return body || {};
  }
  public handleError(error: any) {
    if (error.status == 401) {
      localStorage.removeItem(SystemConstants.CURRENT_USER);
      this._notificationService.printErrorMessage(MessageConstants.LOGIN_AGAIN_MSG);
      this._utilityService.navigateToLogin();
    }
    else if (error.status == 403) {
      localStorage.removeItem(SystemConstants.CURRENT_USER);
      this._notificationService.printErrorMessage(MessageConstants.FORBIDDEN);
      this._utilityService.navigateToLogin();
    }
    else {
      let errMsg = JSON.parse(error._body).Message;
      this._notificationService.printErrorMessage(errMsg);

      return Observable.throw(errMsg);
    }
  }
}
