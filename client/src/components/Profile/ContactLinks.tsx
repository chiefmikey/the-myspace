import propTypes from 'prop-types';
import React from 'react';
import { BiLink } from 'react-icons/bi';
import track from '../../telemetry';

const ContactLinks = ({ links }) => {
  let key = 0;
  return links.map((link) => {
    key += 1;
    return (
      <a
        className="contact-link"
        href={link.url}
        target="_blank"
        rel="noreferrer"
        key={key}
        onClick={() => track('contact_link_clicked')}
      >
        <span className="contact-icon">
          <BiLink />
        </span>
        {link.name}
      </a>
    );
  });
};

ContactLinks.defaultProps = {
  links: [],
};

ContactLinks.propTypes = {
  links: propTypes.oneOfType([propTypes.array]),
};

export default ContactLinks;
