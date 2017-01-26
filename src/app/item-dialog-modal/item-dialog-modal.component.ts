import { Component, OnInit, Input } from '@angular/core';

import { Mage } from '../model/mage.model';
import { EquipmentVault } from '../model/equipmentvault.model';
import { Equipment } from '../model/equipment.model';

@Component({
  selector: 'app-item-dialog-modal',
  templateUrl: './item-dialog-modal.component.html',
  styleUrls: ['./item-dialog-modal.component.css']
})

export class ItemDialogModalComponent implements OnInit {

  @Input() userMage : Mage;

  constructor() { }

  ngOnInit() {
  }

  getAvailableItems(): Array<Equipment>{
    return EquipmentVault.items;
  }

  addItem(item: Equipment){
    this.userMage.addItemToInventory(item);
  }
}
