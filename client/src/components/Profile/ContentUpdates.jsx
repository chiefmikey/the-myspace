import React from 'react';
import propTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';

class ContentUpdates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ input: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    this.setState({ input: '' });
  }

  render() {
    const { currentUser } = this.props;
    const { input } = this.state;
    return (
      <div id="subscribe-text">
        <h5 id="subscribe-text-name">
          <span id="subscribe-text-name-text">Sign up for updates from </span>
          <LinesEllipsis
            text={`${currentUser.description.firstName} `}
            ellipsis="... "
            basedOn="letters"
            component="span"
          />
        </h5>
        <form onSubmit={this.onSubmit}>
          <input
            type="email"
            id="subscribe-email"
            onChange={this.onChange}
            value={input}
            placeholder="e-mail"
          />
          <input type="submit" id="subscribe-submit" />
        </form>
      </div>
    );
  }
}

ContentUpdates.defaultProps = {
  currentUser: {},
};

ContentUpdates.propTypes = {
  currentUser: propTypes.oneOfType([propTypes.object]),
};

export default ContentUpdates;
