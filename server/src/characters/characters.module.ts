import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQuerySequelizeModule } from '@nestjs-query/query-sequelize';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Character } from './character.entity';
import { CharacterDTO } from './character.model';
import { CharactersResolver } from './characters.resolver';
import { CharactersService } from './characters.service';

@Module({
  imports: [
    SequelizeModule.forFeature([Character]),
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQuerySequelizeModule.forFeature([Character])],
      resolvers: [{ DTOClass: CharacterDTO, EntityClass: Character }],
    }),
  ],
  // providers: [CharactersResolver, CharactersService],
})
export class CharactersModule {}
