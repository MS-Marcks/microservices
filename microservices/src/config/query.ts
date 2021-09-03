'use strict';

import Connect from './db';
import mysql from 'promise-mysql'

const query = async (sp, body = null) => {
    try {
        const connection = await mysql.createConnection(Connect);
        try {
            await connection.beginTransaction();
            const query = (body === null) ? await connection.query(sp) : await connection.query(sp, body);
            await connection.commit(); await connection.end();
            return { code: 200, query: query };
        } catch (err) {
            await connection.rollback(); await connection.end();
            return { code: 404, err: err };
        }
    } catch (err) {
        return { code: 404, err: err };
    }
}

export default query;