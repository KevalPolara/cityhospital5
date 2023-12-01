import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  email,
  password,
  sendEmailVerification
} from "firebase/auth";
import { auth } from "../../firebase/firebase";

export const signUpAPI = data => {
  console.log(data);

  try {
    return new Promise((resolve, reject) => {
      createUserWithEmailAndPassword(auth, data.email, data.phone)
        .then(userCredential => {
          // Signed up
          const user = userCredential.user;
          console.log(user);

          const auth = getAuth();
          sendEmailVerification(auth.currentUser)
            .then(() => {
              console.log("Email verification sent!");
              resolve({ message: "Email verification sent!", user: user });
              // ...
            })
            .catch(error => {
              const errorCode = error.code;
              const errorMessage = error.message;
            });
        })
        .catch(error => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode.localeCompare("auth/email-already-in-use") === 0) {
            reject({ message: "The Email Address is Already Use" });
          } else if (errorCode.localeCompare("auth/weak-password") === 0) {
            reject({ message: "Minimum 6 Character Required" });
          }

        });
    });
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
  }
  console.log(data);
};

export const loginApi = data => {
  console.log(data);

  try {
    return new Promise((resolve, reject) => {
      const auth = getAuth();

      signInWithEmailAndPassword(auth, data.email, data.phone)
        .then(userCredential => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          resolve({ login: "Your Login is Succesfully Sumbmited", user: user});

          sendEmailVerification(auth.currentUser)
            .then(() => {
              console.log("Email verification sent!");
              resolve({ message: "Your Login Succesfully Completed", user: user });
              // ...
            })
            .catch(error => {
              const errorCode = error.code;
              const errorMessage = error.message;
            });

          // ...
        })
        .catch(error => {
          const errorCode = error.code;
          const errorMessage = error.message;

          if (errorCode.localeCompare("auth/invalid-login-credentials") === 0) {
            reject({ message: "Invalid Email Or Password" });
          }
        });
    });
  } catch (error) {}
};
