import * as firebase from "firebase";

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
  apiKey: "AIzaSyBWVRxbdFQuUr7_o2bcJW3C6pIafK9EGVs",
  authDomain: "fir-d7617.firebaseapp.com",
  databaseURL: "https://fir-d7617.firebaseio.com",
  storageBucket: "fir-d7617.appspot.com",
};
var app = firebase.initializeApp(config);
var auth = app.auth();
var username = "abc@nkladadfadf.com";
var password = "password@123";


//createUser(username,password);
//signIn(username,password);
function createUser(email,password){
	auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
	  // Handle Errors here.
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  if (errorCode == 'auth/weak-password') {
	    alert('The password is too weak.');
	  } else {
	    alert(errorMessage);
	  }
	  console.log(error);
	}).then(function(success){
		console.log(success);
	});
};

function signIn(email,password){
	auth.signInWithEmailAndPassword(email, password).catch(function(error) {
	  // Handle Errors here.
	  var errorCode = error.code;
	  var errorMessage = error.message;
	  // ...
	}).then(function(result){
		console.log("signed in");
		console.log(result);
	});
};


auth.onAuthStateChanged(function(user) {
  if (user) {
    console.log("logged in");
    console.log(user);
  } else {
    // No user is signed in.
    console.log("not logged in");
  }
});