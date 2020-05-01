import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/database';


import { AngularFirestore } from '@angular/fire/firestore';

import { User } from './users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  turnosRef: AngularFireList<any>;
  turno: AngularFireObject<any>

  constructor(
    private firestore: AngularFirestore
  ) { }

  //Crear Registro en turno
  /* AddTurno(turno: Turno) {
    this.turnosRef.push({
      fecha: turno.fecha,
      servicio: turno.servicio
    });
  } */

  //Crear Registro en turno
  add(user: User) {
    /* return new Promise<any>((resolve, reject) =>{
        this.firestore
            .collection("users")
            .add(user)
            .then(res => {}, err => reject(err));
    }); */
    return this.firestore.collection('users').add(user);
  }

  getAll() {
    return this.firestore.collection("users").snapshotChanges();
  }

  getOne(email: string, passwd: string){
    return this.firestore.collection('users',ref => ref.where('email', '==', email)
      .where('password', '==', passwd))
      .snapshotChanges()
  }

  
}
