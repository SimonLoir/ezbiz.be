import PocketBase, { ClientResponseError, Record } from 'pocketbase';
import CredentialsError from './exceptions/CredentialsError';
import DuplicateError from './exceptions/DuplicateError';
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

    private async exceptionHandler<T>(fn: () => T): Promise<T> {
        try {
            return await fn();
        } catch (error) {
            console.warn('error', error);
            if (error instanceof ClientResponseError) {
                if (error.status === 401 || error.status === 400) {
                    throw new CredentialsError('Invalid credentials');
                }

                if (error.status === 0) {
                    throw new DuplicateError();
                }
            }
            throw error;
        }
    }

    public async getAll<RecordType extends DatabaseRecord = any>(
        RType: Type<RecordType>,
        collection: string
    ): Promise<RecordType[]> {
        return await this.exceptionHandler(async () => {
            const result = await this.pb.collection(collection).getFullList();
            console.log(result);
            return result.map((record) => new RType(record, this));
        });
    }

    public async get<RecordType extends DatabaseRecord = any>(
        RType: Type<RecordType>,
        collection: string,
        filter: string
    ): Promise<RecordType | null> {
        return await this.exceptionHandler(async () => {
            if (!filter) return null;
            const record = await this.pb
                .collection(collection)
                .getFirstListItem(filter);
            return new RType(record, this);
        });
    }

    public async getOne<RecordType extends DatabaseRecord = any>(
        RType: Type<RecordType>,
        collection: string,
        id: string
    ): Promise<RecordType | null> {
        return await this.exceptionHandler(async () => {
            if (!id) return null;
            const record = await this.pb.collection(collection).getOne(id);
            return new RType(record, this);
        });
    }

    public async loginWithPassword<RecordType extends DatabaseRecord = any>(
        RType: Type<RecordType>,
        collection: string,
        username: string,
        password: string
    ) {
        return await this.exceptionHandler(async () => {
            const auth = await this.pb
                .collection(collection)
                .authWithPassword(username, password);
            return new RType(auth.record, this);
        });
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
