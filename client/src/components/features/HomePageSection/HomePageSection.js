import React from 'react';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import Gallery from "react-photo-gallery";
import { photos } from "./HomePhotos";

const HomePageSection = () => {
    return (
        <div>
            <SectionTitle>Here you’ll find blog posts dedicated to everything you’ve ever wanted to know about the design. Whether you’ve wondered how to design your interior, you’ll find all the answers you’re searching for right here.</SectionTitle>
            <Gallery photos={photos} direction={"column"} margin={4}/>
        </div>    
    )
};

export default HomePageSection;