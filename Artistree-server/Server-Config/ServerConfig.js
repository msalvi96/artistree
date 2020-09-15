const admin = require('firebase-admin');
const serviceAccount = require('./ServiceAccountKey.json');
//initialize admin SDK using serciceAcountKey
var db = admin.initializeApp({
credential: admin.credential.cert(serviceAccount)
});
module.exports.db = db.firestore();