"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateListaDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_lista_dto_1 = require("./create-lista.dto");
class UpdateListaDto extends (0, mapped_types_1.PartialType)(create_lista_dto_1.CreateListaDto) {
}
exports.UpdateListaDto = UpdateListaDto;
