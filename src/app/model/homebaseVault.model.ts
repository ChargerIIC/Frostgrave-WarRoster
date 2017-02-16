import { HomeBase } from './homebase.model';

export class HomeBaseVault{

  public static baseOptions: HomeBase[];



  constructor(){
  }

  static loadhomeBasesIntoVault(){
    this.baseOptions = new Array<HomeBase>();

    var base = new HomeBase();
    base.name = 'None';
    base.description = 'Select a location for your home base.';
    this.baseOptions.push(base);

    base = new HomeBase();
    base.name = 'Inn';
    base.description = 'This old inn provides additional space for members of your warband. Warband maximum increases to 11';
    this.baseOptions.push(base);

    base = new HomeBase();
    base.name = 'Temple';
    base.description = 'Once a place of worship, these ruins project an aura of calm. +1 bonus to casting rolls for Miraculous Cure and Restore Life spells';
    this.baseOptions.push(base);
  }
}
