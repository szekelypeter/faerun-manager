import { Args, Int, Mutation, Resolver } from "@nestjs/graphql";
import { CharactersService } from "./characters.service";
import { ShortRestResult } from "./dto/character.dto";

@Resolver()
export class CharactersResolver {
  constructor(
    private charactersService: CharactersService,
  ) {}

  @Mutation(returns => Boolean)
  async characterLongRest(@Args('id', { type: () => Int }) id: number) {
    return this.charactersService.longRest(id);
  }

  @Mutation(returns => ShortRestResult)
  async characterShortRest(@Args('id', { type: () => Int }) id: number) {
    return this.charactersService.shortRest(id);
  }
}
