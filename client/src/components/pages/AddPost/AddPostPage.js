import React from 'react';
import PageTitle from '../../common/PageTitle/PageTitle';
import PostForm from '../../features/PostForm/PostFormContainer';

const AddPostPage = props => (
    <div>
      <PageTitle>Add post</PageTitle>
      <PostForm match={props.match}/>
    </div>
  );
  
  export default AddPostPage;