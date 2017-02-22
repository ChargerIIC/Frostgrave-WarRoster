import { HomeBase } from './homebase.model';
import { SpellBook } from './spellbook.model';
import { Mage } from './mage.model';

export class HomeBaseVault{

  public static baseOptions: HomeBase[];



  constructor(){
  }

  static loadhomeBasesIntoVault(){
    this.baseOptions = new Array<HomeBase>();

    var base = new HomeBase();
    base.name = 'None';
    base.description = 'Select a location for your home base.';
    base.applyEffect = function(userMage:Mage){};
    base.removeEffect = function(userMage:Mage){};
    this.baseOptions.push(base);

    base = new HomeBase();
    base.name = 'Inn';
    base.description = 'This old inn provides additional space for members of your warband. Warband maximum increases to 11';
    base.applyEffect = function(userMage:Mage){
      console.log("TODO: Add warband limit");
    };
    base.removeEffect = function(userMage:Mage){
      console.log("TODO: Reduce warband limit");
    };
    this.baseOptions.push(base);

    base = new HomeBase();
    base.name = 'Temple';
    base.description = 'Once a place of worship, these ruins project an aura of calm. +1 bonus to casting rolls for Miraculous Cure and Restore Life spells';
    base.applyEffect = function(userMage:Mage){
      var spell = SpellBook.getSpellByName('Miraculous Cure');
      var index = userMage.spells.indexOf(spell);
      if(index > 0)
      {
        userMage.spells[index].castingNumber -=2;
      }

      spell = SpellBook.getSpellByName('Restore Life');
      index = userMage.spells.indexOf(spell);
      if(index > 0)
      {
        userMage.spells[index].castingNumber -=2;
      }
    };
    base.removeEffect = function(userMage:Mage){
      var spell = SpellBook.getSpellByName('Miraculous Cure');
      var index = userMage.spells.indexOf(spell);
      if(index > 0)
      {
        userMage.spells[index].castingNumber +=2;
      }

      spell = SpellBook.getSpellByName('Restore Life');
      index = userMage.spells.indexOf(spell);
      if(index > 0)
      {
        userMage.spells[index].castingNumber +=2;
      }
    };

    this.baseOptions.push(base);

    base = new HomeBase();
    base.name = 'Crypt';
    base.description = 'While creepy, it does contain plenty of necromancy supplies. +2 to Raise Zombie spells';
    this.baseOptions.push(base);

    base = new HomeBase();
    base.name = 'Treasury';
    base.description = 'This treasury has several sealed vaults that have not been opened yet. At the end of each game, the warband may attempt to open one of the vaults. Roll 1d20. On a result of 2-18 you may add that many gold pieces to your inventory. On a 19 add 100 gold pieces. On a 20 a treasure is found and should be treated the same as a treasure found in game. On a 1 than a single warband member of the players choice is injured and cannot particpate in the next game.';
    this.baseOptions.push(base);

    base = new HomeBase();
    base.name = 'Brewery';
    base.description = 'The promise of well aged alcohol left in the brewery cheapens your recuritment costs. New warband members cost 5 gold pieces less and an extra 10 gold pieces is earned after each game.';
    this.baseOptions.push(base);

    base = new HomeBase();
    base.name = 'Library';
    base.description = 'A few useful tomes have surivied in this old library. Reading them gives the wizard an extra 20 experience points after each game.';
    this.baseOptions.push(base);

  }
}
