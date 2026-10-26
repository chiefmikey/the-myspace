import propTypes from 'prop-types';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { getContentPost } from '../../data';
import NotFound from '../Landing/NotFound';

import ContentAll from './ContentAll';
import ContentFoot from './ContentFoot';
import ContentPostCurrent from './ContentPostCurrent';

class Content extends React.Component {
  constructor(properties) {
    super(properties);
    this.state = {
      currentPost: { _id: -2 },
    };
    this.selectPost = this.selectPost.bind(this);
  }

  componentDidMount() {
    const { currentUser } = this.props;
    if (currentUser.contentPosts) {
      this.selectPost();
    }
  }

  componentDidUpdate(previousProperties) {
    const { pathname } = this.props;
    const title = this.titleFromPath(pathname);
    if (title !== this.requestedTitle) {
      this.selectPost(title);
    }
  }

  titleFromPath(pathname) {
    const [, , title = ''] = pathname.split('/');
    return title.split('-').join(' ');
  }

  postUrl(postTitle) {
    const { navigate, currentUser } = this.props;
    if (postTitle) {
      navigate(
        `${currentUser.urlAddress}/${postTitle.split(' ').join('-')}`,
      );
    }
  }

  selectPost(postTitle) {
    const { currentUser, pathname } = this.props;
    const title = postTitle || this.titleFromPath(pathname);
    this.requestedTitle = title;
    this.setState({
      currentPost: getContentPost(currentUser.urlAddress, title),
    });
  }

  render() {
    const { currentUser } = this.props;
    const { currentPost } = this.state;
    return currentPost._id || currentPost._id === 0 ? (
      <div id="content">
        {currentPost._id === -1 ? (
          <NotFound />
        ) : (
          <div id="content-layout">
            {currentPost._id === -2 ? (
              <ContentAll
                currentUser={currentUser}
                currentPost={currentPost}
                selectPost={this.selectPost}
              />
            ) : (
              <>
                <ContentPostCurrent currentPost={currentPost} />
                <ContentFoot
                  currentUser={currentUser}
                  currentPost={currentPost}
                />
              </>
            )}
          </div>
        )}
      </div>
    ) : (
      <></>
    );
  }
}

Content.defaultProps = {
  pathname: '',
  navigate: () => {},
  currentUser: {},
};

Content.propTypes = {
  pathname: propTypes.string,
  navigate: propTypes.func,
  currentUser: propTypes.oneOfType([propTypes.object]),
};

const ContentWithRouter = (properties) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <Content
      {...properties}
      pathname={pathname}
      navigate={navigate}
    />
  );
};

export default ContentWithRouter;
