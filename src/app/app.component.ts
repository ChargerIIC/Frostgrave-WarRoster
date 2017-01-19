import { Component } from '@angular/core';
import { Mage } from './model/mage.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userMage: Mage;

  title = 'Frostgrave WarRoster';

}
