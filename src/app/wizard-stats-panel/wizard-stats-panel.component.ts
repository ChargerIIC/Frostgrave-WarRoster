import { Component, OnInit, Input } from '@angular/core';
import { Mage } from '../model/mage.model';

@Component({
  selector: 'app-wizard-stats-panel',
  templateUrl: './wizard-stats-panel.component.html',
  styleUrls: ['./wizard-stats-panel.component.css']
})
export class WizardStatsPanelComponent implements OnInit {

  @Input() userMage: Mage;

  constructor() { }

  ngOnInit() {
    if(this.userMage== null){
      this.userMage = new Mage();
    }

  }

}
