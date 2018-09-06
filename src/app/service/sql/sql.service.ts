import { Injectable } from '@angular/core';
import { Http } from '../../../../node_modules/@angular/http';

@Injectable({
  providedIn: 'root'
})
export class SqlService {

  url_t = ' http://tmp.sciencepathshalabd.com/api/index.php';     // Online

  constructor(
    private http: Http
  ) { }

  // this for post reqest serve
  postRequest(Linkext, data) {
    return this.http.post(this.url_t + Linkext, data);
  }

  // this for get request serve
  getRequest(Linkext) {
    return this.http.get(this.url_t + Linkext);
  }
}
