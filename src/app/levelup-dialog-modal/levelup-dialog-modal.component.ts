import { Component, OnInit, Input } from '@angular/core';
import { Mage } from '../model/mage.model';

@Component({
  selector: 'app-levelup-dialog-modal',
  templateUrl: './levelup-dialog-modal.component.html',
  styleUrls: ['./levelup-dialog-modal.component.css']
})
export class LevelupDialogModalComponent implements OnInit {

  @Input() userMage : Mage;

  constructor() { }

  ngOnInit() {
  }

}
