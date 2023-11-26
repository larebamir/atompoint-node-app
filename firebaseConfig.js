const admin = require('firebase-admin');
const serviceAccount = require('./atompoint-bdfe1-firebase-adminsdk-ifk35-8405934902.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://atompoint-bdfe1-default-rtdb.firebaseio.com/',
});

const db = admin.firestore();

module.exports = db;
