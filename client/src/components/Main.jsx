import React from 'react';

import Profile from './Profile';
import Contact from './Contact';
import Blog from './Blog';

const Main = () => (
  <div id="main">
    <div id="main-left">
      <Profile />
      <Contact />
    </div>
    <div id="main-right">
      <div id="headline">
        <h4>wolfebyte is probably on acid</h4>
      </div>
      <Blog />
    </div>
  </div>
);

export default Main;
