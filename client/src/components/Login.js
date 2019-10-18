import React, { useState } from "react";
import { useDispatch } from 'react-redux'

import { login } from '../actions'

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const dispatch = useDispatch();
  const initialLoginInfo = {
    username: '',
    password: ''
  }

  const [loginInfo, setLoginInfo] = useState(initialLoginInfo);

  const handleChanges = e => {
    setLoginInfo({ ...loginInfo, [e.target.name]: e.target.value });
  }

  return (
    <>
      <form onSubmit={dispatch(login(loginInfo))}>
        <input
          type='text'
          name='username'
          placeholder='Username'
          onChange={handleChanges}
        />
        <input
          type='password'
          name='password'
          placeholder='password'
          onChange={handleChanges}
        />
        <button type='submit'>Login</button>
      </form>
    </>
  );
};

export default Login;
