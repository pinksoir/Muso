import Rebase from 're-base'
import * as firebase from 'firebase'

var config = {
    apiKey: "XXX",
    authDomain: "db-name.firebaseapp.com",
    databaseURL: "https://db-name.firebaseio.com",
};
  
firebase.initializeApp(config);

const base = firebase.database();

export default base;

