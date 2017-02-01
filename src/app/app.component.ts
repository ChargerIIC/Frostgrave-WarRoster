import { Component } from '@angular/core';
import { Mage } from './model/mage.model';
import { Spell } from './model/spell.model';
import { SpellBook } from './model/spellbook.model';
import { EquipmentVault } from './model/equipmentvault.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  wizard: Mage;

  title = 'Frostgrave WarRoster';

  constructor(){
    this.wizard = new Mage();

    SpellBook.loadSchoolsIntoSpellBook();
    SpellBook.loadSpellsIntoSpellbook();
    EquipmentVault.loadEquipmentIntoVault();

    this.wizard.addItemToInventory(EquipmentVault.items[0]);
  }
}
