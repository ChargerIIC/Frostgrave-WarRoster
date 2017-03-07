import { Figure } from './figure.model';
import { Equipment } from './equipment.model';

export class Minion extends Figure {

  weapon: Equipment;
  heldItem: Equipment;
  otherItems: Equipment[];

  cost: number;
  notes: string;
  status: string;

  constructor(name: string){
    super();
    this.name = name;
    this.otherItems = new Array<Equipment>();
    this.status = '';
  }

  copy(): Minion{
    var copy = new Minion(this.name);
    copy.weapon = this.weapon;
    copy.heldItem = this.heldItem;
    copy.otherItems = this.otherItems;
    copy.cost = this.cost;
    copy.notes = this.notes;
    copy.status = this.status;
    copy.move = this.move;
    copy.fight = this.fight;
    copy.shoot = this.shoot;
    copy.will = this.will;
    copy.armor = this.armor;
    copy.health = this.health;
    return copy;
  }

  getNotes(): string {
    var result = " ";
    if(this.notes != null && this.notes != ""){
      result += this.notes + ", ";
    }
    if(this.heldItem != null){
      result += this.heldItem.name + ", ";
    }
    if(this.otherItems.length > 0){
      for(let itm of this.otherItems){
        if(itm != null){
          result +=  itm.name + ", ";
        }
      }
    }

    return result.slice(0, -2);
  }
}
