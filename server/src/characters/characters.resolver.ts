import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Character } from "./character.model";
import { CharactersService } from "./characters.service";
import { NewCharacterInput } from "./dto/new-character.input";
import { UpdateCharacterInput } from "./dto/update-character.input";

@Resolver(of => Character)
export class CharactersResolver {
  constructor(
    private charactersService: CharactersService,
  ) {}

  @Query(returns => Character)
  character(@Args('id', { type: () => Int }) id: number): Promise<Character> {
    return this.charactersService.findOneById(id);
  }

  @Query(returns => [Character])
  characters(): Promise<Character[]> {
    return this.charactersService.findAll();
  }

  @Mutation(returns => Character)
  async createCharacter(@Args('newCharacterData') newCharacterData: NewCharacterInput): Promise<Character> {
    return this.charactersService.create(newCharacterData);
  }

  @Mutation(returns => Character)
  async updateCharacter(@Args('updateCharacterData') updateCharacterData: UpdateCharacterInput): Promise<Character> {
    const { id } = updateCharacterData;
    return this.charactersService.update(id, updateCharacterData);
  }

  @Mutation(returns => Boolean)
  async removeCharacter(@Args('id', { type: () => Int }) id: number) {
    return this.charactersService.remove(id);
  }
}
