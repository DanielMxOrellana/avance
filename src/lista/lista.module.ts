import { Module } from '@nestjs/common';
import { ListaService } from './lista.service';
import { ListaController } from './lista.controller';
import { PrismaModule } from '../prisma/prisma.module'; // Cambia 'src' por '..'

@Module({
  imports: [PrismaModule],
  controllers: [ListaController],
  providers: [ListaService],
})
export class ListaModule {}
