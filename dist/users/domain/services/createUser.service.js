"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserService = void 0;
const common_1 = require("@nestjs/common");
const IHashProvider_1 = require("../../providers/models/IHashProvider");
const IUserRepository_1 = require("../../infrastructure/interfaces/IUserRepository");
let CreateUserService = class CreateUserService {
    constructor(userRepository, hashProvider) {
        this.userRepository = userRepository;
        this.hashProvider = hashProvider;
    }
    async execute(dto) {
        const user = await this.userRepository.findByUsername(dto.username);
        if (user) {
            throw new common_1.HttpException('User already exists', 400);
        }
        const insertUser = Object.assign(Object.assign({}, dto), { password: await this.hashProvider.generateHash(dto.password) });
        const newUser = await this.userRepository.create(insertUser);
        return newUser;
    }
};
CreateUserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(IUserRepository_1.IUserRepository)),
    __param(1, (0, common_1.Inject)(IHashProvider_1.IHashProvider)),
    __metadata("design:paramtypes", [IUserRepository_1.IUserRepository,
        IHashProvider_1.IHashProvider])
], CreateUserService);
exports.CreateUserService = CreateUserService;
//# sourceMappingURL=createUser.service.js.map