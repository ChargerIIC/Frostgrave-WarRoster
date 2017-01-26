import { Component, OnInit, Input } from '@angular/core';
import { Mage } from '../model/mage.model';
import { Equipment } from '../model/equipment.model';

@Component({
  selector: 'app-wizard-equipment-panel',
  templateUrl: './wizard-equipment-panel.component.html',
  styleUrls: ['./wizard-equipment-panel.component.css']
})
export class WizardEquipmentPanelComponent implements OnInit {

  @Input() userMage: Mage;

  constructor() { }

  ngOnInit() {
  }

  removeItem(item: Equipment){
    this.userMage.removeItemFromInventory(item);
  }

}
