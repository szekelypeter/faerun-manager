import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQuerySequelizeModule } from '@nestjs-query/query-sequelize';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Campaign } from './campaign.entity';
import { CampaignsResolver } from './campaigns.resolver';
import { CampaignsService } from './campaigns.service';

@Module({
  imports: [
    SequelizeModule.forFeature([Campaign]),
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQuerySequelizeModule.forFeature([Campaign])],
      resolvers: [{ DTOClass: Campaign, EntityClass: Campaign }],
    }),
  ],
  providers: [CampaignsResolver, CampaignsService],
})
export class CampaignsModule {}
