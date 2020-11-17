import React, { Component } from 'react';
import RequestDisplay from './components/RequestDisplay.jsx';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <RequestDisplay />
      </div>
    );
  }
}

export default App;
