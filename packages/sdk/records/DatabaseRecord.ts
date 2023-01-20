import { Record } from 'pocketbase';
import Database from '../Database';

export default abstract class DatabaseRecord {
    constructor(private record: Record, protected database: Database) {}

    public get(key: string) {
        return this.record[key];
    }
}
