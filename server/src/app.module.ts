import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CharactersModule } from './characters/characters.module';
import { CampaignsModule } from './campaigns/campaigns.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { Character } from './characters/character.entity';

@Module({
  imports: [
    CharactersModule,
    CampaignsModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: true,
      playground: true,
      autoSchemaFile: 'schema.gql',
    }),
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      storage: 'db/database.sqlite',
      database: 'faerun-manager',
      autoLoadModels: true,
      synchronize: true,
    }),
  ],
})
export class AppModule {}
