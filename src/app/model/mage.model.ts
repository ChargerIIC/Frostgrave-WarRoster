import { Spell } from './spell.model';

export class Mage {

  name: string;
  school: string;
  level: number;

  move: number;
  fight: number;
  shoot: number;
  armor: number;
  health: number;
  openSpellSlots: number;

  spells: Spell[];

  constructor(){
    //Defaults
    this.name = "Name";
    this.school = "Elementalist";
    this.level = 1;
    this.move = 6;
    this.fight = 1;
    this.shoot = 0;
    this.armor = 10;
    this.health = 14;
    this.openSpellSlots = 8;

    this.spells = new Array<Spell>();
  }

}
