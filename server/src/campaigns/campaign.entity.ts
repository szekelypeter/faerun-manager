import { FilterableField, FilterableUnPagedRelation, IDField, PagingStrategies, QueryOptions } from '@nestjs-query/query-graphql';
import { SortDirection } from '@nestjs-query/core';
import { GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';
import { AllowNull, AutoIncrement, Column, HasMany, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Character } from 'src/characters/character.entity';

@Table
@ObjectType('Campaign')
@QueryOptions({ pagingStrategy: PagingStrategies.OFFSET, defaultSort: [ { field: 'updatedAt', direction: SortDirection.DESC } ] })
@FilterableUnPagedRelation('characters', () => Character)
export class Campaign extends Model<Campaign, Partial<Campaign>> {
  @PrimaryKey
  @AutoIncrement
  @Column
  @IDField(type => ID)
  id!: number;

  @AllowNull(false)
  @Column
  @FilterableField({ nullable: false })
  name: string;

  @Column
  @FilterableField({ nullable: true })
  details?: string;

  @HasMany(() => Character)
  characters: [Character];
  
  @FilterableField(() => GraphQLISODateTime)
  createdAt!: Date;

  @FilterableField(() => GraphQLISODateTime)
  updatedAt!: Date;
}
