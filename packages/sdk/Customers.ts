import PocketBase from 'pocketbase';
import Customer from './Customer';
export default class Customers {
    constructor(private pb: PocketBase) {}

    async getCustomers() {
        const customers = await this.pb.collection('customers').getFullList();
        return customers.map((c) => Customer.fromRecord(c));
    }
}
