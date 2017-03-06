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
  }

  applyResults(){
    this.userMage.experience += this.experience;
  }

  onCasualtySelected(newValue){
    this.selectedWarbandMember = newValue;
  }

  addCasaulty(){
    var index = this.userMage.warbandMembers.indexOf(this.selectedWarbandMember);
    var minion = this.userMage.warbandMembers[index];

    //roll 1d20
    //TODO: Might need to create the classic Dice Roller Utility
    var roll = Math.floor(Math.random() * 20) + 1;
    this.actionLog = "Rolling for casualty results: " + roll + '. ';
    if(roll <= 4){
      this.userMage.warbandMembers.splice(index, 1); //Died
      this.actionLog = minion.name += ' was killed by thier wounds.';
    }
    else if(roll <=8){
      minion.status = 'WOUNDED';
      this.actionLog = minion.name += ' was wounded.'
    }
    else{
      this.actionLog = minion.name += ' survived thier injury.';
    }

    
  }

}