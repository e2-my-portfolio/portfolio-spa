/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Collection } from '../constants/collections';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  // https://dev.to/jdgamble555/angular-12-with-firebase-9-49a0

  constructor(private firestore: Firestore) { }

  getCollectionItem<T>(col: string | Collection): Observable<T> {
    return collectionData(collection(this.firestore, col.toString().toLowerCase()))
      .pipe(map((items: T[]) => items.length > 0 ? items[0] : {} as T));
  }

  getCollectionItems<T>(col: string | Collection): Observable<T[]> {
    return collectionData(collection(this.firestore, col.toString().toLowerCase()))
      .pipe(map((items: T[]) => items));
  }

}
