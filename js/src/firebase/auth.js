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
  export const firebaseApp = firebase.initializeApp(config);
  const firebaseAuth = firebaseApp.auth();

  // export function readAllUsers(name) {
  //   const newUserRef = database.ref('users').push();
  //   const newUserKey = newUserRef.key;

  //   database.ref('users').push({
  //     userID: newUserKey,
  //     username: name,
  //   });

  //   console.log(name,"this is name")
  // }
  // readAllUsers('taq')
  // export function readAllUsers() {
  //   return firebase.database().ref('/users').once('value').then(function (snapshot) {
  //     console.log(snapshot.val());
  //     console.log("here")
  //   });
  // }


  export function signIn(){
    const provider = new firebase.auth.GoogleAuthProvider(); // Creates the Google Authorization provider
    return new Promise((resolve, reject) => {
      firebaseAuth.signInWithPopup(provider) // allows user to sign in using a pop-up window
      .then(function(result) {
         resolve(result);
      }).catch(function(error) {
         const errorCode = error.code;
         const errorMessage = error.message;
      });
    })


  }

  export function getCurrentUser() {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          const user = firebase.auth().currentUser;
          const uid = user.uid;
          const userName = user.displayName;
          const email = user.email
          resolve({uid, userName, email})
        } else {
          // No user is signed in.
        }
      });
    })
}



    export function signOut(){
    return new Promise((resolve, reject) => {
      firebaseAuth.signOut()
      .then(function(result) {
         resolve(result);
      }).catch(function(error) {
         const errorCode = error.code;
         const errorMessage = error.message;
      });
    })
  }





