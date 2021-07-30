import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react'

import CurrentLocation from './Map';

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <CurrentLocation centerAroundCurrentLocation google={this.props.google}>
        <Marker onClick={this.onMarkerClick} name={'Embtec Konzultz, @ No 6,Ogunfayo-Eputu Road, Eputu, Lekki-Epe Express Road.'}
         />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </CurrentLocation>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyB9tpb3AqswiBweV_1Fd1yUXD6mU3mJspk'
})(MapContainer);

          <div id="footer">
          <div className="container text-center">
            <p>
               Embtec Konzultz 2015 - 2021 &copy; Continue to {" "}
              <a href="https://embtitcoursesapp.herokuapp.com/" rel="nofollow">
                Embtec Home Page
              </a>
            </p>
          </div>
        </div>
     
     
     
  
    
    