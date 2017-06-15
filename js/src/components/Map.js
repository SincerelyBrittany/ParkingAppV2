import React, {Component} from 'react';
import GMaps, { Marker } from './GMaps';

export default class Map extends Component {
    render() {
    	const GMapsProps = {
    		center: this.props.position,
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
    		animation: 'DROP',
    		draggable: true,
    		events: {
    			'click': (marker, map) => console.log('lol you clicked the map', marker, map),
    			'dragend': (marker, map) => {
    				console.log("drag",marker.getPosition()),

                    console.log("lat",marker.getPosition().lat().toFixed(8));
                    console.log("lng",marker.getPosition().lng().toFixed(8));
    			}
    		}
    	};

        return (<div>
       		<GMaps apiKey={"AIzaSyBuUWQ06dwV5MUA4T5C77KTsQDqYqf9HIk"} {...GMapsProps}>
       			<Marker {...MarkerProps} />
       		</GMaps>
        </div>);
    }
}

