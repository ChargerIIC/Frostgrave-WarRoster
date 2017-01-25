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

  currentSchool: string;
  schoolFilter: Array<string>;

  constructor() {
    this.schoolFilter = SpellBook.schools;
    this.schoolFilter.push('All');

    this.currentSchool = 'All';
  }

  ngOnInit() {
    if(this.userMage== null){
      this.userMage = new Mage();
    }

  }

  getAvailableSpells(): Array<Spell>{
    if(this.currentSchool == 'All')
    {
      return SpellBook.spells;
    }
    else
    {
      return SpellBook.spells.filter(x=>(x.school == this.currentSchool));
    }
  }

  getSchools(): Array<string>{
    return this.schoolFilter;
  }

  addSpell(spell: Spell){
    this.userMage.addSpellToCollection(spell);
  }

}
