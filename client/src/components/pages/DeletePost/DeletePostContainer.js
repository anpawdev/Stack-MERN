import { connect } from 'react-redux';
import { deletePostRequest, getUpdateRequest, resetUpdateRequest } from '../../../redux/postsRedux';
import DeletePost from './DeletePost';

const mapStateToProps = state => ({
  request: getUpdateRequest(state)
});

const mapDispatchToProps = (dispatch, props) => ({
  deletePost: () => dispatch(deletePostRequest(props.match.params.id)),
  resetRequest: () => dispatch(resetUpdateRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(DeletePost);
