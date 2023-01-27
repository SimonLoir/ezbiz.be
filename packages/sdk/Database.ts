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

    /**
     * Logs the user in with their email and password and the collection type
     * @param RType The type of record to return
     * @param collection The collection to log in with
     * @param username The username to log in with
     * @param password The password to log in with
     * @returns A DatabaseRecord if the user is logged in, null otherwise
     */
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

    /**
     * Logs out the current user
     */
    logout() {
        this.pb.authStore.clear();
    }

    /**
     * Gets whether the current user is valid
     */
    get isValidUser() {
        return this.pb.authStore.isValid;
    }

    /**
     * Gets the current user
     * @returns A UserRecord if the user is logged in, null otherwise
     */
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

    /**
     * Creates a new record in the database and returns it
     * @param RType The type of record to create
     * @param data The contents of the record
     * @param collection The collection to create the record in
     * @returns The record that was created
     */
    public async createRecord<RecordType extends DatabaseRecord = any>(
        RType: Type<RecordType>,
        data: any,
        collection: string
    ): Promise<RecordType | null> {
        return await this.exceptionHandler(async () => {
            const record = await this.pb.collection(collection).create(data);
            return new RType(record, this);
        });
    }
}
