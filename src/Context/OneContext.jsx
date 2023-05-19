import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/fb.config";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const authContext = createContext(null);
const OneContext = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const googlePopUp = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const githubPopUp = () => {
    return signInWithPopup(auth, githubProvider);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        setLoading(false);
      }
      return () => unsubscribe();
    });
  }, []);
  const logOut = () => {
    return signOut(auth);
    };
    
    const forgotPassword = (email) => { 
      return sendPasswordResetEmail(auth, email)
    }
  const authInfo = {
    user: user,
    loading: loading,
    createUser: createUser,
    logIn: logIn,
    googlePopUp: googlePopUp,
    githubPopUp: githubPopUp,
    logOut: logOut,
    forgotPassword,
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default OneContext;
