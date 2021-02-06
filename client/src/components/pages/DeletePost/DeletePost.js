import React from 'react';
import { PropTypes } from 'prop-types';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';

class DeletePost extends React.Component {
  
    componentDidMount() {
      const { deletePost } = this.props;
      deletePost();
    }

  render() {
   
      const { request } = this.props;

    return (
      <div>
        {(request.pending) && <Spinner />}
        {!request.pending && request.error !== null && <Alert variant="error">{`Error: ${request.error}`}</Alert>}
        {request.success && request.error === null && <Alert variant="info">Post has been removed</Alert>}
      </div>
    );
  }
}

DeletePost.propTypes = {
  request: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired
};

export default DeletePost;
