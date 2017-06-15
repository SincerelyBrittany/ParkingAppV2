import React, { Component } from 'react';

export default class Nav extends Component{

	handleSignIn(e){
		const dispatch = this.props.store.dispatch
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
			   	  <button className="js_google_signin" onClick={(e) => this.handleSignIn()}>Sign In</button>
	   			  <button className="js_google_signout" onClick={(e) => this.handleSignOut()}>Sign Out</button>
		   	  </section>
		   </div>
		)
	}
} 