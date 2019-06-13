const firebase = require('firebase');


var config = {
    apiKey: "AIzaSyDe-MaR4Zt-GzKxEBCwsbjpftLjt1aDe8s",
    authDomain: "zgubionepl.firebaseapp.com",
    databaseURL: "https://zgubionepl.firebaseio.com",
    projectId: "zgubionepl",
    storageBucket: "zgubionepl.appspot.com",
    messagingSenderId: "182550302672"
  };

  const app = firebase.initializeApp(config);
  
  export const db = app.database();
  export const storage = app.storage();