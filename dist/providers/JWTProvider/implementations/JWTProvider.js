"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWTProvider = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
class JWTProvider {
    async sign(id) {
        return (0, jsonwebtoken_1.sign)({}, process.env.JWT_SECRET, { subject: id, expiresIn: '1h' });
    }
    async verify(token) {
        return (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET);
    }
}
exports.JWTProvider = JWTProvider;
//# sourceMappingURL=JWTProvider.js.map