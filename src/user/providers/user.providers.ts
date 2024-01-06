
import { Connection } from 'mongoose';
import { UserSchema } from '../schema/user.schema';
import { DATABASE_CONNECTION, USER_MODEL } from 'src/constants/constants';

export const UserProviders = [
  {
    provide: USER_MODEL,
    useFactory: (connection: Connection) => connection.model('User', UserSchema),
    inject: [DATABASE_CONNECTION],
  },
];
