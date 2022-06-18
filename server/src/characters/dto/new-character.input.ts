import { Field, InputType, Int } from '@nestjs/graphql';
import { IsOptional, MaxLength } from 'class-validator';

@InputType()
export class NewCharacterInput {
  @Field()
  @MaxLength(50)
  name: string;

  @Field(type => Int)
  level: number;

  @Field({ nullable: true })
  @IsOptional()
  details: string;
}
