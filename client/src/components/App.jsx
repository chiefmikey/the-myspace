import React from 'react';

import Nav from './Nav';
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
      <>
        <Nav />
        <Footer />
      </>
    );
  }
}

export default App;
