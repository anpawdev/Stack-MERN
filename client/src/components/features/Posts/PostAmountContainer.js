import { connect } from 'react-redux';
import { postsAmount, loadPostsRequest } from '../../../redux/postsRedux';
import PostsCounter from './PostsCounter';

const mapStateToProps = state => ({
  posts: postsAmount(state),
})

const mapDispatchToProps = dispatch => ({
    loadPostsAmount: () => dispatch(loadPostsRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsCounter);