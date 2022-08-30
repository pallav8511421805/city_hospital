import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../Firebase";

export const signUpapi = (values) => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        const user = userCredential.user;
        onAuthStateChanged(auth, (user) => {
          if (user) {
            sendEmailVerification(user);
          }
        });
      })
      .then((user) => {
        onAuthStateChanged(auth, (user) => {
          if (user.emailVerified) {
            resolve({ payload: "successfully." });
          } else {
            resolve({ payload: "Please check your email." });
          }
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode.localeCompare("auth/email-already-in-use") === 0) {
          reject({ payload: "Email id already registered." });
        } else {
          reject({ payload: "Errorcode : " + errorCode });
        }
      });
  });
};

export const signInapi = (values) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user.emailVerified) {
          resolve({ payload: user });
        } else {
          reject({ payload: "Please verify your email." });
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode.localeCompare("auth/wrong-password") === 0) {
          reject({ payload: "Wrong email or password." });
        } else {
          reject({ payload: "Errorcode : " + errorCode });
        }
      });
  });
};
