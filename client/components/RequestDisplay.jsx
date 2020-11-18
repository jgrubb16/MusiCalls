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

import React from 'react';

import '../stylesheets/Performers.scss'

const RequestDisplay = (props) => {
  
  
  return (
    <div id="requestBox">
      <form />
      <label htmlFor="fullName">Recipient's Name:</label>
      <input type="text" id="name" name="name" />
      <br></br>
      <label htmlFor="Email">Recipient's Email:</label>
      <input type="text" id="email" name="email" />
      <br></br>
      <textarea rows = "5" cols = "60" name = "requestBody" placeholder="Enter Your Request">
         </textarea>
      <button
        type="submit"
        onClick={(e) => props.sendForm()}
        id="request-button"
      >
        Request Now!
      </button>
    </div>
  );
};

export default RequestDisplay;
