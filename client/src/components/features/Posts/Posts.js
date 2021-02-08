import React from 'react';
import { PropTypes } from 'prop-types';
import PostsList from '../PostsList/PostsList';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import Pagination from '../../common/Pagination/Pagination';

class Posts extends React.Component {
  
  state = {
    presentPage: this.props.initialPage || 1,
    initialPage: 1,
    pagination: this.props.pagination  === false ? false : true,
  }

  componentDidMount() {
    const { loadPostByPage, initialPage, postsPerPage } = this.props;
    loadPostByPage(initialPage, postsPerPage);
  }

  loadPostsPage = page => {
    const { loadPostByPage, postsPerPage } = this.props;
    loadPostByPage(page, postsPerPage);
    this.setState({
      presentPage: page
    })
  }

  render() {
    const { presentPage } = this.state
    const { posts, pages, initialPage } = this.props;
    const { pending, error, success} = this.props.request;
    const { loadPostsPage } = this;
    const { pagination } = this.state;

    return (
        <div>
          {!pending && success && (posts.length > 0) && <PostsList posts={posts}/>}
          {(pending || !success) && <Spinner />}
          {!pending && error && <Alert variant="error">{error}</Alert>}
          {!pending && success && (posts.length === 0) && <Alert variant="info">No posts</Alert>}
          <Pagination visible={pagination} presentPage={presentPage} initialPage={initialPage} pages={pages} onPageChange={loadPostsPage}/>
        </div>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })
  ),
  loadPostByPage: PropTypes.func.isRequired,
  request: PropTypes.object.isRequired,
  pagination: PropTypes.bool,
};

export default Posts;