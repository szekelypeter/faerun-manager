import { FilterableCursorConnection, FilterableField, FilterableUnPagedRelation, IDField, Relation } from '@nestjs-query/query-graphql';
import { ID, ObjectType } from '@nestjs/graphql';
import { AllowNull, AutoIncrement, Column, HasMany, Model, PrimaryKey, Table } from 'sequelize-typescript';
import { Character } from 'src/characters/character.entity';

@Table
@ObjectType('Campaign')
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
}
