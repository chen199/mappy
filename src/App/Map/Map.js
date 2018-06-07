import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import UserMarker from './UserMarker/UserMarker'
import './Map.css'

//credits- https://hackernoon.com/implement-google-maps-in-reactjs-5bc218074689

const Map = ({users}) => {
    return (
      <div className='google-map' id="map">
        <GoogleMapReact
          defaultCenter={ { lat: 40.7446790, lng: -73.9485420  } }
          defaultZoom={ 3 }>
          {
            users.map(user => <UserMarker key={user._id}
              lat={ user.latitude }
              lng={ user.longitude }
              age={user.age} 
              fname={user.name.first} 
              lname={user.name.last}
              />)
          }
        </GoogleMapReact>
      </div>
    )
}

export default Map