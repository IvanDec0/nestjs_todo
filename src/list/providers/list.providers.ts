
import { Connection } from 'mongoose';
import { ListSchema } from '../schema/list.schema';
import { DATABASE_CONNECTION, LIST_MODEL } from 'src/constants/constants';

export const ListProviders = [
  {
    provide: LIST_MODEL,
    useFactory: (connection: Connection) => connection.model('List', ListSchema),
    inject: [DATABASE_CONNECTION],
  },
];
