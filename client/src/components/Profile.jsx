import React from 'react';
import wbyte from '../../public/img/wbyte.png';

const Profile = () => (
  <div id="profile">
    <div id="profile-name">
      <h3>wolfebyte</h3>
    </div>
    <div id="profile-pic">
      <img id="profile-pic-img" src={wbyte} alt="wolfebyte logo" />
    </div>
    <div id="profile-mood">
      <b>Mood</b>
      {': cloudy ;) \nView My: Pics | Videos'}
    </div>
    <div id="profile-desc">
      {'":-)" \n\nMale \n30 years old \nArvada, \nCOLORADO \nUnited States \n\nLast Login: \n4/20/2020'}
    </div>
  </div>
);

export default Profile;
