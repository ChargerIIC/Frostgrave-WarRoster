import { Component, OnInit, Input } from '@angular/core';
import { Mage } from '../model/mage.model';
import { Apprentice } from '../model/apprentice.model';
import { Minion } from '../model/minion.model';

@Component({
  selector: 'app-wizard-warband-panel',
  templateUrl: './wizard-warband-panel.component.html',
  styleUrls: ['./wizard-warband-panel.component.css']
})
export class WizardWarbandPanelComponent implements OnInit {

  @Input() userMage: Mage;

  constructor() { }

  ngOnInit() {
  }

  addApprentice(){
    var cost = this.getApprenticeCost();
    if(this.userMage.gold < cost){
      console.log("not enough funds for purchase"); //TODO: create modal or  dialog for user to see
      return;
    }
    this.userMage.gold -= cost;
    this.userMage.apprentice = new Apprentice(this.userMage);
  }

  removeApprentice(){
    this.userMage.gold += 200;
    this.userMage.apprentice = null;
  }

  addMinion(minion : Minion){

  }

  apprenticePresent(){
    return (this.userMage.apprentice != null);
  }

  removeMinion(minion: Minion){
    var index = this.userMage.warbandMembers.indexOf(minion, 0);
    if (index > -1) {
       this.userMage.warbandMembers.splice(index, 1);
    }
  }

  getApprenticeCost(): number{
    var levelMod = this.userMage.level - 10;
    levelMod = levelMod * 10;
    return 300 + levelMod;
  }

}
