"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FakeUserRepository = void 0;
class FakeUserRepository {
    constructor() {
        this.users = [];
    }
    async findByUsername(username) {
        const user = this.users.find((user) => user.username === username);
        return user;
    }
    async findById(id) {
        const user = this.users.find((user) => user.id === id);
        return user;
    }
    async create(user) {
        user.id =
            this.users.length > 0
                ? String(this.users[this.users.length - 1].id + 1)
                : '1';
        this.users.push(user);
        return user;
    }
}
exports.FakeUserRepository = FakeUserRepository;
//# sourceMappingURL=fakeUser.repository.js.map