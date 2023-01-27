import Database from './Database';
import CustomerRecord from './records/CustomerRecord';
import Auth from './Auth';
export default class Customers {
    constructor(private db: Database, private auth: Auth) {}

    /**
     * Gets all customers for the current enterprise
     * @returns a list of CustomerRecords
     */
    async getAll() {
        return await this.db.getAll(CustomerRecord, 'customers');
    }

    /**
     * Creates a new customer record in the database
     * @param customer The customer record to create
     */
    async create(customer: Partial<CustomerRecord>) {
        const enterprise = await this.auth.user?.enterprise();

        if (!enterprise) throw new Error('No enterprise found');

        const newCustomer = await this.db.createRecord(
            CustomerRecord,
            { ...customer, enterprise: enterprise.id },
            'customers'
        );
    }
}
