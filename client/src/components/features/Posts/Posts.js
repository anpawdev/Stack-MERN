import React from 'react';
import { PropTypes } from 'prop-types';
import PostsList from '../PostsList/PostsList';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';

class Posts extends React.Component {

  componentDidMount() {
    const { loadPosts } = this.props;
    loadPosts();
  }

  render() {
    const { posts } = this.props;
    const { pending, error, success} = this.props.request;

    return (
      <div>
        {!pending && success && (posts.length > 0) && <PostsList posts={posts}/>}
        {(pending || !success) && <Spinner />}
        {!pending && error && <Alert variant="error">{error}</Alert>}
        {!pending && success && (posts.length === 0) && <Alert variant="info">No posts</Alert>}
      </div>
    );
  }

};

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
  loadPosts: PropTypes.func.isRequired,
  request: PropTypes.object.isRequired,
};

export default Posts;