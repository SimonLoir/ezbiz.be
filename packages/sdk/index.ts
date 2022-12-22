import Auth from './Auth';
import Customers from './Customers';
import PocketBase from 'pocketbase';

const pb = new PocketBase('http://127.0.0.1:8090');

export default class EZBiz {
    public static auth = new Auth(pb);
    public static customers = new Customers(pb);
}
