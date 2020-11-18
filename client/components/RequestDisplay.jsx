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
import { post } from '../../server/server';

import '../stylesheets/Performers.scss'


const RequestDisplay = (props) => {
  const [message, setMessage] = useState([]);

}
const sendForm = (form) => {
message.body = form.target.value
}
// useEffect(() => {
  //   post('/api')
  //     .then((data) => data.json())
  //     .then((response) => 
  //     setPerformers(response.map((message,i) => {
    //     // return <button className="buttons" key={`performer${i}`}>{person.name}</button>
    //     return <a className="performer" href={person.image} key={`performers${i}`}><img id="perfPic" alt="pic" src={person.image}></img><h3 id="nameTag">{person.name}</h3></a>
    
  
  return (
    <div id="requestBox">
      <form />
      <label htmlFor="fullName">Recipient's Name:</label>
      <input type="text" id="name" name="name" />
      <br></br>
      <label htmlFor="Email">Recipient's Email:</label>
      <input type="text" id="email" name="email" />
      <br></br>
      <input value={message} onChange={(e) => setMessage(e.target.value)} rows = "5" cols = "60" name = "requestBody" placeholder="Enter Your Request" maxlength="250">
         </input>
      <button
        id="request-button"
        type="submit"
        onClick={(e) => sendForm()}
      >
        Request Now!
      </button>
    </div>
  );

export default RequestDisplay;
