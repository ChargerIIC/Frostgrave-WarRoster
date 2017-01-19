import { SchoolOfMagic } from './school.model';

export class Mage {

  name: string;
  school: SchoolOfMagic;

  move: number;
  fight: number;
  shoot: number;
  armor: number;
  health: number;

  constructor(){
    this.name = "Name";
    this.school = SchoolOfMagic.Elementalist;
  }



}
