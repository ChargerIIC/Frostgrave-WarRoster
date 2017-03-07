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
    var recruit = minion.copy();
    if(this.userMage.gold >= recruit.cost){
      this.userMage.gold -= recruit.cost;
      var sameMinions = this.userMage.warbandMembers.filter(x => x.name.startsWith(recruit.name));
      if(sameMinions.length > 0){
        recruit.name += ' ' + (sameMinions.length + 1);
      }
      this.userMage.warbandMembers.push(recruit);
    }
  }
}
