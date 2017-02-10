import { Component, OnInit, Input } from '@angular/core';
import { Mage } from '../model/mage.model';

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

}
