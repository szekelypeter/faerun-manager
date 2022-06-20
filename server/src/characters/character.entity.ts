import { FilterableField, IDField, PagingStrategies, QueryOptions, Relation } from '@nestjs-query/query-graphql';
import { SortDirection } from '@nestjs-query/core';
import { GraphQLISODateTime, ID, Int, ObjectType } from '@nestjs/graphql';
import { AllowNull, AutoIncrement, BelongsTo, Column, ForeignKey, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Campaign } from 'src/campaigns/campaign.entity';

@Table
@ObjectType('Character')
@QueryOptions({ pagingStrategy: PagingStrategies.OFFSET, defaultSort: [ { field: 'updatedAt', direction: SortDirection.DESC } ] })
@Relation('campaign', () => Campaign, { disableRemove: true })
export class Character extends Model<Character, Partial<Character>> {
  @PrimaryKey
  @AutoIncrement
  @Column
  @IDField(type => ID)
  id!: number;

  @AllowNull(false)
  @Column
  @FilterableField({ nullable: false })
  name: string;

  @AllowNull(false)
  @Column
  @FilterableField(type => Int, { nullable: false })
  level: number;

  @Column
  @FilterableField({ nullable: true })
  details?: string;

  @ForeignKey(() => Campaign)
  @Column
  @FilterableField()
  campaignId: number;

  @BelongsTo(() => Campaign)
  campaign: Campaign;

  @FilterableField(() => GraphQLISODateTime)
  createdAt!: Date;

  @FilterableField(() => GraphQLISODateTime)
  updatedAt!: Date;
}
