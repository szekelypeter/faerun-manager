import { Query, Resolver } from "@nestjs/graphql";
import { Character } from "./character.model";
import { CharactersService } from "./characters.service";

@Resolver(of => Character)
export class CharacterResolver {
  constructor(
    private charactersService: CharactersService,
  ) {}

  @Query(returns => [Character])
  characters(): Promise<Character[]> {
    return Promise.resolve([]);
  }
}
