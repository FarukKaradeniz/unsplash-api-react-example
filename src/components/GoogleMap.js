import React from 'react';
import {Gmaps, Marker} from 'react-gmaps';

const params = {v: '3.exp', key: 'AIzaSyAsNHZgBXAfmQkmaxOARv1rGb9Pa_hjqLg'};
 
export default class GoogleMap extends React.Component {
 onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }

 
  render() {
    return (
      <Gmaps
        width={'100%'}
        height={'200px'}
        lat={this.props.lat}
        lng={this.props.lng}
        zoom={12}
        params={params}>
        <Marker
          lat={this.props.lat}
          lng={this.props.lng} />
      </Gmaps>
    );
  }
 
};