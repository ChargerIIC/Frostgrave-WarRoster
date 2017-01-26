import { Spell } from './spell.model';
import { Equipment } from './equipment.model';

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
  openItemSlots: number;
  gold: number;

  spells: Spell[];
  items: Equipment[];

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
    this.openItemSlots = 4;
    this.gold = 500;

    this.spells = new Array<Spell>();
    this.items = new Array<Equipment>();
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
      this.openSpellSlots++;
    }
  }

  addItemToInventory(item: Equipment){
    console.log("Adding Item: " + item.name);
    this.items.push(item);
    this.gold = this.gold - item.cost;
    this.openItemSlots--;
    this.changeStatsOfMage(item, true);
  }

  removeItemFromInventory(item: Equipment){
    console.log("Removing Item: " + item.name);
    var index = this.items.indexOf(item);
    if(index > -1){
      this.items.splice(index,1);
      this.gold = this.gold + item.cost;
      this.openItemSlots++;
    }
  }

  changeStatsOfMage(item: Equipment, add: boolean){
    if(item.bonusType == "Move"){
      if(add){
        this.move += item.bonusNum;
      }
      else{
        this.move -= item.bonusNum;
      }
    }
    else if(item.bonusType == "Fight"){
      if(add){
        this.fight += item.bonusNum;
      }
      else{
        this.fight -= item.bonusNum;
      }
    }
    else if(item.bonusType == "Shoot"){
      if(add){
        this.shoot += item.bonusNum;
      }
      else{
        this.shoot -= item.bonusNum;
      }
    }
    else if(item.bonusType == "Will"){
      if(add){
        this.will += item.bonusNum;
      }
      else{
        this.will -= item.bonusNum;
      }
    }
    else if(item.bonusType == "Armor"){
      if(add){
        this.armor += item.bonusNum;
      }
      else{
        this.armor -= item.bonusNum;
      }

    }
    else if(item.bonusType == "Health"){
      if(add){
        this.health += item.bonusNum;
      }
      else{
        this.health -= item.bonusNum;
      }
    }
  }

}
