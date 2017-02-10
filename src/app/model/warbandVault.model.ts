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
    minion.health = 8
    minion.cost = 10;
    minion.notes = "Animal, Cannot carry items"
    this.templates.push(minion);

    
    }
}
