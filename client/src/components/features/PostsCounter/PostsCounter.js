import React from 'react';
import { PropTypes } from 'prop-types';

class PostsCounter extends React.Component {

    componentDidMount() {
        const { loadPostsAmount } = this.props;
        loadPostsAmount();
      }
    
      render() {
        const { postsAmount } = this.props;
    
        return (
          <div>
            Posts amount:
            <ul>
              {postsAmount.map(post => <li key={post.id}>{post.amount}</li>)}
            </ul>
          </div>
        );
      }
    
    };
    
    PostsCounter.propTypes = {
      postsAmount: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          amount: PropTypes.string.isRequired,
          content: PropTypes.string.isRequired,
        })
      ),
      loadPostsAmount: PropTypes.func.isRequired,

};

export default PostsCounter;