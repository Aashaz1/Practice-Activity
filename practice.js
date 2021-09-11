
var firebaseConfig = {
    apiKey: "AIzaSyCs8YwB3BvocFw9jfVRNKf5l8Oa29p3B6M",
    authDomain: "practice-12107.firebaseapp.com",
    databaseURL: "https://practice-12107-default-rtdb.firebaseio.com",
    projectId: "practice-12107",
    storageBucket: "practice-12107.appspot.com",
    messagingSenderId: "577573766944",
    appId: "1:577573766944:web:4e545dac2510b2bbacb945",
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser(){
      userName= document.getElementById("userName").value;
      firebase.database().ref("/").child(userName).update({
          purpose : "adding user"
      })
  }