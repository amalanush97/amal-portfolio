import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirestoreServiceService {
  constructor(private firestore: AngularFirestore) {}

  //! refer https://dottedsquirrel.com/angular/how-to-crud-in-angular-firebase-firestore/

  //! to get document Id  use "data.payload.doc.id"

  getDocumentsOfACollection = (collectionName) => {
    return this.firestore.collection(collectionName).snapshotChanges();
  };

  updateDocumentInCollection = (
    collectionName,
    documentId,
    documentToBeUpdated
  ) => {
    return this.firestore
      .collection(collectionName)
      .doc(documentId)
      .set(documentToBeUpdated);
  };

  deleteDocumentInCollection = (collectionName, documentId) => {
    return this.firestore.collection(collectionName).doc(documentId).delete();
  };

  createDocumentInCollection = (collectionName, data) => {
    return this.firestore.collection(collectionName).add(data);
  };
}
