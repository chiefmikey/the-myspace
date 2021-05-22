import React from 'react';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPost: '',
    };
  }

  render() {
    return (
      <div id="blog">
        <div id="blog-header">
          Blog
        </div>
        <div id="blog-left">
          Posts
        </div>
        <div id="blog-right">
          Content
        </div>
      </div>
    );
  }
}

export default Blog;
