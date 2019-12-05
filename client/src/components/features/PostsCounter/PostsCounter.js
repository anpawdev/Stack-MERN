import React from 'react';
import { PropTypes } from 'prop-types';

class PostsCounter extends React.Component {
    
      render() {
        const { postsAmount } = this.props;
    
        return (
          <div>
            Posts amount: {postsAmount > 0 ? postsAmount : '- no posts -'}
          </div>
        );
      }
    
  };
    
    PostsCounter.propTypes = {
      postsAmount: PropTypes.number.isRequired
   };

export default PostsCounter;