import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Firebase";

export const signUpapi = (values) => {
  console.log('signUpapi :=', values);

  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        onAuthStateChanged(auth, (user) => {
          if (user) {
          } else {
          }
        });
      })
      .then((user) => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
          } else {
          }
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log("ErrorMessage : ", errorMessage);
        console.log("ErrorCode : ", errorCode);
      });
  })
}