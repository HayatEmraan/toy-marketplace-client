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
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const googlePopUp = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const githubPopUp = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
        fetch("https://toy-collection-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: currentUser.email,
          }),
        })
          .then((res) => res.json())
          .then((data) => localStorage.setItem("user", data.token));
      } else {
        setUser(null);
        setLoading(false);
      }
      return unsubscribe;
    });
  }, []);
  const forgotPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };
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
