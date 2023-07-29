import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        'mongodb+srv://omnistack:gozo1q2w3e@cluster0.z9dk1.mongodb.net/?retryWrites=true&w=majority',
      ),
  },
];
