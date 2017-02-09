import { Component, OnInit, Input } from '@angular/core';
import { Mage } from '../model/mage.model';
import { Apprentice } from '../model/apprentice.model';

@Component({
  selector: 'app-apprentice-summary-panel',
  templateUrl: './apprentice-summary-panel.component.html',
  styleUrls: ['./apprentice-summary-panel.component.css']
})
export class ApprenticeSummaryPanelComponent implements OnInit {

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

  apprenticePresent(){
    return (this.userMage.apprentice != null);
  }

}
