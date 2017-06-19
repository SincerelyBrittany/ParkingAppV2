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

        return (<div>
       		<GMaps apiKey={"AIzaSyBuUWQ06dwV5MUA4T5C77KTsQDqYqf9HIk"} {...GMapsProps}>
       			<Marker {...MarkerProps} key={-1}/>
            {this.props.userMarkers.map(({lat, lng}, i) => <Marker key={`${i}`} position={{lat, lng}} fillColor={'green'}/>)}
       		</GMaps>
        </div>);
    }
}

