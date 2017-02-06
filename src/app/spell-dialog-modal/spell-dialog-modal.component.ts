import { Component, OnInit, Input } from '@angular/core';
import { Mage } from '../model/mage.model';
import { SpellBook } from '../model/spellbook.model';
import { Spell } from '../model/spell.model';
import { School } from '../model/school.model';

@Component({
  selector: 'app-spell-dialog-modal',
  templateUrl: './spell-dialog-modal.component.html',
  styleUrls: ['./spell-dialog-modal.component.css']
})
export class SpellDialogModalComponent implements OnInit {

  @Input() userMage : Mage;

  currentSchool: string;
  schoolFilter: Array<string>;
  neutralFilter: Array<string>;

  constructor() {
    this.schoolFilter = SpellBook.schools.map(x=>x.name);
    //Special Filters
    this.schoolFilter.push('All');
    this.currentSchool = 'All';
  }

  ngOnInit() {
    if(this.userMage== null){
      this.userMage = new Mage();
    }

    this.schoolFilter.push('Neutral');
    this.neutralFilter = this.userMage.school.neutral.map(x=>x.name);
  }

  getAvailableSpells(): Array<Spell>{
    if(this.currentSchool == 'All')
    {
      return SpellBook.spells;
    }
    else if(this.currentSchool == 'Neutral')
    {
      return SpellBook.spells.filter(x=>(this.neutralFilter.indexOf(x.school) > -1))
    }
    else
    {
      return SpellBook.spells.filter(x=>(x.school == this.currentSchool));
    }
  }

  addSpell(spell: Spell){
    this.userMage.addSpellToCollection(spell);
  }

}
