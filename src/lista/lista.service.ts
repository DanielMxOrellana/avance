import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateListaDto } from './dto/create-lista.dto';
import { UpdateListaDto } from './dto/update-lista.dto';

@Injectable()
export class ListaService {
  constructor(private prisma: PrismaService) {}

  async create(createListaDto: CreateListaDto) {
    return this.prisma.lista.create({
      data: createListaDto,
    });
  }

  async findAllAlive() {
    return this.prisma.lista.findMany({
      where: { isAlive: true },
    });
  }

  async findAllExtinct() {
    return this.prisma.lista.findMany({
      where: { isAlive: false },
    });
  }

  async findOne(id: number) {
    return this.prisma.lista.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateListaDto: UpdateListaDto) {
    return this.prisma.lista.update({
      where: { id },
      data: updateListaDto,
    });
  }

  async remove(id: number) {
    return this.prisma.lista.delete({
      where: { id },
    });
  }
}
