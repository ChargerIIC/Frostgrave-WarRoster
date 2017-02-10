import { Figure } from './figure.model';
import { Equipment } from './equipment.model';

export class Minion extends Figure {

  weapon: Equipment;
  heldItem: Equipment;

  cost: number;
  notes: string;

  constructor(name: string){
    super();
    this.name = name;
  }
}
