import React from 'react';
import propTypes from 'prop-types';

const Profile = ({
  profileName,
  profilePic,
  profileMood,
  profileMoodEmoji,
  profileStatus,
  profileGender,
  profileAge,
  profileCity,
  profileState,
  profileCountry,
  profileLogin,
}) => (
  <div id="profile">
    <div id="profile-name">
      <h3>{profileName}</h3>
    </div>
    <div id="profile-pic">
      <img id="profile-pic-img" src={profilePic} alt="wolfebyte logo" />
    </div>
    <div id="profile-mood">
      <div id="profile-mood-name">Mood:</div>
      <div id="profile-mood-current">{profileMood}</div>
      <div id="profile-mood-current-emoji">{profileMoodEmoji}</div>
      <div id="profile-mood-view-pics">
        View My:
        {' '}
        <a>Pics</a>
        {' '}
        |
        {' '}
        <a>Videos</a>
      </div>
    </div>
    <div id="profile-desc">
      <div id="profile-desc-status">
        "
        {profileStatus}
        "
      </div>
      <div id="profile-desc-gender">{profileGender}</div>
      <div id="profile-desc-age">
        {profileAge}
        {' '}
        years old
      </div>
      <div id="profile-desc-city">{profileCity}</div>
      <div id="profile-desc-state">{profileState}</div>
      <div id="profile-desc-country">{profileCountry}</div>
      <div id="profile-desc-login">Last Login:</div>
      <div id="profile-desc-login-date">{profileLogin}</div>
    </div>
  </div>
);

Profile.defaultProps = {
  profileName: '',
  profilePic: '',
  profileMood: '',
  profileMoodEmoji: '',
  profileStatus: '',
  profileGender: '',
  profileAge: '',
  profileCity: '',
  profileState: '',
  profileCountry: '',
  profileLogin: '',
};

Profile.propTypes = {
  profileName: propTypes.string,
  profilePic: propTypes.string,
  profileMood: propTypes.string,
  profileMoodEmoji: propTypes.string,
  profileStatus: propTypes.string,
  profileGender: propTypes.string,
  profileAge: propTypes.string,
  profileCity: propTypes.string,
  profileState: propTypes.string,
  profileCountry: propTypes.string,
  profileLogin: propTypes.string,
};

export default Profile;
