import mariadb from 'mariadb';
import dotenv from 'dotenv';

dotenv.config();

const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 3306,
  database: process.env.DB,
  connectionLimit: 10,
  // For easier debugging in development
  // https://github.com/mariadb-corporation/mariadb-connector-nodejs/blob/master/documentation/promise-api.md#enable-trace-option-in-development
  // trace: true,
  // COUNT(*) returns BigInt
  // We shouldn't need such large numbers and they're more annoying to dev for
  // https://github.com/mariadb-corporation/mariadb-connector-nodejs/blob/master/documentation/promise-api.md#migrating-from-2x-or-mysqlmysql2-to-3x
  insertIdAsNumber: true,
  bigIntAsNumber: true,
});

export const executeSql = async <T>(sql: string, params?: any[]): Promise<T[]> => {
  const conn = await pool.getConnection();

  try {
    const rows = await conn.query(sql, params);
    return rows as T[];
  } catch (error: any) {
    console.error(error.message);
    throw error;
  } finally {
    conn.end();
  }
};
