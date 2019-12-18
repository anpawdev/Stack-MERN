import { connect } from 'react-redux';
import { getRequest, addPostRequest, resetRequest, editPostRequest, getSinglePost, loadSinglePostRequest } from '../../../redux/postsRedux';
import PostForm from './PostForm';

const mapStateToProps = state => ({
  request: getRequest(state),
  singlePost: getSinglePost(state),
});

const mapDispatchToProps = dispatch => ({
  addPost: (post) => dispatch(addPostRequest(post)),
  editPost: (post, id) => dispatch(editPostRequest(post, id)),
  loadSinglePost: (id) => dispatch(loadSinglePostRequest(id)),
  resetRequest: () => dispatch(resetRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);