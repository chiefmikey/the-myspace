import React from 'react';

import Header from './Header';
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
      <>
        <Header />
        <Nav />
        <Main />
        <Footer />
      </>
    );
  }
}

export default App;
