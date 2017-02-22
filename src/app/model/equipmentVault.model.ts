import { Equipment } from './equipment.model';

export class EquipmentVault{

  public static items = new Array<Equipment>();

  public static equipmentType: string[] = ['Weapon', 'Item'];

  constructor(){
  }

  static loadEquipmentIntoVault(){
    var item = new Equipment();
    item.name = "Staff";
    item.bonusType = "Fight";
    item.bonusNum = 0;
    item.description = "A default fighting weapon for a wizard. Reduces enemy attacks by 1 damage.";
    item.cost = 0;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Hand Weapon";
    item.bonusType = "Fight";
    item.bonusNum = 1;
    item.description = "A default fighting weapon held in a single hand.";
    item.cost = 0;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Dagger";
    item.bonusType = "Fight";
    item.bonusNum = 1;
    item.description = "A default fighting weapon held in an alterante hand. -1 damage modifier. Stacks with Hand Weapon";
    item.cost = 0;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Bow";
    item.bonusType = "Fight";
    item.bonusNum = 0;
    item.description = "24 inch range.";
    item.cost = 0;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Crossbow";
    item.bonusType = "Fight";
    item.bonusNum = 0;
    item.description = "24 inch range. +2 damage. Requires an action to reload.";
    item.cost = 0;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Two-Handed Weapon";
    item.bonusType = "Fight";
    item.bonusNum = 0;
    item.description = "+2 damage.";
    item.cost = 0;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Healing Potion";
    item.bonusType = "Fight";
    item.bonusNum = 0;
    item.description = "Restores up to 5 lost health on use";
    item.cost = 50;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Strength Potion";
    item.bonusType = "Fight";
    item.bonusNum = 0;
    item.description = "+2 Fight for the rest of the game";
    item.cost = 50;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Toughness Potion";
    item.bonusType = "Fight";
    item.bonusNum = 0;
    item.description = "+1 Armor for the rest of the game";
    item.cost = 50;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Elixer of Speed";
    item.bonusType = "Fight";
    item.bonusNum = 0;
    item.description = "+1 Move for the rest of the game";
    item.cost = 50;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Invisibility Potion";
    item.bonusType = "Fight";
    item.bonusNum = 0;
    item.description = "Same as Invisibility spell, no casting roll required";
    item.cost = 100;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Explosive Cocktail";
    item.bonusType = "Fight";
    item.bonusNum = 0;
    item.description = "Same as Grenade spell, no casting roll required";
    item.cost = 100;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Invulnerability Potion";
    item.bonusType = "Fight";
    item.bonusNum = 0;
    item.description = "Drinker is immune to damage until next turn";
    item.cost = 100;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Teleportation Potion";
    item.bonusType = "Fight";
    item.bonusNum = 0;
    item.description = "Same as Teleport spell, no casting roll required";
    item.cost = 100;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Demon in a Bottle";
    item.bonusType = "Fight";
    item.bonusNum = 0;
    item.description = "Summons a minor demon that binds itslef to the user's warband for a turn";
    item.cost = 200;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Elixer of Life";
    item.bonusType = "Fight";
    item.bonusNum = 0;
    item.description = "Same as Restore Life spell, no casting roll required";
    item.cost = 200;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Magic Hand Weapon";
    item.bonusType = "Fight";
    item.bonusNum = 1;
    item.description = "A fighting weapon held in a single hand.";
    item.cost = 300;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Magic Hand Weapon";
    item.bonusType = "Fight";
    item.bonusNum = 2;
    item.description = "A fighting weapon held in a single hand.";
    item.cost = 500;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Magic Hand Weapon";
    item.bonusType = "Damage";
    item.bonusNum = 2;
    item.description = "A fighting weapon held in a single hand.";
    item.cost = 300;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Magic Two-Handed Weapon";
    item.bonusType = "Fight";
    item.bonusNum = 1;
    item.description = "Two handed blade or axe";
    item.cost = 300;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Magic Two-Handed Weapon";
    item.bonusType = "Damage";
    item.bonusNum = 1;
    item.description = "Two handed blade or axe";
    item.cost = 200;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Magic Two-Handed Weapon";
    item.bonusType = "Damage";
    item.bonusNum = 2;
    item.description = "Two handed blade or axe";
    item.cost = 400;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Magic Bow";
    item.bonusType = "Shoot";
    item.bonusNum = 1;
    item.description = "24 inch range.";
    item.cost = 300;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Magic Bow";
    item.bonusType = "Damage";
    item.bonusNum = 2;
    item.description = "24 inch range.";
    item.cost = 300;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Magic Crossbow";
    item.bonusType = "Shoot";
    item.bonusNum = 1;
    item.description = "24 inch range. +2 damage. Requires an action to reload.";
    item.cost = 0;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Magic Crossbow";
    item.bonusType = "Damage";
    item.bonusNum = 4;
    item.description = "24 inch range. Requires an action to reload.";
    item.cost = 0;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Magic Dagger";
    item.bonusType = "Fight";
    item.bonusNum = 1;
    item.description = "A fighting weapon held in an alterante hand. -1 damage modifier. Stacks with Hand Weapon";
    item.cost = 300;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Magic Dagger";
    item.bonusType = "Damage";
    item.bonusNum = 0;
    item.description = "A fighting weapon held in an alterante hand. no negative damage modifier. Stacks with Hand Weapon";
    item.cost = 200;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Magic Dagger";
    item.bonusType = "Damage";
    item.bonusNum = 1;
    item.description = "A default fighting weapon held in an alterante hand. -1 damage modifier. Stacks with Hand Weapon";
    item.cost = 300;
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
