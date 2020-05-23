import { Injectable } from '@angular/core';
import { AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ReferenceService {

  document: AngularFirestoreDocument<unknown>;
  resources: object[];
  columns: Column[];

  constructor() {
  }
}
