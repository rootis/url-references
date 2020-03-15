import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

export interface Entity {
  id?: string;
}

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private static COLLECTION_PATH = 'reference';

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
    return this.db.collection(FirebaseService.COLLECTION_PATH).doc(path);
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
