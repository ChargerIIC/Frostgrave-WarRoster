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
    this.userMage.apprentice = new Apprentice(this.userMage);
  }

  apprenticePresent(){
    return (this.userMage.apprentice != null);
  }

}
