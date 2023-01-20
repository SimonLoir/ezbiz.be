import Database from './Database';
import Customers from './Customers';
import Auth from './Auth';
export default class EZBiz {
    private static database = new Database({
        host: process.env.DB_HOST ?? 'http://127.0.0.1',
        port: process.env.DB_PORT ?? '8090',
    });
    public static auth = new Auth(EZBiz.database);
    public static customers = new Customers(EZBiz.database);
}
