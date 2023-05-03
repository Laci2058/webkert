import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { User } from '../model/user';

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
        return this.afs.collection<User>(this.collectionName).doc(id).valueChanges()
    }
    update(id: string | undefined, new_record: string) {
        return this.afs.collection<User>(this.collectionName).doc(id).update({'record':new_record})
    }
}//7Rz0ABr0RnZqg1YEfznunKkz2hq2