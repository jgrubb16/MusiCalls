/**
 * ************************************
 *
//  * @module  requestDisplay
//  * @author  Jordan Grubb
//  * @date    November 17
 * @description presentation component that renders client input field
 *
 * ************************************
 */

import React, {useState, useRef, useCallback, useEffect}  from 'react';

import '../stylesheets/Performers.scss'



const RequestDisplay = (props) => {
  const [message, setMessage] = useState([]);
  const [email,setEmail] = useState([])
  const [recName, setRecName] = useState([])
  const id = props.id
  const name = recName
  const emailAddress = email

  console.log('name: ',recName)
  console.log('email: ', email)
      const sendForm = () => {
      fetch('/api', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({message,id,emailAddress,name})
       }).then(() => window.location.reload());
      };

      

  
  return (
    <div id="requestBox" >
      <form id="fullForm" />
      <label htmlFor="fullName">Recipient's Name:</label>
      <input onChange={(e) => setRecName(e.target.value)} value={recName} type="text" id="name" name="name" />
      <br></br>
      <label htmlFor="Email">Recipient's Email:</label>
      <input onChange={(e) => setEmail(e.target.value)} value={email} type="text"  id="email" name="email" />
      <br></br>
      <textarea id={props.id} type="reset" name={props.name} image={props.image} class="formBox" value={message} onChange={(e) => setMessage(e.target.value)} rows = "5" cols = "60" name = "requestBody" placeholder="Enter Your Request" maxLength="250">
         </textarea>
      <button
        id={props.id}
        type="submit"
        onClick={(e) => sendForm(e)}
      >
Send Request      </button>
    </div>
  );
  }
  
export default RequestDisplay;
