import { connect } from 'react-redux';
import { postsAmount } from '../../../redux/postsRedux';
import PostsCounter from './PostsCounter';

const mapStateToProps = state => ({
  postsAmount: postsAmount(state),
})

export default connect(mapStateToProps)(PostsCounter);