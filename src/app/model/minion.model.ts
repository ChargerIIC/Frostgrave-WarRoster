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

    result = result.slice(0, -2);

    if(this.status!= '')
    {
      result+= ' '+this.status;
    }
    return result;
  }
}
