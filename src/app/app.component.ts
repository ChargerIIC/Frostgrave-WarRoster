import { Component } from '@angular/core';
import { Mage } from './model/mage.model';
import { School } from './model/school.model';
import { Spell } from './model/spell.model';
import { SpellBook } from './model/spellbook.model';
import { EquipmentVault } from './model/equipmentVault.model';
import { WarbandVault } from './model/warbandVault.model';
import {HomeBaseVault } from './model/homebaseVault.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  wizard: Mage;

  title = 'Frostgrave WarRoster';

  constructor(){
    SpellBook.loadSchoolsIntoSpellBook();
    SpellBook.loadSpellsIntoSpellbook();
    HomeBaseVault.loadhomeBasesIntoVault();

    this.wizard = new Mage();

    EquipmentVault.loadEquipmentIntoVault();
    WarbandVault.loadMinionTemplatesIntoVault();
    this.wizard.addItemToInventory(EquipmentVault.items[0]);
  }

}
