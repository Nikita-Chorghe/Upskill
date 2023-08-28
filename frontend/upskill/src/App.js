import React, { Component } from 'react';
import './App.css';
import { Route, Routes, Navigate} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import Users from './components/users';
import NotFound from './components/notFound';
import NavBar from './components/navBar';
import UserForm from './components/userForm';
import LoginForm from './components/loginForm';
import 'react-toastify/dist/ReactToastify.css';
import HomeCarousel from './components/carousel';
import TopTutors from './components/topTutors';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar />
        <div className="app-container">
        <div className="carousel-section">
          <HomeCarousel />
        </div>
        {/* <div className="about-us-section">
        <UserForm/>
        </div> */}
        </div>
        <TopTutors/>
    
        <Routes>
            <Route path="/userForm" element={<UserForm/>}/>
            <Route path="/loginForm" element={<LoginForm/>}/>
            <Route path="/userForm" element={<UserForm/>}/>
            <Route path='/users' element={<Users/>}></Route>
            <Route path='/not-found' element={<NotFound/>}></Route>
            <Route path="/* " element={ <Navigate to="/not-found" /> } />
        </Routes>

       
      </React.Fragment>
      
    );
  }
}

export default App;
