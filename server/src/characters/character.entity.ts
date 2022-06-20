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
  createdAt!: Date;

  @FilterableField(() => GraphQLISODateTime)
  updatedAt!: Date;
  
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
  @FilterableField(type => Int, { nullable: true })
  level: number;

  @Column
  @FilterableField({ nullable: true })
  class: string;

  @Column
  @FilterableField({ nullable: true })
  race: string;

  @Column
  @FilterableField(type => Int, { nullable: true })
  experiencePoints: number;

  @Column
  @FilterableField({ nullable: true })
  background: string;

  @Column
  @FilterableField({ nullable: true })
  alignment: string;

  @Column
  @FilterableField(type => Int, { nullable: true })
  strengthScore: number;
  
  @Column
  @FilterableField(type => Int, { nullable: true })
  dexterityScore: number;
  
  @Column
  @FilterableField(type => Int, { nullable: true })
  constitutionScore: number;
  
  @Column
  @FilterableField(type => Int, { nullable: true })
  intelligenceScore: number;
  
  @Column
  @FilterableField(type => Int, { nullable: true })
  wisdomScore: number;
  
  @Column
  @FilterableField(type => Int, { nullable: true })
  charismaScore: number;

  @Column
  @FilterableField(type => Int, { nullable: true })
  proficiencyBonus: number;

  @Column
  @FilterableField({ nullable: true })
  proficiencies: string;
  
  @Column
  @FilterableField(type => Int, { nullable: true })
  hitPointMaximum: number;
  
  @Column
  @FilterableField(type => Int, { nullable: true })
  armorClass: number;

  @Column
  @FilterableField(type => Int, { nullable: true })
  speed: number;

  @Column
  @FilterableField({ nullable: true })
  hitDice: string;

  @Column
  @FilterableField({ nullable: true })
  personalityTraits: string;

  @Column
  @FilterableField({ nullable: true })
  ideals: string;

  @Column
  @FilterableField({ nullable: true })
  bonds: string;

  @Column
  @FilterableField({ nullable: true })
  flaws: string;

  @Column
  @FilterableField({ nullable: true })
  features: string;

  @Column
  @FilterableField({ nullable: true })
  otherProficiencies: string;

  @Column
  @FilterableField({ nullable: true })
  languages: string;

  @Column
  @FilterableField({ nullable: true })
  equipment: string;

  @Column
  @FilterableField({ nullable: true })
  weapons: string;

  @Column
  @FilterableField({ nullable: true })
  backstory!: string;

  @Column
  @FilterableField({ nullable: true })
  spells: string;
}
