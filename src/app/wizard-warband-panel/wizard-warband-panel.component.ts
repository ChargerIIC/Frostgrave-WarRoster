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
    console.log('Adding Apprentice');
    if(this.userMage.gold <200){
      console.log("not enough funds for purchase");
      return;
    }
    this.userMage.gold -= 200;
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
}
