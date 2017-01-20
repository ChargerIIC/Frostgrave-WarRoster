import { Component } from '@angular/core';
import { Mage } from './model/mage.model';
import { Spell } from './model/spell.model';
import { SpellBook } from './model/spellbook.model';

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

    SpellBook.loadSpellsIntoSpellbook();

    this.wizard.spells[0] = SpellBook.spells[0];
    this.wizard.spells[1] = SpellBook.spells[13];
  }
}
