import React from 'react';
import propTypes from 'prop-types';

const Contact = ({ profileName }) => (
  <div id="contact">
    <div id="contact-name">
      <h5>
        Contacting
        {profileName}
      </h5>
    </div>
    <div id="contact-left">
      <a href="">Send Message</a>
      {'\n'}
      <a href="">Add to Friends</a>
      {'\n'}
      <a href="">Instant Message</a>
      {'\n'}
      <a href="">Add to Group</a>
    </div>
    <div id="contact-right">
      <a href="">Forward to Friend</a>
      {'\n'}
      <a href="">Add to Favorites</a>
      {'\n'}
      <a href="">Block User</a>
      {'\n'}
      <a href="">Rank User</a>
    </div>
  </div>
);

Contact.defaultProps = {
  profileName: '',
};

Contact.propTypes = {
  profileName: propTypes.string,
};

export default Contact;
