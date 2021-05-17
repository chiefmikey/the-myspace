import React from 'react';

import Header from './Nav/Header';
import Nav from './Nav/Nav';
import Main from './Main/Main';
import Footer from './Nav/Footer';

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
