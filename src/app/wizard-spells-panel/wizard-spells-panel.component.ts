import { Component, OnInit, Input } from '@angular/core';
import { Mage } from '../model/mage.model';
import { Spell } from '../model/spell.model';
import { SpellBook } from '../model/spellbook.model';

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

  getSpellSlotsForUI(){
    return Object.keys(this.userMage.spellSlotsAvailable)
      .map(key => ({key: key, value: this.userMage.spellSlotsAvailable[key]}));
  }

  removeSpell(spell: Spell){
    this.userMage.removeSpellFromCollection(spell);
  }

  getSpellCost(spell: Spell){
    var relationship = SpellBook.getAlignment(spell.school, this.userMage.school);

    if(relationship == 'Same'){
      return spell.castingNumber;
    }
    else if(relationship == 'Aligned'){
      return spell.castingNumber + 2;
    }
    else if(relationship == 'Neutral'){
      return spell.castingNumber + 4;
    }
    else if(relationship == 'Opposed'){
      return spell.castingNumber + 6;
    }

    return 99;
  }
}
