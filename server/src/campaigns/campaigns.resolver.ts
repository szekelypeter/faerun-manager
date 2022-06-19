import { Resolver } from "@nestjs/graphql";
import { CampaignsService } from "./campaigns.service";

@Resolver()
export class CampaignsResolver {
  constructor(
    private CampaignsService: CampaignsService,
  ) {}
}
