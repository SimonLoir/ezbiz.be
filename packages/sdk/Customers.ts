import Database from './Database';
import CustomerRecord from './records/CustomerRecord';

export default class Customers {
    constructor(private db: Database) {}
    async getAll() {
        return await this.db.getAll(CustomerRecord, 'customers');
    }
}
