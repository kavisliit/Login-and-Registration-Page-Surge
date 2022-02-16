// import logo from './logo.svg';
import React, { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/home';
import Nav from './components/nav';
import Login from './components/login';
import Register from './components/register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './components/profile';
import Update from './components/update';

function App() {
  const user = (localStorage.getItem("user"))
      console.log(user)
      const [test,setTest] = useState("")
      console.log(test)
  return (
    <Router> 
    <div className="App">
      <Nav test={test}/>

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route path="/" exact element={<Home/>}/>
              <Route path="/login" exact  element={<Login/>}/>
              <Route path="/register" exact  element={<Register/>}/>
              <Route path="/profile" exact  element={<Profile setTest={setTest}/>}/>
              <Route path="/update/:id" exact  element={<Update/>}/>
            </Routes>
           
          </div>
        </div>
    </div>
    </Router>
  );
}

export default App;
