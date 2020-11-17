/**
 * ************************************
 *
//  * @module  PerformerList
//  * @author  Jordan Grubb
//  * @date    November 17
 * @description presentation component that renders client input field
 *
 * ************************************
 */

import React from 'react';


const PerformerList = (props) => {

  console.log('PROPS: ', props);
  return (
    <div className="performerBox">
        <h1>Select Performer</h1>
      <br></br>
      <button class="dropbtn"
        type="submit"
        onClick={(e) => props.sendForm()}
        id="request-button"
      >
        Request Now!
      </button>
    </div>
  );
};

export default PerformerList;