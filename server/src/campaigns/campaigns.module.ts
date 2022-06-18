import { Module } from '@nestjs/common';
import { CampaignsResolver } from './campaigns.resolver';
import { CampaignsService } from './campaigns.service';

@Module({
  providers: [CampaignsResolver, CampaignsService],
})
export class CampaignsModule {}
