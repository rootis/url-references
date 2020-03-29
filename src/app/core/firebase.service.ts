import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

import { environment } from '../../environments/environment';

export interface Entity {
  id?: string;
}

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private db: AngularFirestore) {
  }

  update(document: AngularFirestoreDocument<unknown>, entity: Entity) {
      return this.db.firestore.runTransaction(t =>
        t.get(document.ref).then((doc) => {
          if (!doc.exists) {
            throw new Error('Document does not exist!');
          }

          const entities: Entity[] = doc.get('list');
          const index = entities.findIndex(i => i.id === entity.id);

          if (index === -1) {
            throw new Error('Object in array does not exist!');
          }

          entities[index] = entity;

          t.update(document.ref, {
            list: entities
          });
        })
      );
  }

  getDocument(path: string) {
    const collectionPath = environment.collectionPath;

    if (!collectionPath) {
        console.error('Collection path is required');
        return null;
    }

    return this.db.collection(collectionPath).doc(path);
  }

  add(document: AngularFirestoreDocument<unknown>, entity: Entity) {
    entity.id = this.db.createId();

    document.update({
      list: firebase.firestore.FieldValue.arrayUnion(entity)
    });
  }

  save(document: AngularFirestoreDocument<unknown>, entity: Entity) {
    if (entity && entity.id) {
      this.update(document, entity);
    } else {
      this.add(document, entity);
    }
  }

  delete(document: AngularFirestoreDocument<unknown>, entity: Entity) {
    this.db.firestore.runTransaction(t =>
      t.get(document.ref).then((doc) => {
        if (!doc.exists) {
          throw new Error('Document does not exist!');
        }

        const entities: Entity[] = doc.get('list');
        const index = entities.findIndex(i => i.id === entity.id);

        if (index === -1) {
          throw new Error('Object in array does not exist!');
        }

        t.update(document.ref, {
          list: firebase.firestore.FieldValue.arrayRemove(entities[index])
        });
      })
    );
  }
}
