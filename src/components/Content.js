import React from 'react';

import ImageList from './ImageList';
import NotFound from './NotFound';

import '../resources/styles/Content.css';

export default class Content extends React.Component { 
  render() {
    return(
      <div style={{display: this.props.visibility}} className="content">
        {(this.props.data !== null && this.props.data.length !== 0) ? <ImageList data={this.props.data} /> : <NotFound />}
      </div>
    ); 
  }
}