import React from 'react';

import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      state: '',
    };
  }

  render() {
    return (
      <div className="app">
        <Nav />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
