import PocketBase, { ClientResponseError, Record } from 'pocketbase';
import CredentialsError from './exceptions/CredentialsError';
import DatabaseRecord from './records/DatabaseRecord';
import UserRecord from './records/UserRecord';
type DatabaseOptions = {
    host: string;
    port: string;
};
export type Type<RecordType> = {
    new (record: Record, database: Database): RecordType;
};

export default class Database {
    private pb: PocketBase;

    constructor(private options: DatabaseOptions) {
        this.pb = new PocketBase(`${options.host}:${options.port}`);
    }

    public async getAll<RecordType extends DatabaseRecord = any>(
        RType: Type<RecordType>,
        collection: string
    ): Promise<RecordType[]> {
        const result = await this.pb.collection(collection).getFullList();
        console.log(result);
        return result.map((record) => new RType(record, this));
    }

    public async get<RecordType extends DatabaseRecord = any>(
        RType: Type<RecordType>,
        collection: string,
        filter: string
    ): Promise<RecordType | null> {
        if (!filter) return null;
        const record = await this.pb
            .collection(collection)
            .getFirstListItem(filter);
        return new RType(record, this);
    }

    public async getOne<RecordType extends DatabaseRecord = any>(
        RType: Type<RecordType>,
        collection: string,
        id: string
    ): Promise<RecordType | null> {
        if (!id) return null;
        const record = await this.pb.collection(collection).getOne(id);
        return new RType(record, this);
    }

    public async loginWithPassword<RecordType extends DatabaseRecord = any>(
        RType: Type<RecordType>,
        collection: string,
        username: string,
        password: string
    ) {
        try {
            const auth = await this.pb
                .collection(collection)
                .authWithPassword(username, password);
            return new RType(auth.record, this);
        } catch (error) {
            if (error instanceof ClientResponseError) {
                if (error.status === 401 || error.status === 400) {
                    throw new CredentialsError('Invalid credentials');
                }
            }
            throw error;
        }
    }

    logout() {
        this.pb.authStore.clear();
    }

    get isValidUser() {
        return this.pb.authStore.isValid;
    }

    get currentUser() {
        const model = this.pb.authStore.model;
        if (
            model &&
            model instanceof Record &&
            model.collectionName === 'users'
        ) {
            return new UserRecord(model, this);
        }
        return null;
    }
}
