/* loadUsers.js
import { getRealm } from '../Databases/RealmApp';
import datas2 from '../Back/Contatos/Data2';

export const loadUsers = async () => {
    const realm = await getRealm();
    realm.write(() => {
        datas2.forEach(user => {
            realm.create('User', user, Realm.UpdateMode.Modified);
        });
    });
};
*/