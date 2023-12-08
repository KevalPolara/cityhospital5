import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  email,
  password,
  sendEmailVerification,
  sendPasswordResetEmail,
  signOut
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

              if (user.emailVerified) {
              }
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

          if (user.emailVerified) {
            resolve({
              message: "Your Login is Succesfully Sumbmited",
              user: user
            });
          } else {
            reject({ message: "Your Email is not Verified", user: user });
          }
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

export const fPasswordApi = data => {
  console.log(data);

  try {
    return new Promise((resolve, reject) => {
      const auth = getAuth();
      sendPasswordResetEmail(auth, data.email)
        .then(() => {
          resolve({ message: "Your Password Requested Sent" });
          // Password reset email sent!
          // ..
        })
        .catch(error => {
          const errorCode = error.code;
          const errorMessage = error.message;

          if (errorCode.localeCompare("auth/user-not-found") === 0) {
            reject({message: "Invalid Email"});
          }
        });
    });
  } catch (e) {
    console.log(e);
  }
};

export const logOutApi = data => {
  console.log(data);

  try {
    return new Promise((resolve, reject) => {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          resolve({ message: "Your Logout Succesfully Completed" });
          // Sign-out successful.
        })
        .catch(error => {
          const errorCode = error.code;
          const errorMessage = error.message;

          reject({ message: error.message });

          // An error happened.
        });
    });
  } catch (error) {
    
  }
};
