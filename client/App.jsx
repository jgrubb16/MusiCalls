import React, { Component } from 'react';
import PerformerList from './components/PerformerList.jsx'
import RequestDisplay from './components/RequestDisplay.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {brand: "Ford"};
  }

  render() {
    return (
      <div>
        <PerformerList />
        <RequestDisplay />
      </div>
    );
  }
}

export default App;
