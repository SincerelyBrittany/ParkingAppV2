import React, { Component } from 'react';
import Router, { Route, Link } from '../router/Router';
import Nav from './Nav';
import Map from './Map';
import MessageBox from './MessageBox';
// import {BrowserRouter as Router, Route, BrowswerHistory} from 'react-router-dom'

import {monitorNewPins} from '../firebase/database'

export default class App extends Component {
	componentDidMount() {
		this.props.dispatch('GET_LOCATION')
    // this.props.dispatch('CURRENT_LOCATION')

    monitorNewPins((dbData) => {
      this.props.dispatch('UPDATE_PINS', dbData)
    });
	}

  render() {
    const {currentRoute} = this.props;
    console.log(currentRoute)
    return <div>
      <Nav store={this.props}/>

      <Link route="/map" {...this.props} >Map</Link>
      <Link route="/message" {...this.props}>Messagebox</Link>

      <Router currentRoute={currentRoute} dispatch={this.props.dispatch}>
        <Route url="/map">
            <Map {...this.props} />
        </Route>
        <Route url="/message">
           <MessageBox store={this.props}/>
        </Route>
      </Router>
    </div>;
  }
}


/*

          
            <br></br>
        <Map {...this.props} />
             <br></br>
             
            <br></br>

*/



       