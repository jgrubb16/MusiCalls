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
          // return <button className="buttons" key={`performer${i}`}>{person.name}</button>
          return <a className="performer"href={person.image} key={`performers${i}`}><img alt="pic" src={person.image} width='100%' height='100%'></img><h3 id="nameTag">{person.name}</h3></a>
          
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
      <div >
      {performers} 
      </div>    
    </div>
  );
};

export default PerformerList;