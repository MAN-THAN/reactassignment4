import React from 'react';
import {Link, useLocation,} from "react-router-dom";
import "./style.css";

function Student(){

    let student_data = [{
        name: "manthan",
        age: 22,
        course : "Full Stack",
        batch : "Oct",

    }, {
     name: "xyzz",
     age: 22,
     course : "Full Stack",
     batch : "Sep"

    }, {
     name: "xyzbhjvcz",
     age: 22,
     course : "Full Stack",
     batch : "Oct"

    }, {
     name: "zzzzzzzz",
     age: 22,
     course : "Full Stack",
     batch : "Sep"
    }, {
     name: "xyzz",
     age: 22,
     course : "Full Stack",
     batch : "Sep"
    }]
    
   let location = useLocation();
   console.log(location.state)
   if(location.state != null){
       const {data} = location.state;
       console.log(data)
       
       student_data.push(data);
       console.log(student_data)
      
      

    }
   

    

     return (
        <div className='home'>
            <Link to="/student-desc">
            <button id='btn'>Add New Student</button>
            </Link>
           
    
         
         
          <table className='table table-striped tx'>
              <tr>
                  <th  className='heading'>Name</th>
                  <th  className='heading'>Age</th>
                  <th  className='heading'>Course</th>
                  <th  className='heading'>Batch</th>
                  <th  className='heading'>Change</th>
              </tr>
              {student_data.length > 0 && student_data.map((e) => {
                  return (<tr>
                      <td>{e.name}</td>
                      <td>{e.age}</td>
                      <td>{e.course}</td>
                      <td>{e.batch}</td>
                      <td><Link to= "*">Edit</Link></td>
                  </tr>)
              })} 
             
          </table>
          
        
      </div>
  )
}

export default Student