// src/Home.js
import React, { Component, Fragment, useEffect, useState } from 'react'
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
  Navigate,
  Outlet,
  useParams
} from "react-router-dom";
import service from '../../utils/service';

function GameDetail() {
  let params = useParams(); 
  let navigate = useNavigate()
  const [quoute, setQoute] = useState({})

  // sudah kita tangkap
  console.log(params.id)

  // hit api

  // response tampilin ke view

  const submitlogout = () => {
     
    //hit api login
    alert('login')
    localStorage.removeItem('login')
    navigate('/home')
}

    const getData = (id) => {
      service.get(`/api/random/${id}`).then(res => {
        console.log(res)
        setQoute(res.data)
      }).catch(err => {
        console.log(err)
      })
    }

    useEffect(()=> {
        getData(params.id)
    }, [])

    return (
      <Fragment>
        <h1>game Detail</h1>
        {quoute.anime}
        <br/>
        {quoute.character}
        <br/>
        {quoute.quote}
        <br/>
        <button onClick={() => submitlogout()}>Logout button</button>
      </Fragment>
    )

}
export default GameDetail