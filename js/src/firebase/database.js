import {firebaseApp, getCurrentUser} from './auth'


const database = firebaseApp.database();
// console.log(database, "this is the database");


export const addToFirebase = (data) => {
	getCurrentUser().then(res => {
        const { uid, email, userName} = res;
        let updates = {};
        let updates2 = {};
        updates['/users/' + uid] = data;
        updates2['/users/uid' + userName] = res;
        database.ref().update(updates);
         database.ref().update(updates2);


	})
};