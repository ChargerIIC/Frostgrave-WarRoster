import { Component, OnInit, Input } from '@angular/core';
import { Mage } from '../model/mage.model';

@Component({
  selector: 'app-gameresults-dialog-modal',
  templateUrl: './gameresults-dialog-modal.component.html',
  styleUrls: ['./gameresults-dialog-modal.component.css']
})
export class GameresultsDialogModalComponent implements OnInit {

  @Input() userMage: Mage;

  experience: number;

  constructor() { }

  ngOnInit() {
  }

  applyResults(){
    this.userMage.experience += this.experience;
  }
}
