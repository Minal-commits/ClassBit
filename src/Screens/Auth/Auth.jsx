import React, { useState } from 'react'
import Login from './Login/Login';
import Register from './Register/Register';

const Auth = () => {
  const [onSinginPage, setOnSignPage] = useState(true);


  return (
    <div>
      {onSinginPage? (
        <Login setOnSignInPage={setOnSignPage}/>
      ) : (
        <Register setOnSignInPage={setOnSignPage}/>
      )}
    </div>
  )
}

export default Auth