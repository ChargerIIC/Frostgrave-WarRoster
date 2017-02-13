import { EquipmentVault } from './equipmentVault.model';
import { Minion } from './minion.model';

///This is a repo class for the various minions that can be hired for a warband.
export class WarbandVault {

  public static templates = new Array<Minion>();


  constructor(){
  }

  static loadMinionTemplatesIntoVault(){

    var minion = new Minion('War Dog');
    minion.move = 8;
    minion.fight = 1;
    minion.shoot = 0;
    minion.armor = 10;
    minion.will = 2;
    minion.health = 8;
    minion.cost = 10;
    minion.notes = "Animal, Cannot carry items"
    this.templates.push(minion);

    minion = new Minion('Thug');
    minion.move = 6;
    minion.fight = 2;
    minion.shoot = 0;
    minion.armor = 10;
    minion.will = -1;
    minion.health = 10;
    minion.cost = 20;
    minion.notes = ""
    minion.heldItem = EquipmentVault.getItemByName('Hand Weapon');
    this.templates.push(minion);

    minion = new Minion('Thief');
    minion.move = 7;
    minion.fight = 1;
    minion.shoot = 0;
    minion.armor = 10;
    minion.will = 0;
    minion.health = 10;
    minion.cost = 20;
    minion.notes = ""
    minion.heldItem = EquipmentVault.getItemByName('Dagger');
    this.templates.push(minion);

    minion = new Minion('Archer');
    minion.move = 6;
    minion.fight = 2;
    minion.shoot = 2;
    minion.armor = 11;
    minion.will = 0;
    minion.health = 10;
    minion.cost = 50;
    minion.notes = "Leather Armor"
    minion.heldItem = EquipmentVault.getItemByName('Bow');
    minion.otherItems.push(EquipmentVault.getItemByName('Dagger'));
    this.templates.push(minion);

    minion = new Minion('Crossbowman');
    minion.move = 6;
    minion.fight = 2;
    minion.shoot = 2;
    minion.armor = 11;
    minion.will = 0;
    minion.health = 10;
    minion.cost = 50;
    minion.notes = "Leather Armor"
    minion.heldItem = EquipmentVault.getItemByName('Crossbow');
    minion.otherItems.push(EquipmentVault.getItemByName('Dagger'));
    this.templates.push(minion);

    minion = new Minion('Infantryman');
    minion.move = 6;
    minion.fight = 3;
    minion.shoot = 0;
    minion.armor = 11;
    minion.will = 0;
    minion.health = 10;
    minion.cost = 50;
    minion.notes = "Leather Armor"
    minion.heldItem = EquipmentVault.getItemByName('Two-Handed Weapon');
    this.templates.push(minion);

    minion = new Minion('Tracker');
    minion.move = 7;
    minion.fight = 2;
    minion.shoot = 2;
    minion.armor = 11;
    minion.will = 1;
    minion.health = 12;
    minion.cost = 80;
    minion.notes = "Leather Armor"
    minion.heldItem = EquipmentVault.getItemByName('Staff');
    minion.otherItems.push(EquipmentVault.getItemByName('Bow'));
    this.templates.push(minion);

    minion = new Minion('Man-at-Arms');
    minion.move = 6;
    minion.fight = 3;
    minion.shoot = 0;
    minion.armor = 12;
    minion.will = 1;
    minion.health = 12;
    minion.cost = 80;
    minion.notes = "Leather Armor"
    minion.heldItem = EquipmentVault.getItemByName('Hand Weapon');
    minion.otherItems.push(EquipmentVault.getItemByName('Shield'));
    this.templates.push(minion);

    minion = new Minion('Treasure Hunter');
    minion.move = 7;
    minion.fight = 4;
    minion.shoot = 0;
    minion.armor = 11;
    minion.will = 2;
    minion.health = 12;
    minion.cost = 80;
    minion.notes = "Leather Armor"
    minion.heldItem = EquipmentVault.getItemByName('Hand Weapon');
    minion.otherItems.push(EquipmentVault.getItemByName('Dagger'));
    this.templates.push(minion);

    minion = new Minion('Knight');
    minion.move = 5;
    minion.fight = 4;
    minion.shoot = 0;
    minion.armor = 13;
    minion.will = 1;
    minion.health = 12;
    minion.cost = 100;
    minion.notes = "Mail Armor"
    minion.heldItem = EquipmentVault.getItemByName('Hand Weapon');
    minion.otherItems.push(EquipmentVault.getItemByName('Shield'));
    this.templates.push(minion);

    minion = new Minion('Templar');
    minion.move = 5;
    minion.fight = 4;
    minion.shoot = 0;
    minion.armor = 12;
    minion.will = 1;
    minion.health = 12;
    minion.cost = 100;
    minion.notes = "Mail Armor"
    minion.heldItem = EquipmentVault.getItemByName('Two-Handed Weapon');
    this.templates.push(minion);

    minion = new Minion('Ranger');
    minion.move = 7;
    minion.fight = 2;
    minion.shoot = 2;
    minion.armor = 11;
    minion.will = 2;
    minion.health = 12;
    minion.cost = 100;
    minion.notes = "Leather Armor"
    minion.heldItem = EquipmentVault.getItemByName('Bow');
    minion.otherItems.push(EquipmentVault.getItemByName('Hand Weapon'));
    this.templates.push(minion);

    minion = new Minion('Barbarian');
    minion.move = 6;
    minion.fight = 4;
    minion.shoot = 0;
    minion.armor = 10;
    minion.will = 3;
    minion.health = 14;
    minion.cost = 100;
    minion.notes = ""
    minion.heldItem = EquipmentVault.getItemByName('Two-Handed Weapon');
    this.templates.push(minion);

    minion = new Minion('Apothecary');
    minion.move = 6;
    minion.fight = 0;
    minion.shoot = 0;
    minion.armor = 10;
    minion.will = 0;
    minion.health = 12;
    minion.cost = 100;
    minion.notes = ""
    minion.heldItem = EquipmentVault.getItemByName('Staff');
    minion.otherItems.push(EquipmentVault.getItemByName('Healing Potion'));
    this.templates.push(minion);

    minion = new Minion('Marksman');
    minion.move = 5;
    minion.fight = 2;
    minion.shoot = 3;
    minion.armor = 12;
    minion.will = 1;
    minion.health = 12;
    minion.cost = 100;
    minion.notes = "Mail Armor"
    minion.heldItem = EquipmentVault.getItemByName('Crossbow');
    minion.otherItems.push(EquipmentVault.getItemByName('Hand Weapon'));
    this.templates.push(minion);
    }
}
