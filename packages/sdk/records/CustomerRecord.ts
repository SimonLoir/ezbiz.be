import DatabaseRecord from './DatabaseRecord';

export default class CustomerRecord extends DatabaseRecord {
    get name(): string {
        return this.get('name');
    }
    get email(): string {
        return this.get('email');
    }
    get phone_number(): string {
        return this.get('phone_number');
    }

    get address(): string {
        return this.get('address');
    }

    get vat_number(): string {
        return this.get('vat_number');
    }
}
