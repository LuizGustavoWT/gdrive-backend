"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashModule = void 0;
const common_1 = require("@nestjs/common");
const BCryptHashProvider_1 = require("./implementations/BCryptHashProvider");
const IHashProvider_1 = require("./models/IHashProvider");
let HashModule = class HashModule {
};
HashModule = __decorate([
    (0, common_1.Module)({
        providers: [{ provide: IHashProvider_1.IHashProvider, useClass: BCryptHashProvider_1.BCryptHashProvider }],
        exports: [{ provide: IHashProvider_1.IHashProvider, useClass: BCryptHashProvider_1.BCryptHashProvider }],
    })
], HashModule);
exports.HashModule = HashModule;
//# sourceMappingURL=hashProvider.module.js.map