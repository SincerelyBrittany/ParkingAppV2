import {firebaseApp, getCurrentUser} from './auth'


const database = firebaseApp.database();
// console.log(database, "this is the database");


export const addToFirebase = (data) => {
	getCurrentUser().then(res => {
        const { uid, email, userName} = res
        const { carcolor, streetone, streettwo, othernotes, lat, lng} = data;
        console.log(data)
        let updates = {};
        updates['/users/' + uid] = Object.assign({}, res, data)
        database.ref().update(updates);
	})
};

export const monitorNewPins = (cb) => {
	database.ref().child('users').on('value', (snap) => {
		console.log(snap.val())
		if (typeof cb === 'function') {
			cb(snap.val())
		}
	})
}

export const getPins = () => {
    return database.ref().child('users').once('value')
        .then(snap => snap.val())
}




