import React from 'react';
import PageTitle from '../../common/PageTitle/PageTitle';
import SmallTitle from '../../common/SmallTitle/SmallTitle';

class Header extends React.Component {
    render() {
        return(
            <div className="h-header container pb-80">
                <div className="w-full mb-6 pt-16 text-center">
                    <PageTitle>Inspiring Design Blog</PageTitle>
                    <SmallTitle>Design is a decorating blog with endless amounts of tips and trends on the subject.</SmallTitle>
                </div>
            </div>
        );
    }
};

export default Header;