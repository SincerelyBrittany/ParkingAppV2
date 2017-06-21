
import { signIn } from '../firebase/auth'
import { signOut } from '../firebase/auth'
import {
    addToFirebase,
    getPins,
} from '../firebase/database'




export function signin(oldStore, options) {
    const {currentUser} = oldStore;
	return signIn()
		.then(res => {
		    const user = res.user.displayName
	        return Object.assign({}, oldStore, {
	            currentUser: user,
	            currentUserObj: res.user,
	        });
	    })
        .then(oldStore => {
            return getPins()
                .then(dbData => updatePins(oldStore, dbData))
         })
}


export function signout(oldStore, options) {
	 const {currentUser} = oldStore;
	return signOut()
		.then(res => {
	        return Object.assign({}, {
	            currentUser: null,
	            currentUserObj: {},
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
	

    // we only want to poll currentlocation once, really
    if (options && options.skip) {
        return Promise.resolve(oldStore);
    }

  
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
		const {carcolor, streetone, streettwo, othernotes} = options;
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


export const currentLocation = (oldStore, options) => {
	return Promise.resolve().then(_ => {
		const {lat, lng} = options;
		addToFirebase(options)
		return Object.assign({}, oldStore, {
	       	position: {
		        lat,
		        lng,
	    	},
	    	initialUpdate: false,
		});
	})
}


export const updatePins = (oldStore, options) => {
	return getLocation(oldStore, {
        skip: true 
    }).then(oldStore => {
		const {currentUserObj, currentUser} = oldStore;
		if (currentUser === null) {
			return oldStore;
		}
		const {uid} = currentUserObj;

		const newUserMarkers = Object.keys(options).reduce((_arr, user) => {
			if (options[user].uid === uid) {
				return _arr;
			}

			_arr.push({
				lat: options[user].lat,
				lng: options[user].lng,
			});

			return _arr;
		}, []);


		return Object.assign({}, oldStore, {
			userMarkers: newUserMarkers,
		});
	})
}




