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
    spell.description = "This spell only works against man-made structures such as buildings and walls. The spellcaster rapidly speeds up the passing of time in a small area of the structure, causing it to collapse. This can effectively create a doorway-sized hole through any wall, which should be indicated on the table somehow. The spell can also be used to collapse a section of floor beneath a figure standing on a level above the ground. In this case, the figure about to be affected must pass a Will roll versus the casting roll, or fall to the next level down and taking damage appropriately.";
    spell.school = "Chronomancer";
    spell.castingNumber = 10;
    this.wizard.spells[0] = spell;
  }
}
