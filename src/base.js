import Rebase from 're-base'
import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyDbZsT_DBKySuJC49nJHwDr6srbK8ObBEU",
    authDomain: "music-list-83b0f.firebaseapp.com",
    databaseURL: "https://music-list-83b0f.firebaseio.com",
};
  
firebase.initializeApp(config);

const base = firebase.database();

export default base;

