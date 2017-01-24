import { Component, OnInit, Input } from '@angular/core';
import { Mage } from '../model/mage.model';
import { SpellBook } from '../model/spellbook.model';
import { Spell } from '../model/spell.model';

@Component({
  selector: 'app-spell-dialog-modal',
  templateUrl: './spell-dialog-modal.component.html',
  styleUrls: ['./spell-dialog-modal.component.css']
})
export class SpellDialogModalComponent implements OnInit {

  @Input() userMage : Mage;

  currentSchool: string = '';

  constructor() { }

  ngOnInit() {
    if(this.userMage== null){
      this.userMage = new Mage();
    }

  }

  getAvailableSpells(): Array<Spell>{
    if(this.currentSchool == '')
    {
      return SpellBook.spells;
    }
    else
    {
      return SpellBook.spells.filter(this.spellSchoolMatchesSelectedSchoold);
    }
  }

  getSchools(): Array<string>{
    return SpellBook.schools;
  }

  addSpell(spell: Spell){
    this.userMage.addSpellToCollection(spell);
  }

  spellSchoolMatchesSelectedSchoold(value: Spell) : boolean {
    if(value.school == this.currentSchool)
    {
      return true;
    }
    else
    {
      return false;
    }
  }
}
