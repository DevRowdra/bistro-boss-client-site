import React, { createContext, useEffect, useState } from 'react';
// const axios = require('axios');
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,

  updateProfile,
} from 'firebase/auth';
import app from '../Firebase/firebase.config';
import axios from 'axios';

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const auth = getAuth(app);
  const [loader, setLoader] = useState(false);
  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const singIn = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoader(true);
    return signOut(auth);
  };
  const googleSingIn = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };
  const updateUserProfiles = (name, photo) => {
    setLoader(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      

      setUser(currentUser);
      //! get and set token
      if (currentUser) {
        axios.post(`http://localhost:5000/jwt`,{
          email:currentUser.email
        })
        .then(data=>{
          console.log(data)
          localStorage.setItem('access-token',data.data.token)
          setLoader(false);
        })
      }
      else{
       localStorage.removeItem('access-token')
       setLoader(false);
      }
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const authInfo = {
    user,

    logOut,
    singIn,
    googleSingIn,
    createUser,
    updateUserProfiles,
    loader,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
