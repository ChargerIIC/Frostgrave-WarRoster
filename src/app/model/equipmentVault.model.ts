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

    item = new Equipment();
    item.id = "P08";
    item.name = "Strength Potion";
    item.bonusType = "Fight";
    item.bonusNum = 0;
    item.description = "+2 Fight for the rest of the game";
    item.cost = 50;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.id = "P09";
    item.name = "Toughness Potion";
    item.bonusType = "Fight";
    item.bonusNum = 0;
    item.description = "+1 Armor for the rest of the game";
    item.cost = 50;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.id = "P10";
    item.name = "Elixer of Speed";
    item.bonusType = "Fight";
    item.bonusNum = 0;
    item.description = "+1 Move for the rest of the game";
    item.cost = 50;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.id = "P11";
    item.name = "Invisibility Potion";
    item.bonusType = "Fight";
    item.bonusNum = 0;
    item.description = "Same as Invisibility spell, no casting roll required";
    item.cost = 100;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.id = "P12";
    item.name = "Explosive Cocktail";
    item.bonusType = "Fight";
    item.bonusNum = 0;
    item.description = "Same as Grenade spell, no casting roll required";
    item.cost = 100;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.id = "P13";
    item.name = "Invulnerability Potion";
    item.bonusType = "Fight";
    item.bonusNum = 0;
    item.description = "Drinker is immune to damage until next turn";
    item.cost = 100;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.id = "P14";
    item.name = "Teleportation Potion";
    item.bonusType = "Fight";
    item.bonusNum = 0;
    item.description = "Same as Teleport spell, no casting roll required";
    item.cost = 100;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.id = "P15";
    item.name = "Demon in a Bottle";
    item.bonusType = "Fight";
    item.bonusNum = 0;
    item.description = "Summons a minor demon that binds itslef to the user's warband for a turn";
    item.cost = 200;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.id = "P16";
    item.name = "Elixer of Life";
    item.bonusType = "Fight";
    item.bonusNum = 0;
    item.description = "Same as Restore Life spell, no casting roll required";
    item.cost = 200;
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
