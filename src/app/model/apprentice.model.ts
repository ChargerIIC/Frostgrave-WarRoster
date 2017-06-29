import { Figure } from './figure.model';
import { Mage } from './mage.model';
import { Equipment } from "app/model/equipment.model";

export class Apprentice extends Figure {

  status: string;
  parentRef : Mage;
  items: Equipment[] = [];
  openItemSlots: number;

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
    this.parentRef = wizard;
    this.openItemSlots = 2;
  }

  addItemToInventory(item: Equipment){
    console.log("Adding Item: " + item.name);
    this.items.push(item);
    this.parentRef.gold = this.parentRef.gold - item.cost;
    this.openItemSlots--;
    this.changeStatsOfModel(item, true);
    this.status += ` ${item.name} `;
  }

    changeStatsOfModel(item: Equipment, add: boolean){
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
