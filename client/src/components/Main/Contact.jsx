import React from 'react';
import propTypes from 'prop-types';

import { BiMailSend } from 'react-icons/bi';
import { AiOutlineUserAdd, AiOutlineUsergroupAdd } from 'react-icons/ai';
import { RiWechatLine } from 'react-icons/ri';

const Contact = ({ currentUser }) => (
  <div id="contact">
    <div id="contact-name">
      <h5>
        Contacting
        {' '}
        {currentUser.profileName}
      </h5>
    </div>
    <div id="contact-left">
      <a className="contact-link" href="http://wolfebyte.net">
        <span className="contact-icon"><BiMailSend /></span>
        {' '}
        Send Message
      </a>
      {'\n'}
      <a className="contact-link" href="http://wolfebyte.net">
        <span className="contact-icon"><AiOutlineUserAdd /></span>
        {' '}
        Add to Friends
      </a>
      {'\n'}
      <a className="contact-link" href="http://wolfebyte.net">
        <span className="contact-icon"><RiWechatLine /></span>
        {' '}
        Instant Message
      </a>
      {'\n'}
      <a className="contact-link" href="http://wolfebyte.net">
        <span className="contact-icon"><AiOutlineUsergroupAdd /></span>
        {' '}
        Add to Group
      </a>
    </div>
    <div id="contact-right">
      <a className="contact-link" href="http://wolfebyte.net">
        Forward to Friend
      </a>
      {'\n'}
      <a className="contact-link" href="http://wolfebyte.net">
        Add to Favorites
      </a>
      {'\n'}
      <a className="contact-link" href="http://wolfebyte.net">
        Block User
      </a>
      {'\n'}
      <a className="contact-link" href="http://wolfebyte.net">
        Rank User
      </a>
    </div>
  </div>
);

Contact.defaultProps = {
  currentUser: {},
};

Contact.propTypes = {
  currentUser: propTypes.oneOfType([propTypes.object]),
};

export default Contact;
