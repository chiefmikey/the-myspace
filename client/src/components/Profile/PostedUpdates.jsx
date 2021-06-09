import React from 'react';
import propTypes from 'prop-types';

class PostedUpdates extends React.Component {
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
      <div id="subscribe-content">
        <h5>
          Sign up for updates from
          {' '}
          {currentUser.description.name}
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

PostedUpdates.defaultProps = {
  currentUser: {},
};

PostedUpdates.propTypes = {
  currentUser: propTypes.oneOfType([propTypes.object]),
};

export default PostedUpdates;
