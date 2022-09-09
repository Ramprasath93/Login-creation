import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private route:Router) { }

  //step1:

  isAuthenticate():boolean | any {
    if(sessionStorage.getItem('token')!==null){
      return true;
    }
return false;
  }

  //step2:If not logged in the page that interface automatically comes under login

  canAccess(){
    if(!this.isAuthenticate()){
      this.route.navigate(['/login'])
    }
  }
}
