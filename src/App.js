import React, { Component } from 'react'
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom'
import Home from './Home';
import Student from './Student';
import Contact from './Contact';
import StudentDesc from './StudentDesc';

class App extends Component {
  render() {
    return (
      
          <Router>
          <Navbar />
          <Routes>
              <Route path='' element = {<Home />}/>
              <Route path='/home' element = {<Home />}/>
              <Route path='/student' element = {<Student />}/>
              <Route path='/contact' element = {<Contact />}/>
              <Route path='/student-desc' element = {<StudentDesc />}/>
          </Routes>
          </Router>
          
      
    )
  }
}

export default App