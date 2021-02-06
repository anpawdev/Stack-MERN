import React from 'react';
import Header from '../../features/Header/Header';
import HomePageSection from '../../features/HomePageSection/HomePageSection';
import PageTitle from '../../common/PageTitle/PageTitle';
import Posts from '../../features/Posts/PostsContainer';

const HomePage = () => (
  <div>
    <Header />
    <HomePageSection />
    <PageTitle>Blog</PageTitle>
    <Posts postsPerPage={3} pagination={false} />
  </div>
);

export default HomePage;