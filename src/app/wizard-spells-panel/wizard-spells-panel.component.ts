import { Component, OnInit, Input } from '@angular/core';
import { Mage } from '../model/mage.model';
import { Spell } from '../model/spell.model';

@Component({
  selector: 'app-wizard-spells-panel',
  templateUrl: './wizard-spells-panel.component.html',
  styleUrls: ['./wizard-spells-panel.component.css']
})
export class WizardSpellsPanelComponent implements OnInit {

  @Input() userMage: Mage;

  constructor() { }

  ngOnInit() {
    if(this.userMage== null){
      this.userMage = new Mage();
    }

  }

  removeSpell(spell: Spell){
    this.userMage.removeSpellFromCollection(spell);
  }

}
