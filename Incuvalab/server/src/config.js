import { config } from 'dotenv'
config();
//Variable de Etorno
export default {
    port: process.env.PORT || 4000,
    dbUser: process.env.DB_USER || 'sa',
    dbPort: process.env.DB_PORT || 1433,
    dbPassword: process.env.DB_PASS || '354123',
    dbServer: process.env.DB_SERVER || 'localhost',
    dbDatabase: process.env.DB || 'DBIncuvalab',
}