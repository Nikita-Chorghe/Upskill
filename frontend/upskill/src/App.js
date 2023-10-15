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
import Cookies from 'js-cookie';


class App extends Component {

  constructor(props) {
    super(props);
    // Check if a token is present in the browser cookie
    const loggedIn = Cookies.get('token') ? true : false;

    this.state = {
      loggedIn: loggedIn,
    };

    // Bind the loginHandler function to the component instance
    this.loginHandler = this.loginHandler.bind(this);
    this.logoutHandler = this.logoutHandler.bind(this);
  }


  
  loginHandler() {
    this.setState({ loggedIn: true}); 
  }
  logoutHandler() {

    console.log('logging out');
    Cookies.remove('token');
    this.setState({ loggedIn: false });
    console.log('logging out');
  }

  render() {
    


    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar loggedIn={this.state.loggedIn} logoutHandler={this.logoutHandler} />
        {/* <Carousel/> */}
        <Routes>
            <Route path="/tutors/:id" element={<TutorCourseDetails loggedIn={this.state.loggedIn}/>}/>
            <Route path="/userForm" element={<UserForm loggedIn={this.state.loggedIn} />}/>
            <Route path="/loginForm" element={<LoginForm  loggedIn={this.state.loggedIn} loginHandler={this.loginHandler} />}/>
            <Route path="/userForm" element={<UserForm loggedIn={this.state.loggedIn} />}/>
            <Route path='/users' element={<Users loggedIn={this.state.loggedIn} />}></Route>
            <Route path='/not-found' element={<NotFound loggedIn={this.state.loggedIn} />}></Route>
            <Route path='/tutors' element={<Tutors loggedIn={this.state.loggedIn} />}></Route>
            <Route path='/toptutors' element={<TopTutors loggedIn={this.state.loggedIn} />}></Route>
            <Route path='/home'  element={<Home loggedIn={this.state.loggedIn} />}></Route>
            <Route path='/courses'  element={<Courses loggedIn={this.state.loggedIn} />}></Route>
            <Route path='/about' exact element={<AboutUs loggedIn={this.state.loggedIn} />}></Route>
            <Route path='/' exact element={<Home loggedIn={this.state.loggedIn} />}></Route>
            <Route path="/* " element={ <Navigate to="/not-found" /> } />
        </Routes>

      <Footer />
      </React.Fragment>
      
    );
  }
}

export default App;
