import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth,onAuthStateChanged, signInWithEmailAndPassword, signOut  } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(false);
  const auth=getAuth(app)

const createUser=(email,password)=>{
    setLoader(true)
    return createUserWithEmailAndPassword(auth,email,password)
}
const singIn=(email,password)=>{
  setLoader(true)
  return signInWithEmailAndPassword(auth,email,password)
}
const logOut=()=>{
  setLoader(true)
  return signOut(auth)
}
useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        setLoader(false)
    })
return ()=>{
    return unsubscribe()
}
},[])



  const authInfo = {
    user,
    loader,
    logOut,
    singIn,
    createUser

  };
  return <AuthContext.Provider value={authInfo}>
    {children}
  </AuthContext.Provider>;
};

export default AuthProvider;
