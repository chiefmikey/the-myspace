import React from 'react';

import Profile from './Profile';
import Contact from './Contact';
import Interests from './Interests';
import Details from './Details';
import Blog from './Blog';
import Blurbs from './Blurbs';
import Friends from './Friends';
import Comments from './Comments';

const Main = () => (
  <div id="main">
    <div id="main-left">
      <Profile />
      <Contact />
      <div id="url">
        <div id="url-name">
          .net URL
        </div>
        <div id="url-address">
          http://wolfebyte.net
        </div>
      </div>
      <Interests />
      <Details />
    </div>
    <div id="main-right">
      <div id="headline">
        <h4>wolfebyte is probably on acid</h4>
      </div>
      <Blog />
      <Blurbs />
      <Friends />
      <Comments />
    </div>
  </div>
);

export default Main;
