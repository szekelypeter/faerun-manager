import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CharacterDTO {
  @Field(type => Int)
  id: number;

  @Field()
  name: string;

  @Field(type => Int)
  level: number;

  @Field({ nullable: true })
  details?: string;
}
