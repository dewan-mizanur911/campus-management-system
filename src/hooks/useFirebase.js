import initializeAuthentication from "../firebase/firebase.initialize";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut
} from "firebase/auth";
import { useState } from "react";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };

    const logOut = () => {
        signOut(auth)
          .then(() => {
            // Sign-out successful.
              setUser({});
          })
          .catch((error) => {
            // An error happened.
              setError(error.message);
          });
    }

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        // User is signed out
        // ...
      }
    });

    return {user, error, signInWithGoogle, logOut}
}

export default useFirebase;