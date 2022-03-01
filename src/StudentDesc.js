import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "./styleinput.css";

class StudentDesc extends Component {
  state = {
    name : "",
    age: "",
    course  : "",
    batch : ""

  }
  change (){

   
    this.setState({
      name : "",
    age: "",
    course  : "",
    batch : ""
    })
  
  
  }
  pass (){
    const temp_obj = {
      name : this.state.name,
      age : this.state.age,
      course : this.state.course,
      batch : this.state.batch
    }
    console.log(temp_obj)
    return temp_obj


  }

  render() {
    return (
    <>
      <form action="">
  <div className="input-field">
    <input type="text" onChange={(e) => {this.setState({name : e.target.value})}} id = "name" required />
    <label >Name:</label>
  </div>
  <div className="input-field">
    <input onChange={(e) => {this.setState({age : e.target.value})}} type="number" required id = "name"/>
    <label >Age:</label>
  </div>
  <div className="input-field">
    <input type="text" onChange={(e) => {this.setState({course : e.target.value})}} id = "name" required />
    <label>Course:</label>
  </div>
  <div className="input-field">
    <input type="text" onChange={(e) => {this.setState({batch : e.target.value})}} id = "name" required />
    <label >Batch:</label>
  </div>
</form>
<Link to = "/student"><button className='btn'>Cancel</button></Link>
<Link to="/student" state = {{data : this.pass()}}><button className='btn' id='bt1' onClick={this.change.bind(this)} >Submit</button></Link>
</>
    )
  }
}

export default StudentDesc