import { FilterableField, IDField, PagingStrategies, QueryOptions, Relation } from '@nestjs-query/query-graphql';
import { SortDirection } from '@nestjs-query/core';
import { GraphQLISODateTime, ID, Int, ObjectType } from '@nestjs/graphql';
import { AllowNull, AutoIncrement, BelongsTo, Column, ForeignKey, HasOne, Model, PrimaryKey, Sequelize, Table } from 'sequelize-typescript';
import { Campaign } from 'src/campaigns/campaign.entity';
import { DataTypes } from 'sequelize/types';

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
  
  @FilterableField(() => GraphQLISODateTime)
  readonly createdAt!: Date;

  @FilterableField(() => GraphQLISODateTime)
  readonly updatedAt!: Date;
  
  @ForeignKey(() => Campaign)
  @Column
  @FilterableField()
  campaignId: number;

  @BelongsTo(() => Campaign)
  campaign: Campaign;

  @AllowNull(false)
  @Column
  @FilterableField({ nullable: false })
  name: string;

  @Column
  @FilterableField(type => Int)
  level: number;

  @Column
  @FilterableField()
  class: string;

  @Column
  @FilterableField()
  race: string;

  @Column
  @FilterableField(type => Int)
  experiencePoints: number;

  @Column
  @FilterableField()
  background: string;

  @Column
  @FilterableField()
  alignment: string;

  @Column
  @FilterableField(type => Int)
  strengthScore: number;
  
  @Column
  @FilterableField(type => Int)
  dexterityScore: number;
  
  @Column
  @FilterableField(type => Int)
  constitutionScore: number;
  
  @Column
  @FilterableField(type => Int)
  intelligenceScore: number;
  
  @Column
  @FilterableField(type => Int)
  wisdomScore: number;
  
  @Column
  @FilterableField(type => Int)
  charismaScore: number;

  @Column
  @FilterableField(type => Int)
  proficiencyBonus: number;

  @Column
  @FilterableField()
  proficiencies: string;
  
  @Column
  @FilterableField(type => Int)
  hitPointMaximum: number;
  
  @Column
  @FilterableField(type => Int)
  armorClass: number;

  @Column
  @FilterableField(type => Int)
  speed: number;

  @Column
  @FilterableField()
  hitDice: string;

  @Column
  @FilterableField()
  personalityTraits: string;

  @Column
  @FilterableField()
  ideals: string;

  @Column
  @FilterableField()
  bonds: string;

  @Column
  @FilterableField()
  flaws: string;

  @Column
  @FilterableField()
  features: string;

  @Column
  @FilterableField()
  otherProficiencies: string;

  @Column
  @FilterableField()
  languages: string;

  @Column
  @FilterableField()
  equipment: string;

  @Column
  @FilterableField()
  weapons: string;

  @Column
  @FilterableField()
  backstory: string;

  @Column
  @FilterableField()
  spells: string;
}
