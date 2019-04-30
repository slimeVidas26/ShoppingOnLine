import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  logged:any = {
    token: null,
    user: null
  }

  loginmsg:any = {
    text: null
  }

  private _endpointUsers = `http://localhost:3000/shopping/api/users`;
  constructor(private _http : HttpClient ,  private _router : Router) {
    let _sess = localStorage.getItem('_sess');
    if(_sess) {
      this.setLogged(JSON.parse(_sess));
  }
}

  setLogged(obj,notice=null,doStore=false) {
    this.logged.token = obj.token;
    this.logged.user = obj.user;
    this.loginmsg.text = notice;
    if(doStore) {
      localStorage.setItem('_sess',JSON.stringify(obj));    
    }
  }

  createUser(params) {    
    return this._http.post< any >(this._endpointUsers,params);
  }

  get token() {
    return this.logged.token;
  }

  get role() {
    return this.logged.token ? this.logged.user.role : 0;
  }

  get id() {
    return this.logged.token ? this.logged.user._id : 0;
  }

  doLogout() {
    this.setLogged({
      token: null,
      user: null
    },null,true);
    this._router.navigate(['/']);
  }

  login(username,password) {
    return this._http.post< any >(`${this._endpointUsers}/login`,{
      username: username,
      password: password
    }).subscribe(
      result => {
        if(result && result.token) {
          this.setLogged(result,null,true);
          if(this.logged.user.role=="Admin"){
            this._router.navigate(['/admin']);
          }
          else{
            this._router.navigate(['/shop']);
          }
          //this._router.navigate(['/admin']);
       
       
        }
        else {
          this.setLogged({
            token: null,
            user: null
          },'Invalid Login',true);
        }        
      },
      err => {
        this.setLogged({
          token: null,
          user: null
        },'Server Error',true);
      }
    );
  }
}
