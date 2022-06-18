import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Character {
  @Field(type => Int)
  id: number;

  @Field()
  name: string;

  @Field(type => Int)
  level: number;

  @Field()
  details: string;
}
