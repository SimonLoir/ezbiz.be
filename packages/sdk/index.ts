import Auth from './Auth';
import Customers from './Customers';
import PocketBase from 'pocketbase';

export default class EZBiz {
    private static db_addr: string = process.env.DB_HOST ?? 'http://127.0.0.1';
    private static db_port: string = process.env.DB_PORT ?? '8090';
    protected static pb = new PocketBase(`${this.db_addr}:${this.db_port}`);
    public static auth = new Auth(this.pb);
    public static customers = new Customers(this.pb);
    public static async info() {
        return (await EZBiz.pb.collection('info').getFullList()).reduce(
            function (acc, { name, value }) {
                return { ...acc, [name]: value };
            },
            {}
        );
    }
}
