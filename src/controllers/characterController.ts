import { Request, Response } from 'express';
import { executeSql } from '../db/db';
import * as SQL from '../db/queries/characterQueries';
import { CharacterBasic } from '../models/characterModels';

export class CharacterController {
  // Get Basic Info
  public async getBasicInfo(req: Request, res: Response): Promise<void> {
    const characterName: string = req.params.characterName;
    try {
      const characterInfo = await executeSql<CharacterBasic>(SQL.onlineCharacter, [characterName]);
      if (characterInfo[0] === undefined) {
        res.status(404).send(`${characterName} not found`);
      } else {
        res.status(200).json(characterInfo[0]);
      }
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  }

  public async getOnlinecharacters(req: Request, res: Response): Promise<void> {
    try {
      const characterInfo = await executeSql<CharacterBasic[]>(SQL.onlineCharacters);
      if (characterInfo[0] === undefined) {
        res.status(404).send(`Nothing Found`);
      } else {
        res.status(200).json(characterInfo);
      }
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  }
}
