import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CharacterDTO } from "./character.model";
import { CharactersService } from "./characters.service";
import { NewCharacterInput } from "./dto/new-character.input";
import { UpdateCharacterInput } from "./dto/update-character.input";

@Resolver()
export class CharactersResolver {
  constructor(
    private charactersService: CharactersService,
  ) {}

  @Query(returns => CharacterDTO)
  character(@Args('id', { type: () => Int }) id: number): Promise<CharacterDTO> {
    return this.charactersService.findOneById(id);
  }

  @Query(returns => [CharacterDTO])
  characters(): Promise<CharacterDTO[]> {
    return this.charactersService.findAll();
  }

  @Mutation(returns => CharacterDTO)
  async createCharacter(@Args('newCharacterData') newCharacterData: NewCharacterInput): Promise<CharacterDTO> {
    return this.charactersService.create(newCharacterData);
  }

  @Mutation(returns => Boolean)
  async updateCharacter(@Args('updateCharacterData') updateCharacterData: UpdateCharacterInput): Promise<Boolean> {
    const { id } = updateCharacterData;
    return this.charactersService.update(id, updateCharacterData);
  }

  @Mutation(returns => Boolean)
  async removeCharacter(@Args('id', { type: () => Int }) id: number) {
    return this.charactersService.remove(id);
  }
}
