import { Spell } from './spell.model';

export class Mage {

  name: string;
  school: string;
  level: number;

  move: number;
  fight: number;
  shoot: number;
  will: number;
  armor: number;
  health: number;

  openSpellSlots: number;
  gold: number;

  spells: Spell[];

  constructor(){
    //Defaults
    this.name = "Name";
    this.school = "Elementalist";
    this.level = 1;
    this.move = 6;
    this.fight = 1;
    this.shoot = 0;
    this.will = 4;
    this.armor = 10;
    this.health = 14;
    this.openSpellSlots = 8;
    this.gold = 500;

    this.spells = new Array<Spell>();
  }

  addSpellToCollection(spell: Spell){
    console.log("Adding Spell: " + spell.name);
    this.spells.push(spell);
    this.openSpellSlots--;
  }

  removeSpellFromCollection(spell: Spell){
    console.log("Removing Spell: " + spell.name);
    var index = this.spells.indexOf(spell);
    if(index > -1){
      this.spells.splice(index,1);
    }
    this.openSpellSlots++;
  }
}
