import sql from 'mssql';
import config from '../../config'
const dbSettings = {
    user: config.dbUser,
    password: config.dbPassword,
    database: config.dbDatabase,
    server: config.dbServer,
    options: {
        encrypt: false,
        trustServerCertificate: true,
    },
};

export async function getConnection() {
    try {
        const pool = await sql.connect(dbSettings);
        return pool;
    } catch (e) {
        console.log(e.message);
    }
}

export { sql };