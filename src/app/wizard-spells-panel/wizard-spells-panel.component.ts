import { Component, OnInit, Input } from '@angular/core';
import { Mage } from '../model/mage.model';

@Component({
  selector: 'app-wizard-spells-panel',
  templateUrl: './wizard-spells-panel.component.html',
  styleUrls: ['./wizard-spells-panel.component.css']
})
export class WizardSpellsPanelComponent implements OnInit {

  @Input() userMage: Mage;

  constructor() { }

  ngOnInit() {
  }

}
