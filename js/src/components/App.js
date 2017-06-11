import React, { Component } from 'react';
import Nav from './Nav'
import Map from './Map'

export default class App extends Component {
	componentDidMount() {
		this.props.dispatch('GET_LOCATION')
	}
    render() {
        return (<div>
        	<Nav store={this.props} />
  			<Map {...this.props} />
        </div>);
    }
}
