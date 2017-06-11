import {
	signin,
	getLocation,
} from './reducers';

export const actions = {
	'SIGNIN': (oldStore, options) => signin(oldStore, options),
	'GET_LOCATION': (oldStore, options) => getLocation(oldStore, options)
}
