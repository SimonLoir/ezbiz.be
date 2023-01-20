import DatabaseRecord from './DatabaseRecord';

export default class CustomerRecord extends DatabaseRecord {
    get name(): string {
        return this.get('name');
    }
    get email(): string {
        return this.get('email');
    }
}
