import React from 'react';
import PropTypes from 'prop-types';

class Pagination extends React.Component {
  
  state = {
    presentPage: this.props.presentPage || (this.props.initialPage || 1),
    visible: this.props.visible === false ? false : true,
  }

  changePage = (newPage) => {
    const { onPageChange } = this.props;
    this.setState({ presentPage: newPage });
    onPageChange(newPage);
  }

  render() {
    const { pages } = this.props;
    const { presentPage, visible } = this.state;
    const prevButton = <li className="flex justify-center items-center cursor-pointer m-4" onClick={() => this.changePage(presentPage - 1)}>&laquo;</li>
    const nextButton = <li className="flex justify-center items-center cursor-pointer m-4" onClick={() => this.changePage(presentPage + 1)}>&raquo;</li>
   
      return (
        <div className="mx-auto text-center">
         {visible &&  <ul className="flex justify-center list-none text-xl"> 
            {(presentPage > 1) ? prevButton : ''}
              {[...Array(pages)].map((el, page) => (
            <li
              key={++page}
              onClick={() => this.changePage(page)}
              className={`flex justify-center items-center cursor-pointer m-4${page === presentPage ? 'flex justify-center items-center cursor-pointer m-4 text-blue-500' : ''}`}
            >
              {page}
            </li>
          ))}
            {(presentPage === pages && pages !== 0) ? '' : nextButton}
          </ul  >
          }
        </div>
      );
    
  }
}

Pagination.propTypes = {
  pages: PropTypes.number.isRequired,
  initialPage: PropTypes.number,
  onPageChange: PropTypes.func.isRequired,
  visible: PropTypes.bool,
};

export default Pagination;