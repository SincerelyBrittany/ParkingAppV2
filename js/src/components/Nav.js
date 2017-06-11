import React, { Component } from 'react';

export default class Nav extends Component{

	handleSignIn(e){
		const dispatch = this.props.store.dispatch
		dispatch('SIGNIN')
	}

	render(){
		const currentUser = this.props.store.currentUser
		return(
		   <div>
		   	  <section> 
		   	  		{currentUser}
		   	  </section>
		   	  <section>
			   	  <button className="js_google_signin" onClick={(e) => this.handleSignIn()}>Sign In</button>
	   			  <button className="js_google_signout">Sign Out</button>
		   	  </section>
		   </div>
		)
	}
} 