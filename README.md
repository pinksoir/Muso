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

- Run npm install.
- Add the starter JSON file (albums.json) to the root of your Firebase database.
- Replace config object in base.js with your own api key, authDomain, and databaseURL:

~~~
var config = {
    apiKey: "YOURAPIKEY",
    authDomain: "your-database-name.firebaseapp.com",
    databaseURL: "https://your-database-name.firebaseio.com",
};
~~~
- Profit!

## Database

You can add your own album objects to your database manually (I will add client side ability in future). They must have: 

- artist: artist name
- artwork: link to cover artwork
- code: (a unique identifier - this will be done automatically on upload in future)
- description: a short description of the album (or lipsum)
- label: record label
- tags: an array of tags
- title: the album title
- year: the year of release

comments are not necessary as they are automatically added.

