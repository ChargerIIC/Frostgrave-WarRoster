import { Component, OnInit, Input } from '@angular/core';
import { Mage } from '../model/mage.model';
import { HomeBase } from '../model/homebase.model';

@Component({
  selector: 'app-wizard-homebase-panel',
  templateUrl: './wizard-homebase-panel.component.html',
  styleUrls: ['./wizard-homebase-panel.component.css']
})
export class WizardHomebasePanelComponent implements OnInit {

  @Input() userMage: Mage;

  homebaseOptions: HomeBase[];

  constructor() {
    this.homebaseOptions = new Array<HomeBase>();

    var base = new HomeBase();
    base.name = 'None';
    base.description = 'Select a location for your home base.';
    this.homebaseOptions.push(base);

    base = new HomeBase();
    base.name = 'Inn';
    base.description = 'This old inn provides additional space for members of your warband. Warband maximum increases to 11';
    this.homebaseOptions.push(base);

    base = new HomeBase();
    base.name = 'Temple';
    base.description = 'Once a place of worship, these ruins project an aura of calm. +1 bonus to casting rolls for Miraculous Cure and Restore Life spells';
    this.homebaseOptions.push(base);
  }

  ngOnInit() {
  }

  onHomebaseChange(newValue){

  }

}
