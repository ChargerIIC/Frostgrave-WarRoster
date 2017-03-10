import { Equipment } from './equipment.model';
import { SpellBook } from './spellbook.model';

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
    item.name = "Magic Hand Weapon (Fight+1)";
    item.bonusType = "Fight";
    item.bonusNum = 1;
    item.description = "A fighting weapon held in a single hand.";
    item.cost = 300;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Magic Hand Weapon (Fight+2)";
    item.bonusType = "Fight";
    item.bonusNum = 2;
    item.description = "A fighting weapon held in a single hand.";
    item.cost = 500;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Magic Hand Weapon (Damage+2)";
    item.bonusType = "Damage";
    item.bonusNum = 2;
    item.description = "A fighting weapon held in a single hand.";
    item.cost = 300;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Magic Two-Handed Weapon (Fight+1)";
    item.bonusType = "Fight";
    item.bonusNum = 1;
    item.description = "Two handed blade or axe";
    item.cost = 300;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Magic Two-Handed Weapon (Damage+1)";
    item.bonusType = "Damage";
    item.bonusNum = 1;
    item.description = "Two handed blade or axe";
    item.cost = 200;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Magic Two-Handed Weapon (Damage+2)";
    item.bonusType = "Damage";
    item.bonusNum = 2;
    item.description = "Two handed blade or axe";
    item.cost = 400;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Magic Bow (Shoot+1)";
    item.bonusType = "Shoot";
    item.bonusNum = 1;
    item.description = "24 inch range.";
    item.cost = 300;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Magic Bow (Damage+2)";
    item.bonusType = "Damage";
    item.bonusNum = 2;
    item.description = "24 inch range.";
    item.cost = 300;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Magic Crossbow (Shoot+1)";
    item.bonusType = "Shoot";
    item.bonusNum = 1;
    item.description = "24 inch range. +2 damage. Requires an action to reload.";
    item.cost = 0;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Magic Crossbow (Damage+2)";
    item.bonusType = "Damage";
    item.bonusNum = 4;
    item.description = "24 inch range. Requires an action to reload.";
    item.cost = 0;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Magic Dagger (Fight+1)";
    item.bonusType = "Fight";
    item.bonusNum = 1;
    item.description = "A fighting weapon held in an alternate hand. -1 damage modifier. Stacks with Hand Weapon";
    item.cost = 300;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Magic Dagger (Damage+1)";
    item.bonusType = "Damage";
    item.bonusNum = 0;
    item.description = "A fighting weapon held in an alternate hand. no negative damage modifier. Stacks with Hand Weapon";
    item.cost = 200;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Magic Dagger (Damage+2)";
    item.bonusType = "Damage";
    item.bonusNum = 1;
    item.description = "A default fighting weapon held in an alternate hand. -1 damage modifier. Stacks with Hand Weapon";
    item.cost = 300;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Magic Leather Armor (Armor+1)";
    item.bonusType = "Armor";
    item.bonusNum = 1;
    item.description = "Leather fighting armor.";
    item.cost = 300;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Magic Mail Armor (Armor+1)";
    item.bonusType = "Armor";
    item.bonusNum = 1;
    item.description = "Chainmail fighting armor.";
    item.cost = 400;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Ring of Protection (Armor+1)";
    item.bonusType = "Armor";
    item.bonusNum = 1;
    item.description = "A simple ring that extends protection when used.";
    item.cost = 400;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Cloak of Protection (Armor+1)";
    item.bonusType = "Armor";
    item.bonusNum = 1;
    item.description = "A magic cloak that extends protection when struck at.";
    item.cost = 400;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Magic Staff (Fight+1)";
    item.bonusType = "Fight";
    item.bonusNum = 1;
    item.description = "A magic fighting weapon for a wizard. Reduces enemy attacks by 1 damage.";
    item.cost = 200;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Magic Staff (Damage+2)";
    item.bonusType = "Damage";
    item.bonusNum = 2;
    item.description = "A magic fighting weapon for a wizard. Reduces enemy attacks by 1 damage.";
    item.cost = 200;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Magic Shield (Armor+1)";
    item.bonusType = "Armor";
    item.bonusNum = 1;
    item.description = "A magic shield reinforced by magic enchantment.";
    item.cost = 400;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Staff of Power (1)";
    item.bonusType = "";
    item.bonusNum = 0;
    item.description = "This item gives the user 1 point that can be spent to augment a casting roll instead of spending health.";
    item.cost = 200;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Staff of Power (2)";
    item.bonusType = "";
    item.bonusNum = 0;
    item.description = "This item gives the user 2 points that can be spent to augment a casting roll instead of spending health.";
    item.cost = 350;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Staff of Power (3)";
    item.bonusType = "";
    item.bonusNum = 0;
    item.description = "This item gives the user 3 points that can be spent to augment a casting roll instead of spending health.";
    item.cost = 500;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Ring of Power (1)";
    item.bonusType = "";
    item.bonusNum = 0;
    item.description = "This item gives the user 1 point that can be spent to augment a casting roll instead of spending health.";
    item.cost = 200;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Orb of Power (8)";
    item.bonusType = "";
    item.bonusNum = 0;
    item.description = "This item gives the user 8 points that can be spent to augment a casting roll instead of spending health.";
    item.cost = 350;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Staff of Casting (1)";
    item.bonusType = "";
    item.bonusNum = 0;
    item.description = "When found or purchased, roll on the random spell table. When used, this staff will give +2 to the casting rolls for that spells. Reduces damage from enemy melee attacks by one.";
    item.cost = 600;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Boots of Speed";
    item.bonusType = "Move";
    item.bonusNum = 1;
    item.description = "Makes the user faster during movement";
    item.cost = 300;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Ring of Slow Fall";
    item.bonusType = "";
    item.bonusNum = 0;
    item.description = "The bearer of the ring will not suffer damage from falling.";
    item.cost = 200;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Ring of Will";
    item.bonusType = "Will";
    item.bonusNum = 1;
    item.description = "The bearer of the ring gains +1 Will.";
    item.cost = 300;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Ring of Teleportation";
    item.bonusType = "";
    item.bonusNum = 0;
    item.description = "Once per game, the bearer may teleport up to 8 inches from their current location at the cost of an action.";
    item.cost = 300;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Gloves of Strength";
    item.bonusType = "";
    item.bonusNum = 0;
    item.description = "The bearer gains +2 damage to all melee attacks";
    item.cost = 300;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Robes of Arrow Turning";
    item.bonusType = "";
    item.bonusNum = 0;
    item.description = "The bearer gains +4 against all bow and crossbow attacks, magical or otherwise.";
    item.cost = 500;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Amulet of Resistance";
    item.bonusType = "";
    item.bonusNum = 0;
    item.description = "Once per game, the wielder may add a +4 to thier will roll to resist a spell. This ability can be activated after the roll is made.";
    item.cost = 300;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Candle of Summoning";
    item.bonusType = "";
    item.bonusNum = 0;
    item.description = "The bearer gains +1 to rolls made for the  Summon Demon spell";
    item.cost = 200;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Gloves of Casting";
    item.bonusType = "";
    item.bonusNum = 0;
    item.description = "Once per game, the bearer can use the gloves to game +5 to a casting roll. The ability must be used before the casting roll is made.";
    item.cost = 300;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Belt of Animal Repellence";
    item.bonusType = "";
    item.bonusNum = 0;
    item.description = "All animals must make a will roll against a target number of 14 to come within 3 inches of the bearer.";
    item.cost = 200;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Horn of Destruction";
    item.bonusType = "";
    item.bonusNum = 0;
    item.description = "Once per game, the bearer may use an activation to use the horn. The horn's effect is the same as the Crumble Spell.";
    item.cost = 300;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Fate Stone";
    item.bonusType = "";
    item.bonusNum = 0;
    item.description = "Once per game, the bearer of the stone may re-roll any one die roll. Either the orignal or the new roll may be taken as the result.";
    item.cost = 300;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Drinking Horn of Healing";
    item.bonusType = "";
    item.bonusNum = 0;
    item.description = "The bearer can spend an action to gain 2 health. This can be done any number of times during a game.";
    item.cost = 250;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = "Banner of Courage";
    item.bonusType = "";
    item.bonusNum = 0;
    item.description = "Everyone in the wizard's warband within 12 inches and in line of sight of the bearer gains +1 to all Will rolls. The bearer may not cast spells.";
    item.cost = 300;
    EquipmentVault.items.push(item);

    item = new Equipment();
    item.name = 'Gold';
    item.bonusType = 'Gold';
    item.bonusNum = 0;
    EquipmentVault.items.push(item);
  }

  static getItemByName(name: string):Equipment{
    var items = EquipmentVault.items.filter(x => x.name == name);
    if(items.length > 0){
      return items[0];
    }
    return null;
  }

  static getPotionFromTreasure(): Equipment{
    var roll = Math.floor(Math.random() * 20) + 1;
    if(roll <= 4){
      return EquipmentVault.getItemByName('Healing Potion');
    }
    else if(roll <= 6){
      return EquipmentVault.getItemByName('Strength Potion');
    }
    else if(roll <= 8){
      return EquipmentVault.getItemByName('Toughness Potion');
    }
    else if(roll <= 10){
      return EquipmentVault.getItemByName('Elixer of Speed');
    }
    else if(roll <= 12){
      return EquipmentVault.getItemByName('Invisibility Potion');
    }
    else if(roll <= 14){
      return EquipmentVault.getItemByName('Explosive Cocktail');
    }
    else if(roll <= 16){
      return EquipmentVault.getItemByName('Invulnerability Potion'); 
    }
    else if(roll <= 18){
      return EquipmentVault.getItemByName('Teleportation Potion');
    }
    else if(roll == 19){
      return EquipmentVault.getItemByName('Demon in a Bottle');
    }
    else if(roll == 20){
      return EquipmentVault.getItemByName('Elixer of Life');
    }
  }

  static getMagicEquipmentFromTreasure(): Equipment{
      //roll 1d20
      var roll = Math.floor(Math.random() * 20) + 1;

      switch (roll) {
        case 1:
        return EquipmentVault.getItemByName('Magic Hand Weapon (Fight+1)');
        case 2:
        return EquipmentVault.getItemByName('Magic Hand Weapon (Fight+2)');
        case 3:
        return EquipmentVault.getItemByName('Magic Hand Weapon (Damage+2)');
        case 4:
        return EquipmentVault.getItemByName('Magic Two-Handed Weapon (Fight+1)');
        case 5:
        return EquipmentVault.getItemByName('Magic Two-Handed Weapon (Damage+1)');
        case 6:
        return EquipmentVault.getItemByName('Magic Two-Handed Weapon (Damage+2)');
        case 7:
        return EquipmentVault.getItemByName('Magic Bow (Shoot+1)');
        case 8:
        return EquipmentVault.getItemByName('Magic Bow (Damage+2)');
        case 9:
        return EquipmentVault.getItemByName('Magic Crossbow (Shoot+1)');
        case 10:
        return EquipmentVault.getItemByName('Magic Crossbow (Damage+2)');
        case 11:
        return EquipmentVault.getItemByName('Magic Dagger (Fight+1)');
        case 12:
        return EquipmentVault.getItemByName('Magic Dagger (Damage+1)');
        case 13:
        return EquipmentVault.getItemByName('Magic Dagger (Damage+2)');
        case 14:
        return EquipmentVault.getItemByName('Magic Leather Armor (Armor+1)');
        case 15:
        return EquipmentVault.getItemByName('Magic Mail Armor (Armor+1)');
        case 16:
        return EquipmentVault.getItemByName('Ring of Protection');
        case 17:
        return EquipmentVault.getItemByName('Cloak of Protection');
        case 18:
        return EquipmentVault.getItemByName('Magic Staff (Fight+1)');
        case 19:
        return EquipmentVault.getItemByName('Magic Staff (Damage+2)');
        case 20:
        return EquipmentVault.getItemByName('Magic Shield (Armor+1)');
      }
  }

  static getMagicItemsFromTreasure(): Equipment{
      //roll 1d20
      var roll = Math.floor(Math.random() * 20) + 1;
      switch (roll) {
        case 1:
        return EquipmentVault.getItemByName('Staff of Power (1)');
        case 2:
        return EquipmentVault.getItemByName('Staff of Power (2)');
        case 3:
        return EquipmentVault.getItemByName('Staff of Power (3)');
        case 4:
        return EquipmentVault.getItemByName('Ring of Power (1)');
        case 5:
        return EquipmentVault.getItemByName('Orb of Power(8)');
        case 6:
        return EquipmentVault.getItemByName('Staff of Casting');
        case 7:
        return EquipmentVault.getItemByName('Boots of Speed');
        case 8:
        return EquipmentVault.getItemByName('Ring of Slow Fail');
        case 9:
        return EquipmentVault.getItemByName('Ring of Will');
        case 10:
        return EquipmentVault.getItemByName('Ring of Teleportation');
        case 11:
        return EquipmentVault.getItemByName('Gloves of Strength');
        case 12:
        return EquipmentVault.getItemByName('Robes of Arrow Turning');
        case 13:
        return EquipmentVault.getItemByName('Amulet of Resistance');
        case 14:
        return EquipmentVault.getItemByName('Candle of Summoning');
        case 15:
        return EquipmentVault.getItemByName('Gloves of Casting');
        case 16:
        return EquipmentVault.getItemByName('Belt of Animal Repellence');
        case 17:
        return EquipmentVault.getItemByName('Horn of Destruction');
        case 18:
        return EquipmentVault.getItemByName('Fate Stone');
        case 19:
        return EquipmentVault.getItemByName('Drinking Horn of Healing');
        case 20:
        return EquipmentVault.getItemByName('Banner of Courage');
      }

  }

  static getRandomSpellItem(type: string): Equipment{
    var spellItem = new Equipment();
    spellItem.name = '('+type+') - ' + spellItem.name;
    spellItem.description = '('+type+') - ' + spellItem.description;
    return spellItem;
  }

  static getItemsFromTreasure() : Array<Equipment>{
      //roll 1d20
      var roll = Math.floor(Math.random() * 20) + 1;
      var goldPouch = EquipmentVault.getItemByName('Gold');
      var results = new Array<Equipment>();
      switch (roll) {
        case 1:
          var roll2 = (Math.floor(Math.random() * 20) + 1);
          goldPouch.bonusNum = roll2 * 10;
          results.push(goldPouch);
        break;
        case 2:
          var roll2 = (Math.floor(Math.random() * 20) + 1);
          goldPouch.bonusNum = roll2 * 20;
          results.push(goldPouch);
        break;
        case 3:
          var roll2 = (Math.floor(Math.random() * 20) + 1);
          goldPouch.bonusNum = roll2 * 25;
          results.push(goldPouch);
        break;
        case 4:
          var potion = EquipmentVault.getPotionFromTreasure();
          results.push(potion);
          potion = EquipmentVault.getPotionFromTreasure();
          results.push(potion);
          potion = EquipmentVault.getPotionFromTreasure();
          results.push(potion);
          goldPouch.bonusNum = 30;
          results.push(goldPouch);
        break;
        case 5:
          var potion = EquipmentVault.getPotionFromTreasure();
          results.push(potion);
          potion = EquipmentVault.getPotionFromTreasure();
          results.push(potion);
          goldPouch.bonusNum = 50;
          results.push(goldPouch);
        break;
        case 6:
          var spell = SpellBook.getRandomSpell();
          var scroll = EquipmentVault.getRandomSpellItem('Scroll');
          results.push(scroll);
          spell = SpellBook.getRandomSpell();
          scroll = EquipmentVault.getRandomSpellItem('Scroll');
          results.push(scroll);
          spell = SpellBook.getRandomSpell();
          scroll = EquipmentVault.getRandomSpellItem('Scroll');
          results.push(scroll);
          goldPouch.bonusNum = 30;
          results.push(goldPouch);
        break;
        case 7:
          var spell = SpellBook.getRandomSpell();
          var scroll = EquipmentVault.getRandomSpellItem('Scroll');
          results.push(scroll);
          spell = SpellBook.getRandomSpell();
          scroll = EquipmentVault.getRandomSpellItem('Scroll');
          results.push(scroll);
          goldPouch.bonusNum = 50;
          results.push(goldPouch);
        break;
        case 8:
          var magicEquip = EquipmentVault.getMagicEquipmentFromTreasure();
          results.push(magicEquip);
          goldPouch.bonusNum = 20;
          results.push(goldPouch);
        break;
        case 9:
          var magicEquip = EquipmentVault.getMagicEquipmentFromTreasure();
          results.push(magicEquip);
          goldPouch.bonusNum = 40;
          results.push(goldPouch);
        break;
        case 10:
          var item = EquipmentVault.getMagicItemsFromTreasure();
          results.push(item);
          goldPouch.bonusNum = 20;
          results.push(goldPouch);
        break;
        case 11:
          var item = EquipmentVault.getMagicItemsFromTreasure();
          results.push(item);
          goldPouch.bonusNum = 40;
          results.push(goldPouch);
        break;
        case 12:
          var item = EquipmentVault.getMagicItemsFromTreasure();
          results.push(item);
          goldPouch.bonusNum = 60;
          results.push(goldPouch);
        break;
        case 13:
          var grimoire = EquipmentVault.getRandomSpellItem('Grimoire');
          results.push(grimoire);
          goldPouch.bonusNum = 20;
          results.push(goldPouch);
        break;
        case 14:
          var grimoire = EquipmentVault.getRandomSpellItem('Grimoire');
          results.push(grimoire);
          goldPouch.bonusNum = 40;
          results.push(goldPouch);
        break;
        case 15:
          var grimoire = EquipmentVault.getRandomSpellItem('Grimoire');
          results.push(grimoire);
          goldPouch.bonusNum = 60;
          results.push(goldPouch);
        break;
        case 16:
          var grimoire = EquipmentVault.getRandomSpellItem('Grimoire');
          results.push(grimoire);
          goldPouch.bonusNum = 80;
          results.push(goldPouch);
        break;
        case 17:
          var grimoire = EquipmentVault.getRandomSpellItem('Grimoire');
          results.push(grimoire);
          goldPouch.bonusNum = 100;
          results.push(goldPouch);
        break;
        case 18:
          var grimoire = EquipmentVault.getRandomSpellItem('Grimoire');
          results.push(grimoire);
          goldPouch.bonusNum = 120;
          results.push(goldPouch);
          break;
        case 19:
          var grimoire = EquipmentVault.getRandomSpellItem('Grimoire');
          results.push(grimoire);
          goldPouch.bonusNum = 150;
          results.push(goldPouch);
        break;
        case 20:
          var grimoire = EquipmentVault.getRandomSpellItem('Grimoire');
          results.push(grimoire);
          goldPouch.bonusNum = 200;
          results.push(goldPouch);
        break;

      }
      return results;
  }
}
