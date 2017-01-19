import { Component } from '@angular/core';
import { Mage } from './model/mage.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  wizard: Mage;

  title = 'Frostgrave WarRoster';

  constructor(){
    this.wizard = new Mage();
  }
}
