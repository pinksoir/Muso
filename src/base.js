// import Rebase from 're-base'
import * as firebase from 'firebase'

var config = {
    apiKey: "YOUR_API_KEY",
    authDomain: "your-db-name.firebaseapp.com",
    databaseURL: "https://your-db-name.firebaseio.com",
};
  
firebase.initializeApp(config);

const base = firebase.database();

export default base;

