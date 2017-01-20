import { Spell } from './spell.model';

export class SpellBook{
  public static spells: Spell[] = new Array<Spell>();

  constructor(){
    //SpellBook.spells[0] = new Spell();
  }

  static loadSpellsIntoSpellbook(){
    var spell = new Spell();
    spell.name = "Crumble";
    spell.description = "This spell only works against man-made structures such as buildings and walls. The spellcaster rapidly speeds up the passing of time in a small area of the structure, causing it to collapse. This can effectively create a doorway-sized hole through any wall, which should be indicated on the table somehow. The spell can also be used to collapse a section of floor beneath a figure standing on a level above the ground. In this case, the figure about to be affected must pass a Will roll versus the casting roll, or fall to the next level down and taking damage appropriately.";
    spell.school = "Chronomancer";
    spell.castingNumber = 10;
    SpellBook.spells[0] = spell;

    spell = new Spell();
    spell.name = "Decay";
    spell.description = "The spellcaster selects and attacks a target’s weapon, causing it to decay and fall apart, rendering it useless for the rest of the game. This spell has no effect on magic weapons (even those only temporarily enchanted).";
    spell.school = "Chronomancer";
    spell.castingNumber = 12;
    SpellBook.spells[1] = spell;
  }
}
