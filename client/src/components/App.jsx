import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      state: 'Hullo Wurld',
    };
  }

  render() {
    const { state } = this.state;
    return (
      <div>{state}</div>
    );
  }
}

export default App;
