import React from 'react';
import propTypes from 'prop-types';

class Subscribe extends React.Component {
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
    const { input } = this.state;
    const { profileName, closeSubscribeWindow } = this.props;
    return (
      <div id="subscribe">
        <div id="subscribe-box">
          <div id="subscribe-name">
            <h5>
              Subscribe
            </h5>
          </div>
          <div
            id="subscribe-close"
            onClick={closeSubscribeWindow}
            onKeyPress={closeSubscribeWindow}
            tabIndex={0}
            role="button"
          >
            &times;
          </div>
          <div id="subscribe-content">
            <h5>
              Sign up for updates from
              {' '}
              {profileName}
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

        </div>
      </div>
    );
  }
}

Subscribe.defaultProps = {
  profileName: '',
};

Subscribe.propTypes = {
  profileName: propTypes.string,
};

export default Subscribe;
