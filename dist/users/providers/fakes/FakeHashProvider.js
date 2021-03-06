"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FakeHashProvider = void 0;
class FakeHashProvider {
    async generateHash(payload) {
        return payload;
    }
    async compareHash(payload, hashed) {
        return payload === hashed;
    }
}
exports.FakeHashProvider = FakeHashProvider;
//# sourceMappingURL=FakeHashProvider.js.map