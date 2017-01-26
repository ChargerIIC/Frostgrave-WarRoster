import { Equipment } from './equipment.model';

export class EquipmentVault{

  public static items = new Array<Equipment>();

  public static equipmentType: string[] = ['Weapon', 'Item'];

  constructor(){
  }

  static loadEquipmentIntoVault(){
    var item = new Equipment();
    item.id = "W01";
    item.name = "Staff";
    item.bonusType = "Fight";
    item.bonusNum = 0;
    item.description = "A default fighting weapon for a wizard. No bonus for equipping";
    item.cost = 0;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.id = "W02";
    item.name = "Hand Weapon";
    item.bonusType = "Fight";
    item.bonusNum = 1;
    item.description = "A default fighting weapon held in a single hand.";
    item.cost = 0;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.id = "W03";
    item.name = "Dagger";
    item.bonusType = "Fight";
    item.bonusNum = 1;
    item.description = "A default fighting weapon held in an alterante hand. Stacks with Hand Weapon";
    item.cost = 0;
    EquipmentVault.items.push(item);
  }
}
