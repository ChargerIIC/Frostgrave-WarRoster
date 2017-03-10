import { Component, OnInit, Input } from '@angular/core';
import { EquipmentVault } from '../model/equipmentVault.model';
import { Mage } from '../model/mage.model';
import { Minion } from '../model/minion.model';
import { Equipment } from '../model/equipment.model';

@Component({
  selector: 'app-gameresults-dialog-modal',
  templateUrl: './gameresults-dialog-modal.component.html',
  styleUrls: ['./gameresults-dialog-modal.component.css']
})

export class GameresultsDialogModalComponent implements OnInit {

  @Input() userMage: Mage;

  experience: number = 0;
  selectedWarbandMember: Minion;
  actionLog: string[];
  treasureFound: number = 0;

  treasureToCommit: Equipment[];
  goldToCommit: number = 0;

  constructor() {
    this.treasureToCommit = new Array<Equipment>();
    this.actionLog = new Array<string>();
   }

  ngOnInit() {
    this.selectedWarbandMember = this.userMage.warbandMembers[0];
  }

  applyResults(){
    this.userMage.experience += this.experience;
    this.userMage.gold += this.goldToCommit;
    for(let equipment of this.treasureToCommit){
      this.userMage.addItemToInventory(equipment);
    }
  }

  onCasualtySelected(newValue){
    this.selectedWarbandMember = newValue;
  }

  addCasaulty(){
    var index = this.userMage.warbandMembers.indexOf(this.selectedWarbandMember);

    //roll 1d20
    //TODO: Might need to create the classic Dice Roller Utility
    var roll = Math.floor(Math.random() * 20) + 1;
    this.actionLog.push("Rolling for casualty results: " + roll + '. ');
    if(roll <= 4){
      this.userMage.warbandMembers.splice(index, 1); //Died
      this.actionLog.push(this.selectedWarbandMember.name + ' was killed by thier wounds.');
    }
    else if(roll <=8){
      this.selectedWarbandMember.status = 'WOUNDED';
      this.actionLog.push(this.selectedWarbandMember.name + ' was wounded.');
    }
    else{
      this.actionLog.push(this.selectedWarbandMember.name + ' survived thier injury.');
    }    
  }

  apprenticePresent(){
    return (this.userMage.apprentice != null);
  }

  addApprenticeCasaulty(){
    var apprentice = this.userMage.apprentice;
    //roll 1d20
    var roll = Math.floor(Math.random() * 20) + 1;
    this.actionLog.push("Rolling for apprentice casualty results: " + roll + '. ');
    if(roll <= 2){
      //died
      this.actionLog.push(apprentice.name + ' was killed by thier wounds.');
      this.userMage.apprentice = null;
    }
    else if(roll <=4){
      //Permanent Injury
      //roll 1d20
      var roll = Math.floor(Math.random() * 20) + 1;
      if(roll <= 2){
        this.userMage.apprentice.move -= 0.5;
        this.userMage.apprentice.status = "Lost Toe";
      }
      else if(roll<=5){
        this.userMage.apprentice.move -= 1;
        this.userMage.apprentice.status = "Smashed Leg";
      }
      else if(roll<=10){
        this.userMage.apprentice.fight -= 1;
        this.userMage.apprentice.status = "Crushed Arm";
      }
      else if(roll<=12){
        this.userMage.apprentice.shoot -= 1;
        this.userMage.apprentice.status = "Lost Fingers";
      }
      else if(roll<=14){
        this.userMage.apprentice.health -= 1;
        this.userMage.apprentice.status = "Never Quite as Strong";
      }
      else if(roll<=16){
        this.userMage.apprentice.will -= 1;
        this.userMage.apprentice.status = "Psychological Scars";
      }
      else if(roll<=18){
        this.userMage.apprentice.health -= 3;
        this.userMage.apprentice.status = "Niggling Injury";
      }
      else if(roll==19){
        this.userMage.apprentice.status = "Smashed Jaw";
      }
      else if(roll==20){
        this.userMage.shoot -= 2;
        this.userMage.apprentice.status = "Lost Eye";
      }
      this.actionLog.push(apprentice.name + ' was permanently injured. ' + apprentice.status);
    }
    else if(roll <=6){
      //Badly Wounded
      apprentice.status = 'WOUNDED';
      this.actionLog.push(apprentice.name + ' was badly wounded.');
    }
    else if(roll <=8){
      //Badly Wounded
      //TODO: purge held items
      this.actionLog.push(apprentice.name + ' had a close call and lost thier items.');
    }
    else{
      this.actionLog.push(apprentice.name + ' survived thier injury.');
    }  
  }

  addWizardCasaulty(){
    var apprentice = this.userMage.apprentice;
    //roll 1d20
    var roll = Math.floor(Math.random() * 20) + 1;
    this.actionLog.push("Rolling for wizard casualty results: " + roll + '.');
    if(roll <= 2){
      //died
      this.actionLog.push(this.userMage.name + ' was killed by thier wounds.');
      //this.userMage.apprentice = null;
    }
    else if(roll <=4){
      //Permanent Injury
      //roll 1d20
      var roll = Math.floor(Math.random() * 20) + 1;
      if(roll <= 2){
        this.userMage.move -= 0.5;
        this.userMage.status = "(Lost Toe)";
      }
      else if(roll<=5){
        this.userMage.move -= 1;
        this.userMage.status = "(Smashed Leg)";
      }
      else if(roll<=10){
        this.userMage.fight -= 1;
        this.userMage.status = "(Crushed Arm)";
      }
      else if(roll<=12){
        this.userMage.shoot -= 1;
        this.userMage.status = "(Lost Fingers)";
      }
      else if(roll<=14){
        this.userMage.health -= 1;
        this.userMage.status = "(Never Quite as Strong)";
      }
      else if(roll<=16){
        this.userMage.will -= 1;
        this.userMage.status = "(Psychological Scars)";
      }
      else if(roll<=18){
        this.userMage.health -= 3;
        this.userMage.status = "(Niggling Injury)";
      }
      else if(roll==19){
        for (var spell of this.userMage.spells){
          spell.castingNumber += 2;
        }
        this.userMage.status = "(Smashed Jaw)";
      }
      else if(roll==20){
        this.userMage.shoot -= 2;
        this.userMage.status = "(Lost Eye)";
      }
      this.actionLog.push(this.userMage.name + ' was permanently injured. ' + this.userMage.status);
    }
    else if(roll <=6){
      //Badly Wounded
      this.userMage.status = 'WOUNDED';
      this.actionLog.push(this.userMage.name + ' was badly wounded.');
    }
    else if(roll <=8){
      this.userMage.items = new Array<Equipment>();
      this.actionLog.push(this.userMage.name + ' had a close call and lost thier items.');
    }
    else{
      this.actionLog.push(this.userMage.name + ' survived thier injury.');
    }  
  }

  addTreasure(){
    this.treasureFound++;
    var newEquipment = EquipmentVault.getItemsFromTreasure();
    for(let item of newEquipment){
      if(item.name == 'Gold'){
        this.goldToCommit += item.bonusNum;
        this.actionLog.push('Gold gained: ' + item.bonusNum);
      }
      else{
        this.treasureToCommit.push(item);
        this.actionLog.push('Treasure gained: ' + item.name);
      }
    }
  }
}