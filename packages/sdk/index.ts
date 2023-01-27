import Database from './Database';
import Customers from './Customers';
import Auth from './Auth';
export default class EZBiz {
    private static database = new Database({
        host: 'http://127.0.0.1',
        port: '8090',
    });
    public static auth = new Auth(EZBiz.database);
    public static customers = new Customers(EZBiz.database, EZBiz.auth);
    public static set config(config: { host: string; port: string }) {
        this.database = new Database(config);
        this.auth = new Auth(this.database);
        this.customers = new Customers(this.database, this.auth);
    }
}
