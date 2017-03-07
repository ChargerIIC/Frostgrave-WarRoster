import { Figure } from './figure.model';
import { Mage } from './mage.model';

export class Apprentice extends Figure {

  status: string;

  constructor(wizard: Mage){
    super();

    this.name = 'Apprentice';
    this.move = 6;
    this.fight = Math.max(wizard.fight - 2, 0);
    this.shoot = Math.max(wizard.shoot - 2, 0);
    this.will = wizard.will - 2;
    this.armor = 10;
    this.health = wizard.health - 4;
    this.status = '';
  }

}
