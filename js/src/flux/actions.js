import {
	signin,
	signout,
	getLocation,
	parkingInputs,

} from './reducers';

export const actions = {
	'SIGNIN': (oldStore, options) => signin(oldStore, options),
	'SIGNOUT': (oldStore, options) => signout(oldStore, options),
	'GET_LOCATION': (oldStore, options) => getLocation(oldStore, options),
	'PARKING_INPUTS': (oldStore, options) => parkingInputs(oldStore, options),

}
