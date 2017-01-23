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

  constructor() { }

  ngOnInit() {
  }

  getAvailableSpells(){
    var array = SpellBook.spells;
  }

}
