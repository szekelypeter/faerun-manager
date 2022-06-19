import { Query, Resolver } from "@nestjs/graphql";
import { Campaign } from "./campaign.entity";
import { CampaignsService } from "./campaigns.service";

@Resolver()
export class CampaignsResolver {
  constructor(
    private CampaignsService: CampaignsService,
  ) {}
}
