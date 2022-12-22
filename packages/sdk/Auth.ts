import PocketBase from 'pocketbase';
export default class Auth {
    constructor(private pb: PocketBase) {}

    async login(username: string, password: string) {
        const auth = await this.pb
            .collection('users')
            .authWithPassword(username, password);
        return auth.record;
    }

    get isValid() {
        return this.pb.authStore.isValid;
    }

    get token() {
        return this.pb.authStore.token;
    }
}
