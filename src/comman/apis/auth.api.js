import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Firebase";

export const signUpapi = (values) => {
  console.log('signUpapi :=', values);

  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log("User : ", user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        console.log("ErrorMessage : ", errorMessage);
        console.log("ErrorCode : ", errorCode);
      });
  })
}