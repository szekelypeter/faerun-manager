import { FilterableField, IDField } from '@nestjs-query/query-graphql';
import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType('Character')
export class CharacterDTO {
  @IDField(type => ID)
  id!: number;

  @FilterableField()
  name!: string;

  @FilterableField(type => Int)
  level!: number;

  @FilterableField({ nullable: true })
  details?: string;
}
