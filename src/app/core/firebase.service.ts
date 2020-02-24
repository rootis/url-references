import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

interface Entity {
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
    if (entity.id) {
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

          entities[index] = entity;

          t.update(document.ref, {
            list: entities
          });
        })
      ).then(() => console.log('Transaction successfully committed!'))
      .catch(error => console.error('Transaction failed: ', error));
    }
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

  delete(document: AngularFirestoreDocument<unknown>, obj: object) {
    document.update({
      list: firebase.firestore.FieldValue.arrayRemove(obj)
    });
  }

  /*getAvatars() {
    return this.db.collection('/avatar').valueChanges()
  }

  getUser(userKey) {
    return this.db.collection('users').doc(userKey).snapshotChanges();
  }

  updateUser(userKey, value) {
    value.nameToSearch = value.name.toLowerCase();
    return this.db.collection('users').doc(userKey).set(value);
  }

  deleteUser(userKey) {
    return this.db.collection('users').doc(userKey).delete();
  }

  getUsers() {
    return this.db.collection('users').snapshotChanges();
  }

  searchUsers(searchValue) {
    return this.db.collection('users', ref => ref.where('nameToSearch', '>=', searchValue)
    .where('nameToSearch', '<=', searchValue + '\uf8ff'))
    .snapshotChanges()
  }

  searchUsersByAge(value) {
    return this.db.collection('users', ref => ref.orderBy('age').startAt(value)).snapshotChanges();
  }


  createUser(value, avatar) {
    return this.db.collection('users').add({
      name: value.name,
      nameToSearch: value.name.toLowerCase(),
      surname: value.surname,
      age: parseInt(value.age),
      avatar: avatar
    });
  }*/
}
