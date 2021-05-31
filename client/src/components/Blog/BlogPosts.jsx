import React from 'react';
import propTypes from 'prop-types';
import LinesEllipsis from 'react-lines-ellipsis';

const BlogPosts = ({
  sortedPosts, selectPost, currentPost, highlightPost,
}) => {
  if (sortedPosts.length > 0) {
    let highlightId = highlightPost;
    return sortedPosts.map((post) => {
      let className = 'blogpost';
      if (!highlightId && highlightId !== 0) {
        [[highlightId]] = sortedPosts;
      }
      if (highlightId === post[0]) {
        className = 'blogpost selected';
      }
      return (
        <div
          className={className}
          key={sortedPosts.indexOf(post)}
          onClick={() => selectPost(post[0])}
          onKeyPress={() => selectPost(post[0])}
          tabIndex={0}
          role="button"
        >
          <LinesEllipsis
            text={post[1]}
            maxLine="2"
            ellipsis="..."
            trimRight
            basedOn="letters"
          />
        </div>
      );
    });
  }
  return (
    <div
      className="blogpost selected"
      key={-1}
      onClick={() => selectPost(-1)}
      onKeyPress={() => selectPost(-1)}
      tabIndex={0}
      role="button"
    >
      ( None )
    </div>
  );
};

BlogPosts.defaultProps = {
  sortedPosts: [],
};

BlogPosts.propTypes = {
  sortedPosts: propTypes.oneOfType([propTypes.array]),
};

export default BlogPosts;
