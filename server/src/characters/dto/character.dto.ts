import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ShortRestResult {
  @Field(type => Int)
  healthRestored: number;
}
