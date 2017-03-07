import { Component, OnInit, Input } from '@angular/core';
import { Mage } from '../model/mage.model';
import { Minion } from '../model/minion.model';

@Component({
  selector: 'app-gameresults-dialog-modal',
  templateUrl: './gameresults-dialog-modal.component.html',
  styleUrls: ['./gameresults-dialog-modal.component.css']
})

export class GameresultsDialogModalComponent implements OnInit {

  @Input() userMage: Mage;

  experience: number;
  selectedWarbandMember: Minion;
  actionLog: string;

  constructor() { }

  ngOnInit() {
    this.selectedWarbandMember = this.userMage.warbandMembers[0];
  }

  applyResults(){
    this.userMage.experience += this.experience;
  }

  onCasualtySelected(newValue){
    this.selectedWarbandMember = newValue;
  }

  addCasaulty(){
    var index = this.userMage.warbandMembers.indexOf(this.selectedWarbandMember);

    //roll 1d20
    //TODO: Might need to create the classic Dice Roller Utility
    var roll = Math.floor(Math.random() * 20) + 1;
    this.actionLog = "Rolling for casualty results: " + roll + '. ';
    if(roll <= 4){
      this.userMage.warbandMembers.splice(index, 1); //Died
      this.actionLog = this.selectedWarbandMember.name + ' was killed by thier wounds.';
    }
    else if(roll <=8){
      this.selectedWarbandMember.status = 'WOUNDED';
      this.actionLog = this.selectedWarbandMember.name + ' was wounded.'
    }
    else{
      this.actionLog = this.selectedWarbandMember.name + ' survived thier injury.';
    }

    
  }

}