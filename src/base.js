import Rebase from 're-base'
import * as firebase from 'firebase'

var config = {
    apiKey: "YOUR_API_KEY",
    authDomain: "your-database-name.firebaseapp.com",
    databaseURL: "your-database-name.firebaseio.com",
};
  
firebase.initializeApp(config);

const base = firebase.database();

export default base;

