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
    item.description = "A default fighting weapon for a wizard. Reduces enemy attacks by 1 damage.";
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
    item.description = "A default fighting weapon held in an alterante hand. -1 damage modifier. Stacks with Hand Weapon";
    item.cost = 0;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.id = "W04";
    item.name = "Bow";
    item.bonusType = "Fight";
    item.bonusNum = 0;
    item.description = "24 inch range.";
    item.cost = 0;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.id = "W05";
    item.name = "Crossbow";
    item.bonusType = "Fight";
    item.bonusNum = 0;
    item.description = "24 inch range. +2 damage. Requires an action to reload.";
    item.cost = 0;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.id = "W06";
    item.name = "Two-Handed Weapon";
    item.bonusType = "Fight";
    item.bonusNum = 0;
    item.description = "+2 damage.";
    item.cost = 0;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.id = "P07";
    item.name = "Healing Potion";
    item.bonusType = "Fight";
    item.bonusNum = 0;
    item.description = "Restores up to 5 lost health on use";
    item.cost = 50;
    EquipmentVault.items.push(item);

  }

  static getItemByName(name: string):Equipment{
    var items = EquipmentVault.items.filter(x => x.name == name);
    if(items.length > 0){
      return items[0];
    }
    return null;
  }
}
