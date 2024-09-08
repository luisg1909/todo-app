import { Pool } from 'pg';

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'todoapp',
    password: '123',
    port: 5432, // Default PostgreSQL port
});

pool.connect().then(() => {
    console.log('PostgreSQL connected');
}).catch((err:any) => {
    console.error('PostgreSQL connection error:', err);
});

export default pool;
