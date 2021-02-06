import React from 'react';
import PageTitle from '../../common/PageTitle/PageTitle';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import Subscribe from '../../features/Subscribe/Subscribe';
import About_1 from '../../../images/About_1.jpg';
import About_2 from '../../../images/About_2.jpg';

const AboutPage = () => {
    return(
        <div>
            <PageTitle>About me</PageTitle>
            <div className="container text-justify">
                <p className="text-sm">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                <SmallTitle>About Design</SmallTitle>
                <p className="text-sm">"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
                <div className="container mx-auto flex flex-wrap justify-center m-6 py-6">
                    <img src={About_1} alt="Me" className="lg:w-1/2 p-2" />
                    <img src={About_2} alt="Me" className="lg:w-1/2 p-2" />
                </div>
                <p className="text-sm">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            </div>
            <Subscribe />
        </div>
    );
};

export default AboutPage;