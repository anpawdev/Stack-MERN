import React from 'react';
import { PropTypes } from 'prop-types';
import PostsList from '../PostsList/PostsList';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import Pagination from '../../common/Pagination/Pagination';

class Posts extends React.Component {

  state = {
    initialPage: 1,
    postsPerPage: 10,
    pagination: true
  }

  componentDidMount() {
    const { loadPostByPage } = this.props;
    const { initialPage, postsPerPage } = this.state;
    loadPostByPage(initialPage, postsPerPage);
  }

  loadPostsPage = (page) => {
    const { loadPostByPage } = this.props;
    loadPostByPage(page);
  }

  render() {
    const { posts, pages } = this.props;
    const { pending, error, success} = this.props.request;
    const { loadPostsPage } = this;

    return (
      <div>
        {!pending && success && (posts.length > 0) && <PostsList posts={posts}/>}
        <Pagination pages={pages} onPageChange={loadPostsPage}/>
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
      author: PropTypes.string.isRequired,
    })
  ),
  loadPostsByPage: PropTypes.func.isRequired,
  request: PropTypes.object.isRequired,
};

export default Posts;