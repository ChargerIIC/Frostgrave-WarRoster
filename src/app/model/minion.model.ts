import { Figure } from './figure.model';
import { Equipment } from './equipment.model';

export class Minion extends Figure {

  weapon: Equipment;
  heldItem: Equipment;
  otherItems: Equipment[];

  cost: number;
  notes: string;

  constructor(name: string){
    super();
    this.name = name;
    this.otherItems = new Array<Equipment>()
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
