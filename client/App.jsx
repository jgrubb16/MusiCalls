import React, { Component } from 'react';
import PerformerList from './components/PerformerList.jsx'
import RequestDisplay from './components/RequestDisplay.jsx'
import { Link } from "@reach/router";

const App = () => {
//   constructor(props) {
//     super(props);
//     this.state = {peformers: []};
//   }

// componentDidMount(){
//   perfomerArray = [];

// }
return (
    
      <div>
        <PerformerList />
        <RequestDisplay />
      </div>
)
}
// const App = () => (
//   <div>
//     <h1>Musi-Calls!</h1>
//   </div>
// )

// const Home = () => (
//   <div>
//     <h2>Performers</h2>
//   </div>
// )

// const Dashboard = () => (
//   <div>
//     <h2>Book Now!</h2>
//   </div>
// )


export default App;
