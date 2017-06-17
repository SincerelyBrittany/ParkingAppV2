
import { signIn } from '../firebase/auth'
import { signOut } from '../firebase/auth'
import { readAllusers } from '../firebase/auth'
import { addToFirebase } from '../firebase/database'




export function signin(oldStore, options) {
    const {currentUser} = oldStore;
	return signIn()
		.then(res => {
		    const user = res.user.displayName
	        return Object.assign({}, oldStore, {
	            currentUser: user,
	        });
	    });

}


export function signout(oldStore, options) {
	 const {currentUser} = oldStore;
	// console.log(oldStore, "this is the old store")
	return signOut()
		.then(res => {
	        return Object.assign({}, {
	            currentUser: null,
	        });
	    });

}

export function readAllUsers (oldStore, options) {
	
	return readAllusers()
		.then(res => {
	        return Object.assign({}, {



	        });
	    });

}



const getLocationAsPromise = () => {
	return new Promise((resolve, reject) => {
		
		if (!navigator.geolocation) {
			reject();
			return;
		}

		navigator.geolocation.getCurrentPosition(function(position) {
            resolve({
              lat: position.coords.latitude,
              lng: position.coords.longitude
            });
        });

	})

}

export const getLocation = (oldStore, options) => {
	return getLocationAsPromise().then(({lat, lng}) => {
		return Object.assign({}, oldStore, {
			position: {
				lat, lng
			}
		})
	});
}

export const parkingInputs = (oldStore, options) => {
	return Promise.resolve().then(_ => {
		// console.log(options)
		const {carcolor, streetone, streettwo, othernotes} = options;
		console.log(carcolor, streetone, streettwo, othernotes )
		addToFirebase(options)
		return Object.assign({}, oldStore, {
		  textInputs: {
			carcolor, 
			streetone, 
			streettwo,
			othernotes
			}
		});
		// this.bindAsArray(firebase.database().ref('textInputs'), 'data');
	})
}










