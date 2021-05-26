import React from 'react';
import propTypes from 'prop-types';

import BlogPostList from './BlogPostList';
import BlogPostCurrent from './BlogPostCurrent';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPost: {
        title: 'wow thats a big hot dog',
        date: new Date,
        content: 'its of the casper variety i suppose, but one could argue that. im not sure if the absolute quantity of remaining sausage is enough for your mom to fit in her mouth. so dont forget that and keep a visual of it in your mind when you go to sleep at night. if this is long enough i can stop typing and just see if this example fits in the stupid column or not but whatever its just part of what i do and typing is a hoot.',
      },
    };
  }

  // componentDidMount() {
  //   const { routeProps, getCurrentUser } = this.props;
  //   getCurrentUser(routeProps.match.url);
  // }

  // componentDidUpdate(prevProps) {
  //   const { routeProps, getCurrentUser } = this.props;
  //   if (prevProps.routeProps.match.url !== routeProps.match.url) {
  //     getCurrentUser(routeProps.match.url);
  //   }
  // }

  render() {
    const { history, currentUser } = this.props;
    const { currentPost } = this.state;
    return (
      <>
        <div id="blog">
          <div id="blog-left">
            <div id="blog-header">
              <h3>
                {currentUser.profileName}
                &apos;s Blog
              </h3>
            </div>
            <BlogPostList currentUser={currentUser} />
          </div>
          <div id="blog-right">
            <BlogPostCurrent currentPost={currentPost} />
          </div>
        </div>
      </>
    );
  }
}

Blog.defaultProps = {
  history: {},
  currentUser: {},
};

Blog.propTypes = {
  history: propTypes.oneOfType([propTypes.object]),
  currentUser: propTypes.oneOfType([propTypes.object]),
};

export default Blog;
