import React from 'react';

import ImageView from './ImageView';

import '../resources/styles/ImageList.css';



export default class ImageList extends React.Component{

  returnImageList = () => {
    const list = this.props.data.map(result => {
      console.log(result);
      let loc = false;
      if (!!result.location) {
        if (!!result.location.position) {
          loc = result.location.position;
        }
        
      }
      const view = {
        url: result.urls.small,
        width: result.width,
        height: result.height,
        id: result.id,
        download: result.urls.raw,
        location: loc,
      };
      const user = {
        id: result.user.id,
        username: result.user.username,
        name: result.user.name,
        image: result.user.profile_image.medium,
      };
      return <ImageView key={result.id} view={view} user={user} />;
    });

    return list;
  }

  render () {
    return(
      <div className="image-list-wrapper">
        <div className="image-list">
          {this.returnImageList()}
        </div>
      </div>
    );
  }
}