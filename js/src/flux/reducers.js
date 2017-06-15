
import { signIn } from '../firebase/auth'
import { signOut } from '../firebase/auth'

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
	return signOut()
		.then(res => {
		    const user = "please sign in"
	        return Object.assign({}, oldStore, {
	            currentUser: currentUser,
	        });
	    });

}



const getLocationAsPromise = () => {
	return new Promise((resolve, reject) => {
		console.log('here')
		if (!navigator.geolocation) {
			reject();
			return;
		}

		navigator.geolocation.getCurrentPosition(function(position) {
            console.log(1)
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

