import { Injectable } from "@nestjs/common";
import { Character } from "./character.model";
import { NewCharacterInput } from "./dto/new-character.input";
import { UpdateCharacterInput } from "./dto/update-character.input";

@Injectable()
export class CharactersService {
  async create(data: NewCharacterInput): Promise<Character> {
    return { id: 1, name: data.name, level: data.level, details: data.details };
  }

  async findOneById(id: number): Promise<Character> {
    return { id: id, name: "Geltara", level: 9, details: "Kalashtar Bard" };
  }

  async findAll(): Promise<Character[]> {
    return [{ id: 1, name: "Geltara", level: 9, details: "Kalashtar Bard" },
            { id: 2, name: "Geltara", level: 9, details: "Kalashtar Bard" }];
  }

  async update(id: number, data: UpdateCharacterInput): Promise<Character> {
    return data;
  }

  async remove(id: number): Promise<boolean> {
    return true;
  }
}
