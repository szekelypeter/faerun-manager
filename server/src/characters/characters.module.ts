import { Module } from '@nestjs/common';
import { CharactersResolver } from './characters.resolver';
import { CharactersService } from './characters.service';

@Module({
  providers: [CharactersResolver, CharactersService],
})
export class CharactersModule {}
