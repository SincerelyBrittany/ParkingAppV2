import React, { Component } from 'react';

export default class Nav extends Component{

	handleSignIn(e){
		const dispatch = this.props.store.dispatch
		window.location.hash = '/map';
		dispatch('SIGNIN')
	}
	handleSignOut(e){
		const dispatch = this.props.store.dispatch
		dispatch('SIGNOUT')
	}


	render(){
		const currentUser = this.props.store.currentUser
		return(
		   <div>
		   	  <section> 
		   	  		{currentUser}
		   	  </section>
		   	  <section>
			   	  <button className="js_google_signin loginbuttons ui button" onClick={(e) => this.handleSignIn()}>Sign In</button>
	   			  <button className="js_google_signout loginbuttons ui button" onClick={(e) => this.handleSignOut()}>Sign Out</button>
		   	  </section>
		   </div>
		)
	}
} 