import { Record } from 'pocketbase';
import Database, { Type } from '../Database';

export default abstract class DatabaseRecord {
    constructor(private record: Record, protected database: Database) {}

    protected get(key: string) {
        return this.record[key];
    }

    public async updateRecord(type: Type<DatabaseRecord>) {
        const updatedRecord = await this.database.getOne(
            type,
            this.record.collectionName,
            this.get('id')
        );
        if (updatedRecord)
            this.record.load(updatedRecord?.record ?? this.record);
    }

    public get id() {
        return this.get('id');
    }
}
