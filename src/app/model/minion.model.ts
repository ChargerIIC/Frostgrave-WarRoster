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
    var result = this.notes;
    if(this.heldItem != null){
      result += " " + this.heldItem;
    }
    for(var itm in this.otherItems){
      result += " " + itm;
    }
    return result;
  }
}
