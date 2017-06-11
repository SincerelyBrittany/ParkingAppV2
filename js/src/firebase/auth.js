import firebase from 'firebase'

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyCFvMFKrSsPX_FqnzsRYkUtsCZAh7C8NmM",
    authDomain: "parkingapp-f24e6.firebaseapp.com",
    databaseURL: "https://parkingapp-f24e6.firebaseio.com",
    projectId: "parkingapp-f24e6",
    storageBucket: "parkingapp-f24e6.appspot.com",
    messagingSenderId: "730835847265"
  };
  const firebaseApp = firebase.initializeApp(config);
  const firebaseAuth = firebaseApp.auth();





  export function signIn(){
    const provider = new firebase.auth.GoogleAuthProvider();

    return new Promise((resolve, reject) => {
      firebaseAuth.signInWithPopup(provider)
      .then(function(result) {
         // var token = result.credential.accessToken;
         console.log("SIGNIN RESULT: ")
         resolve(result);
      }).catch(function(error) {
         const errorCode = error.code;
         const errorMessage = error.message;
         console.log(error.code)
         console.log(error.message)
      });
    })
  }