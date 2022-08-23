import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification } from "firebase/auth";
import { auth } from "../../Firebase";

export const signUpapi = (values) => {
  console.log('signUpapi :=', values);

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
            console.log('successfully');
          } else {
            console.log('Please check your email');
          }
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode.localeCompare() === 0) {
          console.log("Email id already registered.");
        } else {
          console.log('Errorcode : ', errorCode);
        }
      });
  })
}