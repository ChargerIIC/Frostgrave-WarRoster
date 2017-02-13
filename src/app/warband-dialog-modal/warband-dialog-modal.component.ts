import { Component, OnInit, Input } from '@angular/core';
import { Mage } from '../model/mage.model';
import { Minion } from '../model/minion.model';
import { WarbandVault } from '../model/warbandVault.model';

@Component({
  selector: 'app-warband-dialog-modal',
  templateUrl: './warband-dialog-modal.component.html',
  styleUrls: ['./warband-dialog-modal.component.css']
})
export class WarbandDialogModalComponent implements OnInit {

  @Input() userMage : Mage;

  constructor() { }

  ngOnInit() {
  }

  getAvailableTemplates(): Minion[]{
    return WarbandVault.templates;
  }

  addWarbandMember(minion){
    if(this.userMage.gold >= minion.cost){
      this.userMage.gold -= minion.cost;
      this.userMage.warbandMembers.push(minion);
    }
  }
}
