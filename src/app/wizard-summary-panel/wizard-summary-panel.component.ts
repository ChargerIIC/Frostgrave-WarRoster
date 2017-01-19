import { Component, OnInit, Input } from '@angular/core';
import { Mage } from '../model/mage.model';

@Component({
  selector: 'app-wizard-summary-panel',
  templateUrl: './wizard-summary-panel.component.html',
  styleUrls: ['./wizard-summary-panel.component.css']
})
export class WizardSummaryPanelComponent implements OnInit {

  @Input() userMage: Mage;

  constructor() { }

  ngOnInit() {
  }

}
