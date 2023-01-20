import DatabaseRecord from './DatabaseRecord';
import EnterpriseRecord from './EnterpriseRecord';

export default class UserRecord extends DatabaseRecord {
    get name(): string {
        return this.get('name');
    }
    get email(): string {
        return this.get('email');
    }
    async enterprise(): Promise<EnterpriseRecord | null> {
        return await this.database.getOne(
            EnterpriseRecord,
            'enterprises',
            this.get('enterprise')
        );
    }
}
