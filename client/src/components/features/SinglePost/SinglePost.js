import React from 'react';
import { PropTypes } from 'prop-types';
import { FacebookProvider, Comments, ShareButton } from 'react-facebook';
import { withRouter } from 'react-router-dom';
import { BASE_URL } from '../../../config';

import PageTitle from '../../common/PageTitle/PageTitle';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';

class SinglePost extends React.Component {

  componentDidMount() {
    const { loadSinglePost, match } = this.props;
    loadSinglePost(match.params.id);
  }

  render() {
    const { singlePost } = this.props;
    const { pending, error, success} = this.props.request;
    const { author } = this.props.singlePost;
    const { location } = this.props;

    return (
      <div>
        {(pending || !success) && <Spinner />}
        {!pending && success && singlePost && 
          <div>
            <PageTitle>{singlePost.title}</PageTitle>
            <div className="post-content">
              <HtmlBox>{singlePost.content}</HtmlBox>
              <p>Author: {author} </p>
            </div>
            <FacebookProvider appId="430799611158178">
              <Comments href={`${BASE_URL}/${location.pathname}`} />
              <ShareButton className= "button button--primary" href="http://www.facebook.com">
                Share on facebook
              </ShareButton>
            </FacebookProvider>
          </div>
        }
        {!pending && error && <Alert variant="error">{error}</Alert>}
        {!pending && success && !singlePost && <Alert variant="info">No post</Alert>}
      </div>
    );
  }
};

SinglePost.propTypes = {
  singlePost: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
    author: PropTypes.string,
  }),
  request: PropTypes.object.isRequired,
  loadSinglePost: PropTypes.func.isRequired,
};

export default withRouter(props => <SinglePost {...props}/>);