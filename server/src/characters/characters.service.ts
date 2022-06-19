import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Character } from "./character.entity";
import { ShortRestResult } from "./dto/character.dto";

@Injectable()
export class CharactersService {
  constructor(@InjectModel(Character) private characterModel: typeof Character) {}

  async longRest(id: number): Promise<boolean> {
    return true;
  }

  async shortRest(id: number): Promise<ShortRestResult> {
    return { healthRestored: Math.ceil(Math.random() * 6) + Math.ceil(Math.random() * 6) };
  }
}
