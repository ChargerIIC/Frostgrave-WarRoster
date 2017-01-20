import { Component } from '@angular/core';
import { Mage } from './model/mage.model';
import { Spell } from './model/spell.model';

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
    var spell = new Spell();
    spell.name = "Crumble";
    spell.description = "Crumble Description";
    spell.school = "Chronomancer";
    this.wizard.spells[0] = spell;
  }
}
