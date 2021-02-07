import React from 'react'
import PageTitle from '../../common/PageTitle/PageTitle';
import Gallery from "react-photo-gallery";
import { photos } from "./InstagramPhotos";

const Instagram = () => {
    return(
        <div>
            <PageTitle>Follow us on #Instagram</PageTitle>
            <Gallery photos={photos} direction={"row"} margin={4}/>
        </div>
    )
};

export default Instagram;