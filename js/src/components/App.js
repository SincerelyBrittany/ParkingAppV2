import React, { Component } from 'react';
// import Router, { Route, Link } from '../router/Router';
import Nav from './Nav';
import Map from './Map';
import MessageBox from './MessageBox';
import {BrowserRouter as Router, Route, BrowswerHistory} from 'react-router-dom'

import {monitorNewPins} from '../firebase/database'

export default class App extends Component {
	componentDidMount() {
		this.props.dispatch('GET_LOCATION')
    // this.props.dispatch('CURRENT_LOCATION')

    monitorNewPins((dbData) => {
      console.log('here')
      this.props.dispatch('UPDATE_PINS', dbData)
    });
	}

    render() {
      
        return (
          <Router>
          <div>
      
          <Nav store={this.props}/>
            <br></br>
        <Map {...this.props} />
             <br></br>
             <MessageBox store={this.props}/>
            <br></br>
            
          
  			
        </div>
        </Router>
        );
    }
}




       