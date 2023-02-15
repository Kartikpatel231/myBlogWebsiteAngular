import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
@Injectable({
    providedIn:'root'
})
export class SubscribersService{
    constructor(private afs:AngularFirestore){

    }
    addSubs(subData){
        this.afs.collection('subscribers').add(subData).then(()=>{
          console.log('Subscriber Saved Successfully');
        })
    }
    checkSubs(subEmail){
        return this.afs.collection('subsribers',ref=>ref.where('email','==',subEmail)).get()
    }
}