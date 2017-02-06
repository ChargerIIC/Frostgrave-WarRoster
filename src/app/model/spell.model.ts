import { School } from './school.model';

export class Spell{
  name:string;
  description:string;
  school: School;
  castingNumber: number;
  range: string;
}
