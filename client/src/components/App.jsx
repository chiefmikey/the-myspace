import React from 'react';
import propTypes from 'prop-types';
import axios from 'axios';
import {
  Router,
  Switch,
  Route,
} from 'react-router-dom';

import Header from './Nav/Header';
import Nav from './Nav/Nav';
import Footer from './Nav/Footer';
import LogIn from './Nav/LogIn';
import Landing from './Landing/Landing';
import Main from './Main/Main';
import Blog from './Blog/Blog';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeUser: { _id: -1 },
      currentUser: {},
      logIn: false,
    };
    this.getCurrentUser = this.getCurrentUser.bind(this);
    this.showLogIn = this.showLogIn.bind(this);
  }

  componentDidMount() {
    const { currentUser } = this.state;
    const extract = window.location.href.split('/')[3];
    const url = `/${extract}`;
    if (url !== currentUser.urlAddress) {
      this.getCurrentUser(url);
    }
  }

  componentDidUpdate() {
    const { currentUser } = this.state;
    const extract = window.location.href.split('/')[3];
    const url = `/${extract}`;
    if (url !== currentUser.urlAddress) {
      this.getCurrentUser(url);
    }
  }

  getCurrentUser(urlAddress) {
    axios.get('/user/current', {
      params: {
        urlAddress,
      },
    })
      .then((res) => {
        this.setState({ currentUser: res.data });
      })
      .catch((error) => {
        console.error('Error in App:getCurrentUser', error);
      });
  }

  logInUser(username, email, password) {
    const { activeUser } = this.state;
    axios.get('user/login', {
      params: {
        username,
        email,
        password,
      },
    })
      .then((res) => this.state({ activeUser: res.data }))
      .catch((error) => console.error('Error in App:logIn', error));
  }

  showLogIn(status) {
    const { logIn } = this.state;
    console.log(status);
    if (status === 'openLogIn') {
      this.setState({ logIn: true });
    }
    if (status === 'closeLogIn') {
      this.setState({ logIn: false });
    }
  }

  render() {
    const { history } = this.props;
    const { activeUser, currentUser, logIn } = this.state;
    return (
      <Router history={history}>
        {logIn
          ? <LogIn showLogIn={this.showLogIn} />
          : undefined}
        <Header
          history={history}
          getCurrentUser={this.getCurrentUser}
          activeUser={activeUser}
          showLogIn={this.showLogIn}
        />
        <Nav />
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <Landing />
            )}
          />
          <Route
            path="/:urlAddress"
            exact
            render={(routeProps) => (
              <Main
                history={history}
                currentUser={currentUser}
                routeProps={routeProps}
                getCurrentUser={this.getCurrentUser}
              />
            )}
          />
          {/* <Route
              path={`/${currentUser.urlAddress}`}
              exact
              render={(routeProps) => (
                <Main
                  history={history}
                  currentUser={currentUser}
                  routeProps={routeProps}
                  getSelectedUser={this.getSelectedUser}
                />
              )}
            /> */}
          {/* <Route
              path={`/${selectedUser.urlAddress}`}
              render={() => <Main history={history} currentUser={selectedUser} />}
            /> */}
          <Route
            path="/:urlAddress/blog"
            render={() => (
              <Blog
                history={history}
                currentUser={currentUser}
              />
            )}
          />
          <Route
            path="/:urlAddress/blog/:postId"
            render={() => (
              <Blog
                history={history}
                currentUser={currentUser}
              />
            )}
          />

        </Switch>
        <Footer />
      </Router>
    );
  }
}

App.defaultProps = {
  history: {},
};

App.propTypes = {
  history: propTypes.oneOfType([propTypes.object]),
};

export default App;
