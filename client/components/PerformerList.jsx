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
import '../stylesheets/Performers.scss'
const PerformerList = (props) => {

  const [performers, setPerformers] = useState([]);

    // const getPerformers = () => setView(performers);

    useEffect(() => {
        fetch('/api')
          .then((data) => data.json())
          .then((response) => 
          setPerformers(response.map((person,i) => {
          return <button className="buttons" key={`performer${i}`}>{person.name}</button>
          })
        )
       )
       console.log('mounted')
       return () => console.log('unmounted')
    },[])
console.log()
  return (
    <div className="performerBox">
        <h1>Select Performer</h1>
      <br></br>
      {performers}     
    </div>
  );
};

export default PerformerList;