import React from 'react';
import { Link } from 'react-router-dom';

function Nav ({test}){

      const user = test

      console.log(user)
        return(
            <nav className="navbar navbar-expand navbar-light fixed-top">
            
            <div className="container">
               
            <Link to="/"><a className="navbar-brand">Home </a></Link>
               
               <div className="collapse navbar-collapse">
                 <ul className="navbar-nav ml-auto">
                   {
                   //if user is not login show the login button and register button 
                     !user?(<><li className= "nav-item">
                     <Link to="/login"> <a  className="nav-link">Login</a></Link>
                    </li>
                    
                    <li className="nav-item">
                    <Link to="/register">  <a  className="nav-link">Register</a></Link>
                    </li></>)
                    //if user loging hide the login button and register button show the logou button
                    :(<><li className="nav-item logout">
                            <a  className="nav-link" onClick={() => {
                              localStorage.removeItem("user") 
                            window.location.href = "/login"}}>Logout</a>
                    </li>
                    <li className="nav-item logout">
                       <Link to="/profile"> <a  className="nav-link" >Profile</a></Link>
                    </li></>)
                   }
                 </ul>
               </div>
            </div>
        </nav>
        )
    }


export default Nav;