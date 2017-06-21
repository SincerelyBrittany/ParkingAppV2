import {firebaseApp, getCurrentUser} from './auth'


const database = firebaseApp.database();



export const addToFirebase = (data) => {
	getCurrentUser().then(res => {
        const { uid, email, userName} = res
        const { carcolor, streetone, streettwo, othernotes, lat, lng} = data;
        let updates = {};
        updates['/users/' + uid] = Object.assign({}, res, data)
        database.ref().update(updates);
	})
};

export const monitorNewPins = (cb) => {
	database.ref().child('users').on('value', (snap) => {
		if (typeof cb === 'function') {
			cb(snap.val())
		}
	})
}

export const getPins = () => {
    return database.ref().child('users').once('value')
        .then(snap => snap.val())
}




