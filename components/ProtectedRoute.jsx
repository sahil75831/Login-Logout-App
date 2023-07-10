import React from 'react'
import { Navigate } from 'react-router-dom';
import { useUserAuth } from '../Context/UserAuthContext';

const ProtectedRoute = ({children}) => {
  let {user} = useUserAuth() ; // = useContext(UserAuthContext)
  if( !user ){
    return <Navigate to="/login" />
  }
  return children
}

export default ProtectedRoute

