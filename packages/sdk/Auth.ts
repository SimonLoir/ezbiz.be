import Database from './Database';
import UserRecord from './records/UserRecord';
export default class Auth {
    private currentUser: UserRecord | null = null;
    constructor(private db: Database) {
        this.currentUser = db.currentUser;
    }

    public async login(username: string, password: string) {
        this.currentUser = await this.db.loginWithPassword(
            UserRecord,
            'users',
            username,
            password
        );
        return this.currentUser;
    }

    public logout() {
        this.db.logout();
        this.currentUser = null;
    }

    public get isValid() {
        return this.db.isValidUser;
    }

    public async updateUser(cb: () => void) {
        if (this.currentUser) {
            try {
                await this.currentUser.updateRecord(UserRecord);
                cb();
            } catch (error) {}
        }
    }
}
