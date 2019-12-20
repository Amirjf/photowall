import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDiG_ZlinDIk6Zw8ZW8WHCgLoyCfiKvKrA",
    authDomain: "photowall-1acdb.firebaseapp.com",
    databaseURL: "https://photowall-1acdb.firebaseio.com",
    projectId: "photowall-1acdb",
    storageBucket: "photowall-1acdb.appspot.com",
    messagingSenderId: "1007552180708",
    appId: "1:1007552180708:web:25582358f6500be8f257f1"
  };

  firebase.initializeApp(config);

  const database = firebase.database();
  
  export {database};

