// ADD YOUR FIREBASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyAwCSzcSTdzH46Yoh0uvMICiYfSlFUsapw",
  authDomain: "class-test-b8ffa.firebaseapp.com",
  databaseURL: "https://class-test-b8ffa-default-rtdb.firebaseio.com",
  projectId: "class-test-b8ffa",
  storageBucket: "class-test-b8ffa.appspot.com",
  messagingSenderId: "137069436475",
  appId: "1:137069436475:web:9ac9001aca61e19fe3861e"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adding user"
  });
}

