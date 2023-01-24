export default class DuplicateError extends Error {
    constructor(message: string = 'Duplicate request : aborted') {
        super(message);
        this.name = 'DuplicateError';
    }
}
