import PocketBase, { ClientResponseError } from 'pocketbase';
import CredentialsError from './exceptions/CredentialsError';
export default class Auth {
    constructor(private pb: PocketBase) {}

    async login(username: string, password: string) {
        try {
            const auth = await this.pb
                .collection('users')
                .authWithPassword(username, password);
            return auth.record;
        } catch (error) {
            if (error instanceof ClientResponseError) {
                if (error.status === 401 || error.status === 400) {
                    throw new CredentialsError('Invalid credentials');
                }
            }
        }
    }

    logout() {
        this.pb.authStore.clear();
    }

    get isValid() {
        return this.pb.authStore.isValid;
    }

    get token() {
        return this.pb.authStore.token;
    }
}
