import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common'
import { Mage } from '../model/mage.model';

@Component({
  selector: 'app-wizard-summary-panel',
  templateUrl: './wizard-summary-panel.component.html',
  styleUrls: ['./wizard-summary-panel.component.css']
})
export class WizardSummaryPanelComponent implements OnInit {

  schoolsOfMagic: string[];

  @Input() userMage: Mage;

  constructor() {
    this.schoolsOfMagic = [
      "Chronomancer",
      "Elementalist",
      "Enchanter",
      "Illusionist",
      "Necromancer",
      "Sigilist",
      "Soothsayer",
      "Summoner",
      "Thaumaturge",
      "Witch"
    ];
  }

  ngOnInit() {
  }

}
