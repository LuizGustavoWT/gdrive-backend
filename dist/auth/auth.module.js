"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./domain/services/auth.service");
const auth_controller_1 = require("./application/controllers/auth.controller");
const IUserRepository_1 = require("../users/infrastructure/interfaces/IUserRepository");
const user_repository_1 = require("../users/infrastructure/repositories/user.repository");
const prisma_module_1 = require("../prisma/prisma.module");
const login_service_1 = require("./domain/services/login.service");
const jwtProvider_module_1 = require("../providers/JWTProvider/jwtProvider.module");
const hashProvider_module_1 = require("../users/providers/hashProvider.module");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        controllers: [auth_controller_1.AuthController],
        providers: [
            auth_service_1.AuthService,
            login_service_1.LoginService,
            { provide: IUserRepository_1.IUserRepository, useClass: user_repository_1.UserRepository },
        ],
        imports: [prisma_module_1.PrismaModule, jwtProvider_module_1.JWTModule, hashProvider_module_1.HashModule],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map