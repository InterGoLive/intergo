import {firebaseFirestore} from '../utils/firebase'

export default class FirebaseService {
    static getDataList = (nodePath, callback, size = 10) => {
        let query = firebaseFirestore.ref(nodePath).limitToLast(size);
        query.on('value', dataSnapshot => {
            let items = [];
            dataSnapshot.forEach(childSnapshot => {
                let item = childSnapshot.val();
                item['key'] = childSnapshot.key;
                items.push(item);
            });
            callback(items);
        });

        return query;
    };
}