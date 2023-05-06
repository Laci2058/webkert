import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { User } from '../model/user';
import { get } from 'http';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    collectionName = 'Users'

    constructor(private afs: AngularFirestore) { }

    create(user: User) {
        return this.afs.collection<User>(this.collectionName).doc(user.id).set(user)
    }
    getById(id?: string) {
        return this.afs.collection<User>(this.collectionName, ref => ref.where("id", "==", id)).valueChanges()
    }
    update(id: string | undefined, new_record: string) {
        return this.afs.collection<User>(this.collectionName).doc(id).update({ 'record': new_record })
    }
    getAll() {
        return this.afs.collection<User>(this.collectionName, ref => ref.limit(10)).valueChanges()
    }
}