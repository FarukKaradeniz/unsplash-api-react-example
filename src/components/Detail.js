import React from 'react';

import '../resources/styles/Detail.css';

export default class Detail extends React.Component {
  render() {
    return(
      <div id={this.props.id} className="overlay">
        <div className="popup">
          <a className="close" href="#">&times;</a>
          <div className="image-content">
              <img className="image" src={this.props.rawImage} alt="Hata" />
              <div className="user-info">
                <img className="profile-photo" src={this.props.user.image} />
                <p className="user-name">{this.props.user.name}</p>
                <a href={`https://unsplash.com/@${this.props.user.username}`} target="_blank"><p className="user-username">@{this.props.user.username}</p></a>
              </div>
              <a href={this.props.rawImage} className="download-button" download>Download</a>
          </div>
        </div>
      </div>
    );
  }
}