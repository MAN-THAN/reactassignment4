import React, { Component } from 'react'
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home';
import Student from './Student';
import Contact from './Contact';
import StudentDesc from './StudentDesc';
import StudentEdit from './StudentEdit';

class App extends Component {
  state = {
    arr : [
      {
        name: "Manthan",
        age: 22,
        course : "Full Stack",
        batch : "Oct",
        ID : 1
    
    }, {
     name: "xyzz",
     age: 22,
     course : "Full Stack",
     batch : "Sep",
     ID : 2
    
    }, {
     name: "xyzbhjvcz",
     age: 22,
     course : "Full Stack",
     batch : "Oct",
     ID : 3
    
    }, {
     name: "zzzzzzzz",
     age: 22,
     course : "Full Stack",
     batch : "Sep",
     ID : 4
    }, {
     name: "xyzz",
     age: 22,
     course : "Full Stack",
     batch : "Sep",
     ID : 5
    }
    ]
  }
  add(temp_obj){
    this.setState({
     arr : [...this.state.arr, temp_obj]
    })
    
  }
  updateUser(studentid, tempObj){
    console.log(tempObj);
    this.state.arr.forEach((e) => {
      if(e.ID == studentid){
        this.state.arr.splice(studentid-1, 1, tempObj)
      }

    });
  
  }
  deleteUser(studentid){
    this.state.arr.forEach((e) => {
      if(e.ID == studentid){
        this.state.arr.splice(studentid-1, 1)
      }

    });
    
 

  }
  render() {
    return (
      
          <Router>
          <Navbar />
          <Routes>
              <Route path='' element = {<Home />}/>
              <Route path='/home' element = {<Home />}/>
              <Route path='/student' element = {<Student data = {this.state.arr} />}/>
              <Route path='/contact' element = {<Contact />}/>
              <Route path='/student-desc' element = {<StudentDesc addingData = {this.add.bind(this)} data = {this.state.arr} />}/>
              <Route path='/student-desc/:studentid' element = {<StudentEdit data = {this.state.arr} func = {this.updateUser.bind(this)} func1 = {this.deleteUser.bind(this)} />}/>
          </Routes>
          </Router>
          
      
    )
  }
}

export default App