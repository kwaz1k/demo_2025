import { Client } from 'pg';

export default async () => {
  const client = new Client({
    user: 'postgres',
    password: 'gugugaga666',
    host: 'localhost',
    port: '5433',
    database: 'postgres',
  });

  await client.connect();
  return client;
};
