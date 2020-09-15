//import firestore_config from './server-configuration/firestore_config';

const admin = require('firebase-admin');
const serviceAccount = require('./ServiceAccountKey.json');

let FirebaseConfig = class FirebaseConfig1 {
    static instance
    constructor() {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount)
        });
        this.firestore = admin.firestore();
    }
     getInstance(){
        if (this.instance!=null){
            return FirebaseConfig1.instance;
        }
        else{
            return new FirebaseConfig1();
        }
    }
}
module.exports = FirebaseConfig