import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../Firebase";

// firstly we created an context
const UserAuthContext = createContext();

// creating function to wrap our components under provider
// .. meaning of children here
//“In JSX expressions that contain both an opening tag and a closing tag, the content between those tags is passed as a special prop: props.children” — React documentation


// Essentially, props.children is a special prop, automatically passed to every component, that can be used to render the content included between the opening and closing tags when invoking a component. These kinds of components are identified by the official documentation as “boxes”.


export function UserAuthContextProvider(props) {

  const [user, setUser] = useState("");

  // sign up function
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  // sign in function
  function signin(email, password) {
    console.log("userAUTH email :", email);
    return signInWithEmailAndPassword(auth, email, password);
  }
  // sign out function
  function signout() {
    return signOut(auth); // inbuilt function of firebase
  }
  // signInWith_Google
  function signInWith_Google() {
    const google_AuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, google_AuthProvider); // inbuilt function of firebase
  }
  // forget password
  function forget_password(email) {
    // const google_AuthProvider = new GoogleAuthProvider();
    return sendPasswordResetEmail(auth, email); // inbuilt function of firebase
  }
  //
  useEffect(() => {
    // Adds an observer for changes to the user's sign-in state.
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("current user useeffect", currentUser);
      return setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserAuthContext.Provider value={{ signUp, signin, signout, signInWith_Google, forget_password, user }}>
      {console.log("props.children : ", props.children)}
      {props.children}
    </UserAuthContext.Provider>
  );
}

// creating custom hook
export function useUserAuth() {
  return useContext(UserAuthContext);
}
