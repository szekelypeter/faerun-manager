import { FilterableField, IDField } from '@nestjs-query/query-graphql';
import { ID, Int, ObjectType } from '@nestjs/graphql';
import { AllowNull, AutoIncrement, Column, Model, PrimaryKey, Table } from 'sequelize-typescript';

@Table
@ObjectType('Character')
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
}
