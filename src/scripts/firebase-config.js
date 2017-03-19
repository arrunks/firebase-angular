import appMain from "./angular-main.js";
import * as firebase from "firebase";

appMain.config(function(){
  var config = {
    apiKey: "AIzaSyBWVRxbdFQuUr7_o2bcJW3C6pIafK9EGVs",
    authDomain: "fir-d7617.firebaseapp.com",
    databaseURL: "https://fir-d7617.firebaseio.com",
    storageBucket: "fir-d7617.appspot.com",
  };
  var fireapp = firebase.initializeApp(config);

});
