import { EquipmentVault } from './equipmentVault.model';
import { Minion } from './minion.model';

///This is a repo class for the various minions that can be hired for a warband.
export class WarbandVault {

  public static templates = new Array<Minion>();


  constructor(){
  }

  static loadMinionTemplatesIntoVault(){

    var minion = new Minion('War Dog');
    minion.move = 8;
    minion.fight = 1;
    minion.shoot = 0;
    minion.armor = 10;
    minion.will = 2;
    minion.health = 8;
    minion.cost = 10;
    minion.notes = "Animal, Cannot carry items"
    this.templates.push(minion);

    minion = new Minion('Thug');
    minion.move = 6;
    minion.fight = 2;
    minion.shoot = 0;
    minion.armor = 10;
    minion.will = -1;
    minion.health = 10;
    minion.cost = 20;
    minion.notes = ""
    minion.heldItem = EquipmentVault.getItemByName('Hand Weapon');
    this.templates.push(minion);

    minion = new Minion('Thief');
    minion.move = 7;
    minion.fight = 1;
    minion.shoot = 0;
    minion.armor = 10;
    minion.will = 0;
    minion.health = 10;
    minion.cost = 20;
    minion.notes = ""
    minion.heldItem = EquipmentVault.getItemByName('Dagger');
    this.templates.push(minion);
    }
}
