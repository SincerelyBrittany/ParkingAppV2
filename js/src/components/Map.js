import React, {Component} from 'react';
import GMaps, { Marker } from './GMaps';



window.__obj = {};
__obj.myFunction = () => {
    // alert('hello, wrold!')
    // console.log("this is marker", this.props)



    window.location = "https://tlk.io/ParkingAPp";

}

const addInfoWindow = (marker, map, props) => {
    const myFunction = () => {
    console.log("here")
}
    console.log(marker,"this is marker")
    const contentString = '<div id="content">'+
      '<button onClick="__obj.myFunction()">Accept This Parking Spot</button>'+

      '</div>';
      const infowindow = new google.maps.InfoWindow({
        content: contentString
        });
    infowindow.open(map, marker);
}





export default class Map extends Component {
//     function myFunction() {
//   infowindow.setContent('<div style="background-color: green">' + infowindow.getContent() + "</div>");
// }

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

         const greenMarkerProps = {
            events: {
                'click': (marker, map) => addInfoWindow(marker, map), 
                
            }
        };

            const MarkerProps = {
            position: this.props.position,
            // animation: 'DROP',
            draggable: true,
            events: {
                'click': (marker, map) => console.log('lol you clicked the map', marker, map),
                'dragend': (marker, map) => this.handleCurrentLocation(marker, map),
            }
        };

        GMapsProps.center = this.props.position;
        MarkerProps.animation = 'DROP'
        console.log('position',this.props.position)
        return (<div>
            <GMaps apiKey={"AIzaSyBuUWQ06dwV5MUA4T5C77KTsQDqYqf9HIk"} {...GMapsProps}>
                <Marker {...MarkerProps} key={-1}/>
            {this.props.userMarkers.map(({lat, lng}, i) => <Marker key={`${i}`} position={{lat, lng}} {...greenMarkerProps} fillColor={'green'}/>)}
            </GMaps>
        </div>);
    }
}

