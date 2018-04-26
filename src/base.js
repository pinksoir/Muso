// import Rebase from 're-base'
import * as firebase from 'firebase'

var config = {
    apiKey: "YOUR_API_KEY",
    authDomain: "project-id.firebaseapp.com",
    databaseURL: "https://db-url.firebaseio.com",
};
  
firebase.initializeApp(config);

const base = firebase.database();

export default base;

