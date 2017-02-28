import { Figure } from './figure.model';
import { SlotDictionary } from '../interfaces/dictionary.model';
import { HomeBaseVault } from './homebaseVault.model';
import { SpellBook } from './spellbook.model';
import { Spell } from './spell.model';
import { School } from './school.model';
import { Equipment } from './equipment.model';
import { Apprentice } from './apprentice.model';
import { Minion } from './minion.model';
import { HomeBase } from './homebase.model';

export class Mage extends Figure {

  name: string;
  school: School;
  level: number;
  levelUpPoints: number;

  move: number;
  fight: number;
  shoot: number;
  will: number;
  armor: number;
  health: number;

  spellSlotsAvailable: SlotDictionary;

  openItemSlots: number;
  gold: number;

  spells: Spell[];
  items: Equipment[];
  apprentice: Apprentice;
  warbandMembers: Minion[];
  base: HomeBase;

  constructor(){
    super();
    //Defaults
    this.name = "Enter Name";
    this.school = SpellBook.schools[0];
    this.resetMage(true);
    this.openItemSlots = 4;
  }

  //Resets any school related data, including level
  resetMage(fullReset: boolean){
    this.level = 0;
    this.levelUpPoints = 0;
    this.move = 6;
    this.fight = 0;
    this.shoot = 0;
    this.will = 4;
    this.armor = 10;
    this.health = 14;
    this.spells = new Array<Spell>();
    for(var kvp in this.spellSlotsAvailable){
      this.spellSlotsAvailable[kvp] = 0;
    }
    this.initializeSpellSlots(this.school);

    if(fullReset){
      this.gold = 500;
      this.items = new Array<Equipment>();
      this.warbandMembers = new Array<Minion>();
      this.apprentice = null;
      this.base = HomeBaseVault.baseOptions[0];
    }
  }

  initializeSpellSlots(school: School){
    if(school.name == 'Chronomancer'){
      this.spellSlotsAvailable = { "Any":0 , "Chronomancer":3, "Necromancer":1, "Soothsayer":1, "Illusionist":1, "Neutral":2};
    }
    else if(school.name == 'Illusionist'){
      this.spellSlotsAvailable = { "Any":0 , "Illusionist":3, "Chronomancer":1, "Summoner":1, "Elementalist":1, "Neutral":2};
    }
    else if(school.name == 'Enchanter'){
      this.spellSlotsAvailable = { "Any":0 , "Enchanter":3, "Witch":1, "Sigilist":1, "Elementalist":1, "Neutral":2};
    }
    else if(school.name == 'Elementalist'){
      this.spellSlotsAvailable = { "Any":0 , "Elementalist":3, "Summoner":1, "Enchanter":1, "Chronomancer":1, "Neutral":2};
    }
    else if(school.name == 'Necromancer'){
      this.spellSlotsAvailable = { "Any":0 , "Necromancer":3, "Witch":1, "Chronomancer":1, "Summoner":1, "Neutral":2};
    }
    else if(school.name == 'Sigilist'){
      this.spellSlotsAvailable = { "Any":0 , "Sigilist":3, "Thaumaturge":1, "Illusionist":1, "Enchanter":1, "Neutral":2};
    }
    else if(school.name == 'Soothsayer'){
      this.spellSlotsAvailable = { "Any":0 , "Soothsayer":3, "Thaumaturge":1, "Chronomancer":1, "Illusionist":1, "Neutral":2};
    }
    else if(school.name == 'Summoner'){
      this.spellSlotsAvailable = { "Any":0 , "Summoner":3, "Necromancer":1, "Witch":1, "Elementalist":1, "Neutral":2};
    }
    else if(school.name == 'Thaumaturge'){
      this.spellSlotsAvailable = { "Any":0 , "Thaumaturge":3, "Soothsayer":1, "Sigilist":1, "Illusionist":1, "Neutral":2};
    }
    else if(school.name == 'Witch'){
      this.spellSlotsAvailable = { "Any":0 , "Witch":3, "Enchanter":1, "Necromancer":1, "Summoner":1, "Neutral":2};
    }
  }

  addSpellToCollection(spell: Spell){
    console.log("Adding Spell: " + spell.name);
    this.spells.push(spell);
    this.removeSpellSlot(spell);
    }

  removeSpellFromCollection(spell: Spell){
    console.log("Removing Spell: " + spell.name);
    var index = this.spells.indexOf(spell);
    if(index > -1){
      this.spells.splice(index,1);
    this.removeSpellSlot(spell);
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
      this.changeStatsOfMage(item, false);
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

  removeSpellSlot(spell: Spell): boolean {
    if(this.spellSlotsAvailable[spell.school.name] > -1){
      this.spellSlotsAvailable[spell.school.name]--;
      return true;
    }
    else if(this.spellSlotsAvailable['Neutral'] > 0 && this.school.neutral.indexOf(spell.school) > 0){
      this.spellSlotsAvailable['Neutral']--;
      return true;
    }
    console.log('unable to remove spell slot: ' + spell.name);
    return false;
  }
}
