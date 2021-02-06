import React from 'react';
import Header from '../../features/Header/Header';
import HomePageSection from '../../features/HomePageSection/HomePageSection';
import Posts from '../../features/Posts/PostsContainer';
import Subscribe from '../../features/Subscribe/Subscribe';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div>
    <Header />
    <HomePageSection />
    <SectionTitle>Newest from last week</SectionTitle>
    <Posts initialPage={1} postsPerPage={3} pagination={false} />
    <div className="text-xs text-center bg-section-500 w-full p-6 mt-4 uppercase">
      <Link to="/posts" >Load more posts &raquo;</Link>
    </div>
    <Subscribe />
  </div>
);

export default HomePage;