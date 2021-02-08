import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

import Button from '../../common/Button/Button';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import HtmlBox from '../../common/HtmlBox/HtmlBox';
import cutText from '../../../utils/CutText';
import UserLogin from '../../../images/default-user-image.png';

const PostSummary = ({ id, title, content, author }) => (
   <article className="flex flex-wrap justify-center items-center w-full mx-auto md:w-1/2 lg:w-1/3 p-6 mt-8 border text-sm">
      <div className="flex flex-col items-stretch min-h-full p-4">
        <div className="flex flex-wrap items-center flex-1 px-2 py-1 mx-auto text-justify">
          <SmallTitle>{title}</SmallTitle>
          <HtmlBox>{cutText(content, 200)}</HtmlBox>
        </div>
        <div className="flex items-center justify-around px-4 py-2 mt-2">
          <div className="flex items-center flex-1">
            <img
              className="object-cover h-10 rounded-full"
              src={UserLogin}
              alt="avatar"
            />
            <p className="px-2 leading-2 font-bold sm:text-lg sm:leading-7"> {author} </p>
          </div>
          <p className="mt-1 text-xs text-gray-600">5 minutes read</p>
        </div>
        <div className="flex items-center justify-center px-4 py-2 mt-2 text-sm">
          <Link to={`posts/${id}`}>
            <Button>Read more</Button>
          </Link>
          <Link to={`posts/edit/${id}`}>
            <Button>Edit post
            <svg className="w-4 h-4 ml-2 fill-current" viewBox="0 0 20 20"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path></svg>
            </Button>
          </Link>
          <Link to={`posts/delete/${id}`}>
            <svg className="w-4 h-4 ml-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>            
          </Link>
        </div>     
    </div>
</article>
);

PostSummary.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  author: PropTypes.string,
};

export default PostSummary;