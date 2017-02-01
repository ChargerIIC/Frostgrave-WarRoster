import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common'
import { Mage } from '../model/mage.model';
import { SpellBook } from '../model/spellbook.model';
import { School } from '../model/school.model';

@Component({
  selector: 'app-wizard-summary-panel',
  templateUrl: './wizard-summary-panel.component.html',
  styleUrls: ['./wizard-summary-panel.component.css']
})
export class WizardSummaryPanelComponent implements OnInit {

  schoolsOfMagic: School[];

  @Input() userMage: Mage;

  constructor() {
    this.schoolsOfMagic = SpellBook.schools;
  }

  ngOnInit() {
    if(this.userMage== null){
      this.userMage = new Mage();
    }
  }

}
