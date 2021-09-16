"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_module_1 = require("../prisma/prisma.module");
const users_controller_1 = require("./application/controllers/users.controller");
const createUser_service_1 = require("./domain/services/createUser.service");
const users_service_1 = require("./domain/services/users.service");
const IUserRepository_1 = require("./infrastructure/interfaces/IUserRepository");
const user_repository_1 = require("./infrastructure/repositories/user.repository");
const BCryptHashProvider_1 = require("./providers/implementations/BCryptHashProvider");
const IHashProvider_1 = require("./providers/models/IHashProvider");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    (0, common_1.Module)({
        controllers: [users_controller_1.UsersController],
        providers: [
            users_service_1.UsersService,
            createUser_service_1.CreateUserService,
            {
                provide: IUserRepository_1.IUserRepository,
                useClass: user_repository_1.UserRepository,
            },
            {
                provide: IHashProvider_1.IHashProvider,
                useClass: BCryptHashProvider_1.BCryptHashProvider,
            },
        ],
        imports: [prisma_module_1.PrismaModule],
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map