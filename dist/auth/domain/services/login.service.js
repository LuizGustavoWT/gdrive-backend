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
exports.LoginService = void 0;
const common_1 = require("@nestjs/common");
const IHashProvider_1 = require("../../../users/providers/models/IHashProvider");
const IUserRepository_1 = require("../../../users/infrastructure/interfaces/IUserRepository");
const IJWTProvider_1 = require("../../../providers/JWTProvider/models/IJWTProvider");
let LoginService = class LoginService {
    constructor(userRepository, hashProvider, jwtProvider) {
        this.userRepository = userRepository;
        this.hashProvider = hashProvider;
        this.jwtProvider = jwtProvider;
    }
    async execute(dto) {
        const userFound = await this.userRepository.findByUsername(dto.username);
        if (!userFound) {
            throw new common_1.HttpException('User or passwor does not match', 401);
        }
        const isValid = await this.hashProvider.compareHash(dto.password, userFound.password);
        if (!isValid) {
            throw new common_1.HttpException('User or passwor does not match', 401);
        }
        const token = await this.jwtProvider.sign(userFound.id);
        return { token };
    }
};
LoginService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(IUserRepository_1.IUserRepository)),
    __param(1, (0, common_1.Inject)(IHashProvider_1.IHashProvider)),
    __param(2, (0, common_1.Inject)(IJWTProvider_1.IJWTProvider)),
    __metadata("design:paramtypes", [IUserRepository_1.IUserRepository,
        IHashProvider_1.IHashProvider,
        IJWTProvider_1.IJWTProvider])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map