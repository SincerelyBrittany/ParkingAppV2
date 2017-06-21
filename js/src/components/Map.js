import React, {Component} from 'react';
import GMaps, { Marker } from './GMaps';


const addInfoWindow = (marker, map, props) => {
    console.log(marker, map, props)
    const contentString = '<div id="content">'+
      '<button>Accept</button>'+
      '</div>';
      const infowindow = new google.maps.InfoWindow({
        content: contentString
        });
    infowindow.open(map, marker, this.props.userMarkers);





}

export default class Map extends Component {


    handleCurrentLocation(marker, map){
        const dispatch = this.props.dispatch;
        dispatch('CURRENT_LOCATION', {
          lat: marker.getPosition().lat(),
          lng: marker.getPosition().lng()
        })
    }


    render() {

        const GMapsProps = {
            // center: this.props.position,
            opts: {
                zoom: 15,
                zoomControlOptions:{
                    position: 'LEFT_BOTTOM',
                    style: 'DEFAULT'
                },
                panControlOptions:{
                    position: 'LEFT_BOTTOM',
                }
            }
        };

       


        const MarkerProps = {
            position: this.props.position,
            // animation: 'DROP',
            draggable: true,
            events: {
                'click': (marker, map) => addInfoWindow(marker, map, this.props.userMarkers),
                'dragend': (marker, map) => this.handleCurrentLocation(marker, map),
            }
        };

        GMapsProps.center = this.props.position;
        MarkerProps.animation = 'DROP'

        return (<div>
            <GMaps apiKey={"AIzaSyBuUWQ06dwV5MUA4T5C77KTsQDqYqf9HIk"} {...GMapsProps}>
                <Marker {...MarkerProps} key={-1}/>
                {this.props.userMarkers.map(({lat, lng}, i) => <Marker key={`${i}`} position={{lat, lng}} fillColor={'green'}/>)}
            </GMaps>

        </div>);
    }
}

