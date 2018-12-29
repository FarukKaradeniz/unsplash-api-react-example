import React from 'react';

import GoogleMap from './GoogleMap';

import '../resources/styles/Detail.css';

export default class Detail extends React.Component {
  render() {
    return(
      <div className="popup" id={this.props.id}>
        <a href="#!" className="popup-overlay"></a>
        <div className="popup-dialog">
          <div className="popup-content">
            <div className="image-content">
              <img className="image" src={this.props.smallImage} alt="Hata" />
            </div>
            <div className="user-and-download">
              <div className="user-info">
                <div className="user-image-wrapper">
                  <a href={`https://unsplash.com/@${this.props.user.username}`} target="_blank">
                    <img className="user-image" src={this.props.user.image} alt="Hata User" />
                  </a>
                </div>
                <div className="user-name-wrapper">
                  <p className="user-name">{this.props.user.name}</p>
                  <a href={`https://unsplash.com/@${this.props.user.username}`} target="_blank">
                    <p className="user-username">@{this.props.user.username}</p>
                  </a>
                </div>
              </div>
              <div className="download-button">
                <a href={this.props.rawImage} download>Download</a>
              </div>
            </div>
              {this.props.location && 
                this.props.location.latitude && 
                this.props.location.longitude &&
                <GoogleMap className="gmap" lat={this.props.location.latitude} lng={this.props.location.longitude} />
              }
          </div>
        </div>
      </div>
    );
  }



}