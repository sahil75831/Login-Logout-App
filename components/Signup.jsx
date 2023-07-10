import React,{ useState } from "react";
import {auth } from '../Firebase'
import { Link,  useNavigate } from "react-router-dom";
import { UserAuthContextProvider, useUserAuth } from "../Context/UserAuthContext";
import css from "./Login.css"

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useUserAuth() //it returns  = useContext(UserAuthContext) = UserAuthContext.Provider value={{ signUp, signin, user }} therfore signUp variable from LHS get's its value from signUp from RHS

  const navigate = useNavigate() 
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      signUp(email, password)
      setError('')
      navigate('/login')
    }catch(err){
      setError(err.message)
      console.log('error.message ', error)
    }

  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-box">
        <input type="text" placeholder="Enter name..." value={name}
          onChange={(e) => setName(e.target.value)}/>
        <br></br>
        <input type="email" placeholder="Enter email..." value={email}
          onChange={(e) => setEmail(e.target.value)}/>
        <br></br>
        <input type="password" placeholder="Enter password..." value={password}
          onChange={(e) => setPassword(e.target.value)}/>
        <br></br>
        <button className="buttnn">Sign up</button>
        <br></br>
        <p>
          Do you have an account ? <Link to={"/login"}>Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
