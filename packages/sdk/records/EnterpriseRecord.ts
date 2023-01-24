import DatabaseRecord from './DatabaseRecord';

export default class EnterpriseRecord extends DatabaseRecord {
    get name() {
        return this.get('name');
    }

    get vat_number() {
        return this.get('vat_number');
    }

    get type() {
        return this.get('type');
    }
}
