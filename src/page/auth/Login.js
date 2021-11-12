// src/Home.js
import React, { Component, Fragment } from 'react'
import {
    Routes,
    Route,
    Link,
    useNavigate,
    useLocation,
    Navigate,
    Outlet
  } from "react-router-dom";
import service from '../../utils/service';
  


function Login() {
    let navigate = useNavigate();
    const submitlogin = () => {
     
        //hit api login
        alert('login')
        localStorage.setItem('login', true)
        navigate('/profile')
    }

    
    return (
      <Fragment>
        <h1>Login</h1>

        <button onClick={() => submitlogin()}>Login button</button>
      </Fragment>
    )

}

export default Login