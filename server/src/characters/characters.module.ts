import { Module } from '@nestjs/common';
import { CharacterResolver } from './character.resolver';
import { CharactersService } from './characters.service';

@Module({
  providers: [CharacterResolver, CharactersService],
})
export class CharactersModule {}
