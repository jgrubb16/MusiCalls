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

  const id = props.id

      const sendForm = () => {
      fetch('/api', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({message,id})
       })
      };

  
  return (
    <div id="requestBox">
      <form />
      <label htmlFor="fullName">Recipient's Name:</label>
      <input type="text" id="name" name="name" />
      <br></br>
      <label htmlFor="Email">Recipient's Email:</label>
      <input type="text" id="email" name="email" />
      <br></br>
      <textarea id={props.id} name={props.name} image={props.image} className="formBox" value={message} onChange={(e) => setMessage(e.target.value)} rows = "5" cols = "60" name = "requestBody" placeholder="Enter Your Request" maxLength="250">
         </textarea>
      <button
        id={props.id}
        type="submit"
        onClick={(e) => sendForm(e)}
      >
        Request Now!
      </button>
    </div>
  );
  }
  
export default RequestDisplay;
