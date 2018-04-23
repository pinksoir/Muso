# Muso

A simple music list and discussion app built with React-Redux and Firebase.

### Still to do:

- Add user authentication so they can save their lists and delete comments that they added.
- Add redux-persist so the single page album views are persisted across refresh.
- Design proper UI.
- Build the database!

### Nice to have:

- User editable album details
- Enable users to add albums themselves
- Have links to streaming services/embedded player

## Useage

Add the starter JSON file (albums.json) to the root of your Firebase database.
Replace config object in base.js with your own api key, authDomain databaseURL:

~~~
var config = {
    apiKey: "YOURAPIKEY",
    authDomain: "your-database-name.firebaseapp.com",
    databaseURL: "https://your-database-name.firebaseio.com",
};
~~~

