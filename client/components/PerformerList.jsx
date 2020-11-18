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

import React, {useState, useEffect}  from 'react';

const Data = (props) => {
    const [performers, setPerformers] = useState([]);

    const getPerformers = () => setView(performers);

    useEffect(() => {
        fetch('/api/performers')
    })
}

const PerformerList = (props) => {

  console.log('PROPS: ', props);
  return (
    <div className="performerBox">
        <h1>Select Performer</h1>
      <br></br>
      <button class="dropbtn" dropdown></button>
      <div class="dropdown-content">
          
      </div>
        type="submit"
        onClick={(e) => props.sendForm()}
        id="request-button"
      
    </div>
  );
};

export default PerformerList;