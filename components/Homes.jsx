import React from "react";
import { useUserAuth } from "../Context/UserAuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../Firebase";

const Homes = () => {
  const { user, signout } = useUserAuth(); //useContext(UserAuthContext) = // useContext(UserAuthContext = signup)
  const handleSignOut = async () => {
    try {
      signout(auth);
    } catch (err) {
      console.log('err.message handlesignout ',err.message);
    }
  };
  console.log("user homes: ", user);
  return (
    <div style={{fontSize:"1.4rem", display:"flex",flexDirection:"column", justifyContent:"center", border:"2px solid #ddd", width:"15rem",gap:"2rem", padding:"2rem"}}>
      hello {user && user.email} welcome to <b>Home page</b>
      <br></br>
      <button onClick={handleSignOut} className="buttnn">Log Out</button>
    </div>
  );
};

export default Homes;
