import { Record } from 'pocketbase';

export default class Customer {
    private static store: { [key: string]: Customer } = {};
    private constructor(private customerRecord: Record) {}

    public static fromRecord(record: Record) {
        if (!Customer.store[record.id])
            Customer.store[record.id] = new Customer(record);
        return Customer.store[record.id];
    }

    get name() {
        return this.customerRecord.name;
    }
}
