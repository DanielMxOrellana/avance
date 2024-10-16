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
exports.ListaController = void 0;
const common_1 = require("@nestjs/common");
const lista_service_1 = require("./lista.service");
const create_lista_dto_1 = require("./dto/create-lista.dto");
const update_lista_dto_1 = require("./dto/update-lista.dto");
let ListaController = class ListaController {
    constructor(listaService) {
        this.listaService = listaService;
    }
    create(createListaDto) {
        return this.listaService.create(createListaDto);
    }
    findAllAlive() {
        return this.listaService.findAllAlive();
    }
    findAllExtinct() {
        return this.listaService.findAllExtinct();
    }
    findOne(id) {
        return this.listaService.findOne(+id);
    }
    update(id, updateListaDto) {
        return this.listaService.update(+id, updateListaDto);
    }
    remove(id) {
        return this.listaService.remove(+id);
    }
};
exports.ListaController = ListaController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_lista_dto_1.CreateListaDto]),
    __metadata("design:returntype", void 0)
], ListaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ListaController.prototype, "findAllAlive", null);
__decorate([
    (0, common_1.Get)('extinct'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ListaController.prototype, "findAllExtinct", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ListaController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_lista_dto_1.UpdateListaDto]),
    __metadata("design:returntype", void 0)
], ListaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ListaController.prototype, "remove", null);
exports.ListaController = ListaController = __decorate([
    (0, common_1.Controller)('lista'),
    __metadata("design:paramtypes", [lista_service_1.ListaService])
], ListaController);
