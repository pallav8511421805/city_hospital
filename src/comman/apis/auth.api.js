import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";

export const signUpapi = (values) => {

  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        const user = userCredential.user;
        onAuthStateChanged(auth, (user) => {
          if (user) {
            sendEmailVerification(user)
          }
        });
      })
      .then((user) => {
        onAuthStateChanged(auth, (user) => {
          if (user.emailVerified) {
            resolve({ payload: 'successfully' });
          } else {
            resolve({ payload: 'Please check your email' });
          }
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode.localeCompare('auth/email-already-in-use') === 0) {
          reject({ payload: "Email id already registered." });
        } else {
          reject({ payload: 'Errorcode : ' + errorCode });
        }
      });
  })
}

export const signInapi = (values) => {
  console.log('signInapi', values);

  return Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  })
}