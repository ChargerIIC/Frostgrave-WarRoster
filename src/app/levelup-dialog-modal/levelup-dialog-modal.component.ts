import { Component, OnInit, Input } from '@angular/core';
import { Mage } from '../model/mage.model';
import { Spell } from '../model/spell.model';

@Component({
  selector: 'app-levelup-dialog-modal',
  templateUrl: './levelup-dialog-modal.component.html',
  styleUrls: ['./levelup-dialog-modal.component.css']
})
export class LevelupDialogModalComponent implements OnInit {

  @Input() userMage : Mage;

  constructor() { }

  ngOnInit() {
  }

  addLevel(){
    this.userMage.level++;
    this.userMage.levelUpPoints++;
  }

  showOptions(){
    return this.userMage.levelUpPoints > 0;
  }

  addFight(){
    this.userMage.fight++;
    this.userMage.levelUpPoints--;
  }

  addShoot(){
    this.userMage.shoot++;
    this.userMage.levelUpPoints--;
  }

  addWill(){
    this.userMage.will++;
    this.userMage.levelUpPoints--;
  }

  addHealth(){
    this.userMage.health++;
    this.userMage.levelUpPoints--;
  }

  spellsPresent(){
    return this.userMage.spells.length > 0;
  }

  improveSpell(spell : Spell){
    var index = this.userMage.spells.indexOf(spell);
    this.userMage.spells[index].castingNumber--;
    this.userMage.levelUpPoints--;
  }

  addSpellSlot(){
    this.userMage.spellSlotsAvailable['Any']++;
  }
}
