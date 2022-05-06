import React, { useState } from 'react';
import { CREATE_EMPLOYEE } from '../Graphql/Mutation';

import { useMutation } from "@apollo/client";

function CreateEmployee() {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const [createmployee, { error }] = useMutation(CREATE_EMPLOYEE);
  return (
    <div className="create-employee">
         <input type="text" placeholder="Name of the employee" className='input' onChange={(e) => {setName(e.target.value);}}/>
         <input type="text" placeholder="department of the employee" className='input' onChange={(e) => {setDepartment(e.target.value);}}/>
         <input type="text" placeholder="email of the employee" className='input' onChange={(e) => {setEmail(e.target.value);}}/>
         <input type="text" placeholder="password of the employee" className='input' onChange={(e) => {setPassword(e.target.value);}}/>
          <button className='button'
           onClick={() => {
            createmployee({
               variables: { name: name, department: department, email: email, password: password},
             });
          }}
          >
            Create new employee</button>
       </div>
  )
}

export default CreateEmployee