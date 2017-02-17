import { Component, OnInit, Input } from '@angular/core';
import { Mage } from '../model/mage.model';
import { HomeBase } from '../model/homebase.model';
import { HomeBaseVault } from '../model/homebaseVault.model';


@Component({
  selector: 'app-wizard-homebase-panel',
  templateUrl: './wizard-homebase-panel.component.html',
  styleUrls: ['./wizard-homebase-panel.component.css']
})
export class WizardHomebasePanelComponent implements OnInit {

  @Input() userMage: Mage;

  homebaseOptions: HomeBase[];

  constructor() {
    this.homebaseOptions = HomeBaseVault.baseOptions;
  }

  ngOnInit() {
  }

  onHomebaseChange(newValue){
    this.userMage.base = newValue;
  }

}
