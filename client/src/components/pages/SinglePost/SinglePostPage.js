import React from 'react';
import SinglePost from '../../features/SinglePost/SinglePostContainer';

const SinglePostPage = props => (
    <div>
      <h1>Single Post</h1>
      <SinglePost match={props.match} />
    </div>
  );
  
  export default SinglePostPage;