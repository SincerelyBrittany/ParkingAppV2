import React, {Component} from 'react';
import GMaps, { Marker } from './GMaps';



export default class Map extends Component {


    handleCurrentLocation(marker, map){
        const dispatch = this.props.dispatch;
        // console.log(this.props.dispatch, "this is store");
        // const lat = marker.getPosition().lat().toFixed(8);
        // const lng = marker.getPosition().lng().toFixed(8);
        dispatch('CURRENT_LOCATION', {
          lat: marker.getPosition().lat(),
          lng: marker.getPosition().lng()
        })
    }


    render() {
      // console.log(this.props.position)
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

        const contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
      'sandstone rock formation in the southern part of the '+
      'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
      'south west of the nearest large town, Alice Springs; 450&#160;km '+
      '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
      'features of the Uluru - Kata Tjuta National Park. Uluru is '+
      'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
      'Aboriginal people of the area. It has many springs, waterholes, '+
      'rock caves and ancient paintings. Uluru is listed as a World '+
      'Heritage Site.</p>'+
      '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
      'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
      '(last visited June 22, 2009).</p>'+
      '</div>'+
      '</div>';

        const infowindow = InfoWindow => ({
    content: contentString
  });



        const MarkerProps = {
            position: this.props.position,
            // animation: 'DROP',
            draggable: true,
            events: {
                'click': (marker, map) => infowindow(marker,map),
                'dragend': (marker, map) => this.handleCurrentLocation(marker, map),
            }
        };

        GMapsProps.center = this.props.position;
        MarkerProps.animation = 'CLICK', 'DROP'

        return (<div>
            <GMaps apiKey={"AIzaSyBuUWQ06dwV5MUA4T5C77KTsQDqYqf9HIk"} {...GMapsProps}>
                <Marker {...MarkerProps} key={-1}/>
            {this.props.userMarkers.map(({lat, lng}, i) => <Marker key={`${i}`} position={{lat, lng}} fillColor={'green'}/>)}
            </GMaps>
        </div>);
    }
}

