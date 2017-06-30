import { Component, OnInit, Input } from '@angular/core';
import { EquipmentVault } from '../model/equipmentVault.model';
import { Mage } from '../model/mage.model';
import { Minion } from '../model/minion.model';
import { Equipment } from '../model/equipment.model';
import { CasaultyDto } from '../model/casaultydto.model';

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

  treasureToCommit: Equipment[];
  treasureFound: number = 0;
  goldToCommit: number = 0;

  minionCasaultyList: CasaultyDto[];
  apprenticeKilled: boolean = false;
  apprenticeFunctionToCommit: Function;

  wizardKilled: boolean = false;
  wizardFunctionToCommit: Function;

  constructor() {
    this.resetWindow();
   }

  ngOnInit() {
    this.resetWindow();
    this.selectedWarbandMember = this.userMage.warbandMembers[0];
  }

  applyResults(){
    this.userMage.experience += this.experience;
    this.userMage.gold += this.goldToCommit;
    for(let dto of this.minionCasaultyList){
      var index = this.userMage.warbandMembers.indexOf(dto.warbandMember);
      if(dto.killed){
        this.userMage.warbandMembers.splice(index,1);
      }
      else{
        this.userMage.warbandMembers[index].notes += ' (WOUNDED)';
      }
    }
    if(this.apprenticeKilled){
      this.userMage.apprentice = null;
    }
    else if(this.apprenticeFunctionToCommit){
      this.apprenticeFunctionToCommit();
    }

    if(this.wizardFunctionToCommit){
      this.wizardFunctionToCommit();
    }

    for(let equipment of this.treasureToCommit){
      this.userMage.addItemToInventory(equipment);
    }
    this.resetWindow();
  }

  resetWindow(){
    this.actionLog = null;
    this.apprenticeKilled = false;
    this.apprenticeFunctionToCommit = null;
    this.treasureToCommit = new Array<Equipment>();
    this.actionLog = new Array<string>();
    this.minionCasaultyList = new Array<CasaultyDto>();
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
      var dto = new CasaultyDto();
      dto.warbandMember = this.selectedWarbandMember;
      dto.killed = true;
      this.minionCasaultyList.push(dto)
      this.actionLog.push(this.selectedWarbandMember.name + ' was killed by thier wounds.');
    }
    else if(roll <=8){
      var dto = new CasaultyDto();
      dto.warbandMember = this.selectedWarbandMember;
      dto.killed = false;
      this.minionCasaultyList.push(dto)
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
      this.apprenticeKilled = true;
    }
    else if(roll <=4){
      //Permanent Injury
      //roll 1d20
      var roll = Math.floor(Math.random() * 20) + 1;
      if(roll <= 2){
        this.apprenticeFunctionToCommit = ()=>{
          this.userMage.apprentice.move -= 0.5;
          this.userMage.apprentice.status = "Lost Toe";
        };
      }
      else if(roll<=5){
        this.apprenticeFunctionToCommit = ()=>{
          this.userMage.apprentice.move -= 1;
          this.userMage.apprentice.status = "Smashed Leg";
        }
      }
      else if(roll<=10){
        this.apprenticeFunctionToCommit = ()=>{
          this.userMage.apprentice.fight -= 1;
          this.userMage.apprentice.status = "Crushed Arm";
        }
      }
      else if(roll<=12){
        this.apprenticeFunctionToCommit = ()=>{
          this.userMage.apprentice.shoot -= 1;
          this.userMage.apprentice.status = "Lost Fingers";
        }
      }
      else if(roll<=14){
        this.apprenticeFunctionToCommit = ()=>{
          this.userMage.apprentice.health -= 1;
          this.userMage.apprentice.status = "Never Quite as Strong";
        }
      }
      else if(roll<=16){
        this.apprenticeFunctionToCommit = ()=>{
          this.userMage.apprentice.will -= 1;
          this.userMage.apprentice.status = "Psychological Scars";
        }
      }
      else if(roll<=18){
        this.apprenticeFunctionToCommit = ()=>{
          this.userMage.apprentice.health -= 3;
          this.userMage.apprentice.status = "Niggling Injury";
        }
      }
      else if(roll==19){
        this.apprenticeFunctionToCommit = ()=>{
          this.userMage.apprentice.status = "Smashed Jaw";
        }
      }
      else if(roll==20){
        this.apprenticeFunctionToCommit = ()=>{
          this.userMage.shoot -= 2;
          this.userMage.apprentice.status = "Lost Eye";
        }
      }
      this.actionLog.push(apprentice.name + ' was permanently injured. ');
    }
    else if(roll <=6){
      //Badly Wounded
      this.apprenticeFunctionToCommit = ()=>{
        apprentice.status = 'WOUNDED';
      }
      this.actionLog.push(apprentice.name + ' was badly wounded.');
    }
    else if(roll <=8){
      //Badly Wounded
      this.apprenticeFunctionToCommit = ()=>{
        for(let item of apprentice.items){
          apprentice.removeItemFromInventory(item);
        }
      }
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
      this.wizardKilled = true;
    }
    else if(roll <=4){
      //Permanent Injury
      //roll 1d20
      var roll = Math.floor(Math.random() * 20) + 1;
      if(roll <= 2){
        this.wizardFunctionToCommit = ()=>{
          this.userMage.move -= 0.5;
          this.userMage.status = "(Lost Toe)";
        };
      }
      else if(roll<=5){
        this.wizardFunctionToCommit = ()=>{
          this.userMage.move -= 1;
          this.userMage.status = "(Smashed Leg)";
        }
      }
      else if(roll<=10){
        this.wizardFunctionToCommit = ()=>{
          this.userMage.fight -= 1;
          this.userMage.status = "(Crushed Arm)";
        }
      }
      else if(roll<=12){
        this.wizardFunctionToCommit = ()=>{
          this.userMage.shoot -= 1;
          this.userMage.status = "(Lost Fingers)";
        }
      }
      else if(roll<=14){
        this.wizardFunctionToCommit = ()=>{
          this.userMage.health -= 1;
          this.userMage.status = "(Never Quite as Strong)";
        }
      }
      else if(roll<=16){
        this.wizardFunctionToCommit = ()=>{
          this.userMage.will -= 1;
          this.userMage.status = "(Psychological Scars)";
        }
      }
      else if(roll<=18){
        this.wizardFunctionToCommit = ()=>{
          this.userMage.health -= 3;
          this.userMage.status = "(Niggling Injury)";
        }
      }
      else if(roll==19){
        this.wizardFunctionToCommit = ()=>{
          for (var spell of this.userMage.spells){
            spell.castingNumber += 2;
          }
          this.userMage.status = "(Smashed Jaw)";
        }
      }
      else if(roll==20){
        this.wizardFunctionToCommit = ()=>{
          this.userMage.shoot -= 2;
          this.userMage.status = "(Lost Eye)";
        }
      }
      this.actionLog.push(this.userMage.name + ' was permanently injured. ');
    }
    else if(roll <=6){
      this.wizardFunctionToCommit = ()=>{
        //Badly Wounded
        this.userMage.status = 'WOUNDED';
      }
      this.actionLog.push(this.userMage.name + ' was badly wounded.');
    }
    else if(roll <=8){
      this.wizardFunctionToCommit = ()=>{
        this.userMage.items = new Array<Equipment>();
      }
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