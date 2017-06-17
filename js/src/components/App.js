import React, { Component } from 'react';
import Nav from './Nav'
import Map from './Map'
import MessageBox from './MessageBox'

export default class App extends Component {
	componentDidMount() {
		this.props.dispatch('GET_LOCATION')
	}
    render() {
      // console.log(this.props)
        // <Nav store={this.props} />
        //    <br></br>
        //    <Map {...this.props} />
        //    <br></br>
        return (<div>
        <Nav store={this.props} />
           <MessageBox store={this.props}/>
            <br></br>
  			
        </div>);
    }
}
