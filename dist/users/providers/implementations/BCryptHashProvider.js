"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BCryptHashProvider = void 0;
const bcryptjs_1 = require("bcryptjs");
class BCryptHashProvider {
    async generateHash(payload) {
        return (0, bcryptjs_1.hash)(payload, 8);
    }
    async compareHash(payload, hash) {
        return (0, bcryptjs_1.compare)(payload, hash);
    }
}
exports.BCryptHashProvider = BCryptHashProvider;
//# sourceMappingURL=BCryptHashProvider.js.map