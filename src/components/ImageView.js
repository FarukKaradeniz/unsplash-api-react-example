import React from 'react';
import Axios from 'axios';

import '../resources/styles/ImageView.css';

import Detail from './Detail';

export default class ImageView extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  loadDetail = (id) => {
    Axios({
      method: 'get',
      url: `https://api.unsplash.com/photos/${id}`,
      params: {
        client_id: '4207199fdd3a75e974b6da10050b17abb8eb576fbeb023de2486ea4c1c42313e', //2.hesap
        // client_id: 'c6247455a0aefef5dcb6858a1e1e49df53c4260a8b27b1dd27b5be0ffedcf2f6',
      },
    }).then(response => {
      let loc = false;
      if (!!response.data.location) {
        if (!!response.data.location.position) {
          loc = response.data.location.position;
        }
        
      }
      this.setState({
        rawImage: response.data.urls.raw,
        smallImage: response.data.urls.regular,
        user: {
          name: response.data.user.name,
          username: response.data.user.username,
          image: response.data.user.profile_image.medium,
        },
        location: loc,
        searched: true,
      });
    }).catch(e => console.log(e));
  }

  //burada iskeleti güncelemme yap
  getImage = () => {
    let newHeight = (300 * this.props.view.height) / this.props.view.width;
    let style = {'height' : `${newHeight}px`};
    return(
      <React.Fragment>
        <a href={`#${this.props.view.id}`} onLoad={() => this.loadDetail(this.props.view.id)}>
          <img src={this.props.view.url} style={style} key={this.props.view.url} alt="Yükleniyor"/>
        </a>
        {this.state.searched && 
          <Detail location={this.state.location} id={this.props.view.id} smallImage={this.state.smallImage} rawImage={this.state.rawImage} user={this.state.user} />
        }
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