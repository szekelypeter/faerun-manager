import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Character } from "./character.entity";
import { CharacterDTO } from "./character.model";
import { NewCharacterInput } from "./dto/new-character.input";
import { UpdateCharacterInput } from "./dto/update-character.input";

@Injectable()
export class CharactersService {
  constructor(@InjectModel(Character) private characterModel: typeof Character) {}
  
  async create(data: NewCharacterInput): Promise<CharacterDTO> {
    return this.characterModel.create({ ...data });
  }

  async findOneById(id: number): Promise<CharacterDTO> {
    return this.characterModel.findByPk(id);
  }

  async findAll(): Promise<CharacterDTO[]> {
    return this.characterModel.findAll();
  }

  async update(id: number, data: UpdateCharacterInput): Promise<boolean> {
    return (await this.characterModel.update(data, { where: { id }})[0] === 1);
  }

  async remove(id: number): Promise<boolean> {
    return (await this.characterModel.destroy({ where: { id }}) === 1);
  }
}
