"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FakeJWTProvider = void 0;
class FakeJWTProvider {
    async sign(id) {
        return id;
    }
    async verify(token) {
        return token;
    }
}
exports.FakeJWTProvider = FakeJWTProvider;
//# sourceMappingURL=FakeJWTProvider.js.map