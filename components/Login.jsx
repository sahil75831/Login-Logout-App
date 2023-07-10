import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../Context/UserAuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [reset_pass, setReset_pass] = useState("");
  const navigate = useNavigate();
  const { signin, signInWith_Google, forget_password } = useUserAuth(); //it returns  = useContext(UserAuthContext) = UserAuthContext.Provider value={{ signUp, signin, user }} therfore signin variable from LHS get's its value from signin from RHS

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signin(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };
  const handleSubmit__withgoogle = async (e) => {
    e.preventDefault();
    try {
      await signInWith_Google();
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };
  const handleSubmit__passwordreset = async (e) => {
    e.preventDefault();
    try {
      await forget_password(email);
      // navigate("/home");
      setReset_pass(true);
      console.log("email sent");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="form-container">
      <form className="form-box">
        <input
          type="email"
          placeholder="Enter email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>
        <input
          type="password"
          placeholder="Enter password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <div className="buttnContainerr">
        <button onClick={handleSubmit} type="submit" className="buttnn">
          Signin
        </button>
        <br></br>
        <button onClick={handleSubmit__withgoogle} type="submit" className="buttnn">
          Signin With Google
        </button>
        </div>
        <br></br>
        {reset_pass && `an email to change password has been sent to ${email}`}
        <p style={{fontSize:"1.2rem"}}>
          SignUp to have an account ? <Link to={"/signup"}>Signup</Link>
        </p>
      </form>
      <button onClick={handleSubmit__passwordreset} className="buttnn" >Forget Password</button>
     <div style={{fontSize:"1.2rem",fontWeight:"600"}}>
     {error && <i>{error.slice(22, -2)}</i>}
     </div>
      {/* error.slice(22,-2) = user-not-found */}
    </div>
  );
};

export default Login;
