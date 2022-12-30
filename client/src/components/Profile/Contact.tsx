import propTypes from 'prop-types';
import React from 'react';
import { AiOutlineUserAdd, AiOutlineUsergroupAdd } from 'react-icons/ai';
import { RiMailSendLine, RiWechatLine } from 'react-icons/ri';
import LinesEllipsis from 'react-lines-ellipsis';

import ContactLinks from './ContactLinks.jsx';

const Contact = ({ currentUser }) => (
  <div id="contact">
    <h5 id="contact-name">
      <span id="contact-name-text">Contacting</span>
      <LinesEllipsis
        text={` ${currentUser.description.firstName} `}
        ellipsis="... "
        basedOn="letters"
        component="span"
      />
    </h5>
    <div id="contact-layout">
      <div id="contact-left">
        <a
          className="contact-link"
          href={`mailto:${currentUser.email}`}
          target="_blank"
          rel="noreferrer"
        >
          <span className="contact-icon">
            <RiMailSendLine />
          </span>{' '}
          Send Message
        </a>
        <a
          className="contact-link"
          href="http://themyspace.org"
          target="_blank"
          rel="noreferrer"
        >
          <span className="contact-icon">
            <AiOutlineUserAdd />
          </span>{' '}
          Add to Friends
        </a>
        <a
          className="contact-link"
          href="http://themyspace.org"
          target="_blank"
          rel="noreferrer"
        >
          <span className="contact-icon">
            <RiWechatLine />
          </span>{' '}
          Instant Message
        </a>
        <a
          className="contact-link"
          href="http://themyspace.org"
          target="_blank"
          rel="noreferrer"
        >
          <span className="contact-icon">
            <AiOutlineUsergroupAdd />
          </span>{' '}
          Add to Group
        </a>
      </div>
      <div id="contact-right">
        <ContactLinks links={currentUser.links} />
      </div>
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
