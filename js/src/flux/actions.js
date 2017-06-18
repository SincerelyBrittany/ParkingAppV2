import {
	signin,
	signout,
	getLocation,
	parkingInputs,
	currentLocation,
	updatePins,

} from './reducers';

export const actions = {
	'SIGNIN': (oldStore, options) => signin(oldStore, options),
	'SIGNOUT': (oldStore, options) => signout(oldStore, options),
	'GET_LOCATION': (oldStore, options) => getLocation(oldStore, options),
	'PARKING_INPUTS': (oldStore, options) => parkingInputs(oldStore, options),
	'CURRENT_LOCATION': (oldStore, options) => currentLocation(oldStore, options),
	'UPDATE_PINS': (oldStore, options) => updatePins(oldStore, options),
	

}
