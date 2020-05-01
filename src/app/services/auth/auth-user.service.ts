import { Injectable } from '@angular/core';
import * as _ from 'lodash';

import { User } from '../../backend/users/users';

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  constructor() { }


  login(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  logout(){
    localStorage.removeItem('user');
  }

  esAutenticado(): boolean {
    const usuario: any = localStorage.getItem('user');
    return !_.isEmpty(usuario);
  }
}
