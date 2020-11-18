/**
 * ************************************
 *
//  * @module  PerformerList
//  * @author  Jordan Grubb
//  * @date    November 17
 *    @description presentation component that renders client input field
 *
 * ************************************
 */

import React, {useState, useEffect}  from 'react';
import '../stylesheets/Performers.scss'
import RequestDisplay from './RequestDisplay.jsx'


const Performer = (props) => {

  const [status, setStatus] = useState(false)

  return (

  <div>
  <button onClick={() => setStatus(!status)} className="performer" id={props.id} ><img id="perfPic" alt="pic" src={props.image}></img><h3 id="nameTag">{props.name}</h3></button>
  { status && <RequestDisplay key={props.id} id={props.id} href={props.image} name={props.name}/>}
</div>
 )
}

const PerformerList = (props) => {
  
  const [performers, setPerformers] = useState([]);
  
    // const getPerformers = () => setView(performers);

    useEffect(() => {
        fetch('/api')
          .then((data) => data.json())
          .then((response) => {
           setPerformers(response.map((person,i) => {
          // return <button className="buttons" key={`performer${i}`}>{person.name}</button>
          return <Performer key={`performers${i}`} id={person.id} name={person.name} image={person.image}/>
          })
          )})
    },[])

// console.log()
  return (
    <div class="main">
        <img id="logo" src="./client/media/Broadway.png" alt="logo"/>
        <img id="select" src="./client/media/Select.png" alt="logo"/>
      <br></br>
      <div id='perPics'>
      {performers} 
      </div>
    </div>
  );
};

export default PerformerList;