import React from 'react';

import '../resources/styles/Paging.css';

export default class Paging extends React.Component {
  createButtons = () => {
    let isNextDisabled = false;
    let isPrevDisabled = false;
    if (this.props.paging.currentPage === this.props.paging.totalPages) {
      isNextDisabled = true;
    }
    if (this.props.paging.currentPage === 1) {
      isPrevDisabled = true;
    }

    return(
      <React.Fragment>
        <button className="button-prev" disabled={isPrevDisabled} onClick={() => this.props.onPrevClick()}>&lt;</button>
        <button className="button-next" disabled={isNextDisabled} onClick={() => this.props.onNextClick()}>&gt;</button>
      </React.Fragment>
    ); 

  }

  
  render() {
    return(
      <div className={"pagination-wrapper"}>
        {this.createButtons()}
      </div>
    );
  }
}