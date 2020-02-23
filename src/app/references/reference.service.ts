import { Injectable } from '@angular/core';
import { AngularFirestoreDocument } from '@angular/fire/firestore';

export enum ColumnType {
  TITLE, DESCRIPTION, TEXT
}

export interface Column {
  key: string;
  title: string;
  type: ColumnType;
}

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
