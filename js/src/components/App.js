import React, { Component } from 'react';
import Nav from './Nav'
import Map from './Map'
import MessageBox from './MessageBox'

export default class App extends Component {
	componentDidMount() {
		this.props.dispatch('GET_LOCATION')
	}
    render() {
        return (<div>
        	<Nav store={this.props} />
           <br></br>
  			   <Map {...this.props} />
           <br></br>
           <MessageBox />
            <br></br>
  			
        </div>);
    }
}
