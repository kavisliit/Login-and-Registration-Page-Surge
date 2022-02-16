// import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/home.component';
import Nav from './components/nav.component';
import Login from './components/login.component';
import Register from './components/register.component';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Profile from './components/profile';
import Update from './components/update';

function App() {
  return (
    <Router> 
    <div className="App">
      <Nav/>

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route path="/" exact element={<Home/>}/>
              <Route path="/login" exact  element={<Login/>}/>
              <Route path="/register" exact  element={<Register/>}/>
              <Route path="/profile" exact  element={<Profile/>}/>
              <Route path="/update/:id" exact  element={<Update/>}/>
            </Routes>
           
          </div>
        </div>
    </div>
    </Router>
  );
}

export default App;
