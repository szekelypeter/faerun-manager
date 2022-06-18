import { Query, Resolver } from "@nestjs/graphql";
import { Campaign } from "./campaign.model";
import { CampaignsService } from "./campaigns.service";

@Resolver(of => Campaign)
export class CampaignsResolver {
  constructor(
    private CampaignsService: CampaignsService,
  ) {}

  @Query(returns => [Campaign])
  Campaigns(): Promise<Campaign[]> {
    return Promise.resolve([]);
  }
}
