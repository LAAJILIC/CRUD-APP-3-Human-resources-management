import React, { useState } from 'react'
import { useMutation } from "@apollo/client";
import { UPDATE_EMPLOYEE_PASSWORD } from '../Graphql/Mutation';

function UpdatePassword() {

    const [name, setName] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const [updatePassword, { error }] = useMutation(UPDATE_EMPLOYEE_PASSWORD);
  return (
    <div>
        <input type="text" placeholder="the name" className='password-input'
        onChange={(e) => {setName(e.target.value);}}/>
        <input type="password" placeholder="current password" className='password-input'
        onChange={(e) => {setCurrentPassword(e.target.value);}}/>
        <input type="password" placeholder="new password" className='password-input'
        onChange={(e) => {setNewPassword(e.target.value);}}/>
        <button className='password-button' onClick={() => {updatePassword({ 
            variables: {
                name: name,
                oldPassword: currentPassword,
                newPassword: newPassword, 
            },
        });}}>Update Password</button>
    </div>
  )
}

export default UpdatePassword;