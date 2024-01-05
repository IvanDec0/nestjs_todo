
import * as mongoose from 'mongoose';
import { DATABASE_CONNECTION, MONGO_URI } from 'src/constants/constants';

export const databaseProviders = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: async (): Promise<typeof mongoose> => {
      try {
        const connection = await mongoose.connect(MONGO_URI, { family: 4 });
        console.log('Connected to the database');
        return connection;
      } catch (error) {
        console.error('Error connecting to the database:', error);
        throw error;
      }
    },
  },
];
