import React from 'react';

import '../resources/styles/ImageView.css';
import Detail from './Detail';



export default class ImageView extends React.Component {
  
  //burada iskeleti güncelemme yap
  getImage = () => {
    let newHeight = (300 * this.props.view.height) / this.props.view.width;
    let style = {'height' : `${newHeight}px`};
    return(
      <React.Fragment>
        <a href={`#${this.props.view.id}`}>
          <img src={this.props.view.url} style={style} key={this.props.view.url} alt="Yükleniyor"/>
        </a>
        <Detail location={this.props.view.location} id={this.props.view.id} rawImage={this.props.view.download} user={this.props.user} />
      </React.Fragment>      
    );

  }
  
  render() {
    return(
      <div className="image-wrapper">
        {this.getImage()}
      </div>
    );
  }
}