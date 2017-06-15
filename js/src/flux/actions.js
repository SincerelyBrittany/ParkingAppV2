import {
	signin,
	signout,
	getLocation,
} from './reducers';

export const actions = {
	'SIGNIN': (oldStore, options) => signin(oldStore, options),
	'SIGNOUT': (oldStore, options) => signout(oldStore, options),
	'GET_LOCATION': (oldStore, options) => getLocation(oldStore, options)
}
