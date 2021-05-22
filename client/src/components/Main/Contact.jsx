import React from 'react';
import propTypes from 'prop-types';

const Contact = ({ profileName }) => (
  <div id="contact">
    <div id="contact-name">
      <h5>
        Contacting
        {' '}
        {profileName}
      </h5>
    </div>
    <div id="contact-left">
      <a href="http://wolfebyte.net">
        Send Message
      </a>
      {'\n'}
      <a href="http://wolfebyte.net">
        Add to Friends
      </a>
      {'\n'}
      <a href="http://wolfebyte.net">
        Instant Message
      </a>
      {'\n'}
      <a href="http://wolfebyte.net">
        Add to Group
      </a>
    </div>
    <div id="contact-right">
      <a href="http://wolfebyte.net">
        Forward to Friend
      </a>
      {'\n'}
      <a href="http://wolfebyte.net">
        Add to Favorites
      </a>
      {'\n'}
      <a href="http://wolfebyte.net">
        Block User
      </a>
      {'\n'}
      <a href="http://wolfebyte.net">
        Rank User
      </a>
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
