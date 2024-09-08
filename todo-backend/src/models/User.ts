import pool from '../config/db';
import { v4 as uuidv4 } from 'uuid';

export interface User {
    id: string;
    username: string;
    password: string;
}

export const createUser = async (username: string, password: string): Promise<void> => {
    const id = uuidv4();
    const query = 'INSERT INTO Users (id, username, password) VALUES ($1, $2, $3)';
    await pool.query(query, [id, username, password]);
};

export const findUserByUsername = async (username: string): Promise<User | null> => {
    const query = 'SELECT * FROM Users WHERE username = $1';
    const result = await pool.query(query, [username]);
    return result.rows[0] || null;
};

export const findAllUsers = async (): Promise<User[]> => {
    const query = 'SELECT username FROM Users';
    const result = await pool.query(query);
    return result.rows;
};
