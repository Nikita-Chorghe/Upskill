import React, { Component } from 'react';
import './App.css';
import { Route, Routes, Navigate} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import Users from './components/users';
import TutorCourseDetails from './components/tutorCourseDetails';
import NotFound from './components/notFound';
import NavBar from './components/navBar';
import UserForm from './components/userForm';
import LoginForm from './components/loginForm';
import 'react-toastify/dist/ReactToastify.css';
import TopTutors from './components/topTutors';
import Footer from './components/footer';
import AboutUs from './components/aboutUs';
import Tutors from './components/tutors';
import Home from './components/home';
import Courses from './components/courses';



class App extends Component {

  

  render() {
    


    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar />
        {/* <Carousel/> */}
        <Routes>
            <Route path="/tutors/:id" element={<TutorCourseDetails/>}/>
            <Route path="/userForm" element={<UserForm/>}/>
            <Route path="/loginForm" element={<LoginForm />}/>
            <Route path="/userForm" element={<UserForm/>}/>
            <Route path='/users' element={<Users/>}></Route>
            <Route path='/not-found' element={<NotFound/>}></Route>
            <Route path='/tutors' element={<Tutors/>}></Route>
            <Route path='/toptutors' element={<TopTutors/>}></Route>
            <Route path='/home'  element={<Home/>}></Route>
            <Route path='/courses'  element={<Courses/>}></Route>
            <Route path='/about' exact element={<AboutUs/>}></Route>
            <Route path='/' exact element={<Home/>}></Route>
            <Route path="/* " element={ <Navigate to="/not-found" /> } />
        </Routes>

      <Footer />
      </React.Fragment>
      
    );
  }
}

export default App;
