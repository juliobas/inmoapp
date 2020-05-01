import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
} from '@angular/fire/database';


import { AngularFirestore } from '@angular/fire/firestore';

import { Turno } from './turnos';

@Injectable({
  providedIn: 'root'
})
export class ServiciosFireService {

  turnosRef: AngularFireList<any>;
  turno: AngularFireObject<any>

  constructor(
    private db: AngularFireDatabase,
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
  AddTurno(turno: Turno) {
    return new Promise<any>((resolve, reject) =>{
        this.firestore
            .collection("turnos")
            .add(turno)
            .then(res => {}, err => reject(err));
    });
  }

  getCoffeeOrders() {
    return this.firestore.collection("turnos").snapshotChanges();
  }

  
}
