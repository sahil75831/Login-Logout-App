import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { UserAuthContextProvider } from "./Context/UserAuthContext";
import Homes from "./components/Homes";
import  ProtectedRoute from './components/ProtectedRoute'
const Appp = () => {
  return (
    <BrowserRouter>
    
      <UserAuthContextProvider>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Homes />
              </ProtectedRoute>
            }
          >
            {/* What is protected routes in react JS?
            Protected routes are routes that allow access to authorized users only. This means that users must first meet certain conditions before accessing that specific route. This is essential for securing certain routes or information. There are various ways you can use protected routes in React. */}
          </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </UserAuthContextProvider>
    </BrowserRouter>
  );
};

export default Appp;
