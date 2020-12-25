import firestore from '@react-native-firebase/firestore';
import {User, UserUuid} from '../model';

const USER_COLLECTION = 'users';

const db = firestore();
const usersTable = db.collection(USER_COLLECTION);

export const fetchUser = async (uuid: UserUuid): Promise<User> => {
  const doc = usersTable.doc(uuid);
  const result = await doc.get();
  if (result.exists) {
    return result.data() as User;
  } else {
    throw Error('new user');
  }
};

export const storeUser = async (user: User): Promise<void> => {
  const doc = usersTable.doc(user.uuid);
  return doc.set(user);
};
