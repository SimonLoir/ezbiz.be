import DatabaseRecord from './DatabaseRecord';

export default class EnterpriseRecord extends DatabaseRecord {
    get name() {
        return this.get('name');
    }
}
