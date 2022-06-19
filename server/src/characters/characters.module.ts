import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Character } from './character.entity';
import { CharactersResolver } from './characters.resolver';
import { CharactersService } from './characters.service';

@Module({
  imports: [SequelizeModule.forFeature([Character])],
  providers: [CharactersResolver, CharactersService],
})
export class CharactersModule {}
