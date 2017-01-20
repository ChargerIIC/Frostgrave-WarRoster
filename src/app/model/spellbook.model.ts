import { Spell } from './spell.model';

export class SpellBook{
  public static spells: Spell[] = new Array<Spell>();

  constructor(){
  }

  static loadSpellsIntoSpellbook(){
    var spell = new Spell();
    spell.name = "Crumble";
    spell.description = "This spell only works against man-made structures such as buildings and walls. The spellcaster rapidly speeds up the passing of time in a small area of the structure, causing it to collapse. This can effectively create a doorway-sized hole through any wall, which should be indicated on the table somehow. The spell can also be used to collapse a section of floor beneath a figure standing on a level above the ground. In this case, the figure about to be affected must pass a Will roll versus the casting roll, or fall to the next level down and taking damage appropriately.";
    spell.school = "Chronomancer";
    spell.castingNumber = 10;
    spell.range = "LOS";
    SpellBook.spells[0] = spell;

    spell = new Spell();
    spell.name = "Decay";
    spell.description = "The spellcaster selects and attacks a target’s weapon, causing it to decay and fall apart, rendering it useless for the rest of the game. This spell has no effect on magic weapons (even those only temporarily enchanted).";
    spell.school = "Chronomancer";
    spell.castingNumber = 12;
    spell.range = "LOS";
    SpellBook.spells[1] = spell;

    spell = new Spell();
    spell.name = "Fast Act";
    spell.description = "The target figure will act first next turn, in a special phase before either player’s wizard phase. If this spell is cast multiple times in the same turn, all figures so affected will act in this special phase, starting with the last figure to have had Fast Act cast upon it, and concluding with the first.";
    spell.school = "Chronomancer";
    spell.castingNumber = 8;
    spell.range = "LOS";
    SpellBook.spells[2] = spell;

    spell = new Spell();
    spell.name = "Fleet Feet";
    spell.description = "Target receives +2 Move for the rest of the game. Multiple castings of Fleet Feet on the same target have no effect.";
    spell.school = "Chronomancer";
    spell.castingNumber = 10;
    spell.range = "LOS";
    SpellBook.spells[3] = spell;

    spell = new Spell();
    spell.name = "Petrify";
    spell.description = "The target is temporarily frozen solid and may take no actions on its next activation. After the next activation, the figure may move as normal. The target may attempt to resist this spell by succeeding with a Will roll versus the casting roll.";
    spell.school = "Chronomancer";
    spell.castingNumber = 12;
    spell.range = "LOS";
    SpellBook.spells[4] = spell;

    spell = new Spell();
    spell.name = "Slow";
    spell.description = "The target must pass a Will roll or be reduced to one action per activation. After each activation, the target may attempt another Will roll versus the original casting roll, in order to shake off the effects of the spell. Otherwise, its effects last until the end of the game. Multiple castings of this spell on the same target have no effect.";
    spell.school = "Chronomancer";
    spell.castingNumber = 12;
    spell.range = "LOS";
    SpellBook.spells[5] = spell;

    spell = new Spell();
    spell.name = "Time Store";
    spell.description = "The spellcaster captures a fragment of his own present to save for future use. To cast this spell, the spellcaster must be able to take two actions during the turn. He must spend the first action casting Time Store. If successful, the second action is lost. This spellcaster is now considered to have a stored ‘extra action’ that he may use in a future turn. This action can only be used while the spellcaster is taking his normal actions for the turn, essentially giving him three actions in that turn. A spellcaster may only ever have one stored action at any time.";
    spell.school = "Chronomancer";
    spell.castingNumber = 14;
    spell.range = "SELF";
    SpellBook.spells[6] = spell;

    spell = new Spell();
    spell.name = "Time Walk";
    spell.description = "The spellcaster is allowed to activate, with the usual two actions, for a second time in the turn – during the soldier phase. If a spellcaster fails to cast this spell, he suffers 2 damage in addition to any other damage for failing to cast the spell. A spellcaster cannot cast Time Walk if he is currently using Time Store.";
    spell.school = "Chronomancer";
    spell.castingNumber = 18;
    spell.range = "SELF";
    SpellBook.spells[7] = spell;

    spell = new Spell();
    spell.name = "Call Storm";
    spell.description = "If this spell is successfully cast, all bow and crossbow attacks are -1 for the rest of the game. This spell may be cast multiple times (and by multiple spellcasters), with each additional casting increasing the penalty by a further -1, up to a maximum penalty of -10.";
    spell.school = "Elementalist";
    spell.castingNumber = 12;
    spell.range = "AREA";
    SpellBook.spells[8] = spell;

    spell = new Spell();
    spell.name = "Destructive Sphere";
    spell.description = "Every figure within 3” of the spellcaster suffers a +5 attack.";
    spell.school = "Elementalist";
    spell.castingNumber = 12;
    spell.range = "AREA";
    SpellBook.spells[9] = spell;

    spell = new Spell();
    spell.name = "Elemental Ball";
    spell.description = "The spellcaster chooses an enemy figure within 24” and line of sight and hurls a ball of destructive elemental energy at it. The target, and every figure (including friendly ones) within 1.5 inches and line of sight of the target, immediately suffers a +5 shooting attack (roll each attack separately). This spell may not target an enemy figure that is even partially obscured by another figure.";
    spell.school = "Elementalist";
    spell.castingNumber = 12;
    spell.range = "LOS";
    SpellBook.spells[10] = spell;

    spell = new Spell();
    spell.name = "Elemental Bolt";
    spell.description = "The spellcaster may make an immediate +8 shooting attack against any figure in line of sight.";
    spell.school = "Elementalist";
    spell.castingNumber = 12;
    spell.range = "LOS";
    SpellBook.spells[11] = spell;

    spell = new Spell();
    spell.name = "Elemental Hammer";
    spell.description = "This spell is cast upon a weapon. The next time this weapon causes at least 1 point of damage, it inflicts an additional 5 points of damage.";
    spell.school = "Elementalist";
    spell.castingNumber = 10;
    spell.range = "LOS";
    SpellBook.spells[12] = spell;

    spell = new Spell();
    spell.name = "Elemental Shield";
    spell.description = "The spellcaster forms a floating shield to protect himself. This shield absorbs the next 3 points of damage against the spellcaster from any source. Once 3 points have been absorbed the shield vanishes. A spellcaster may only have one Elemental Shield active at any time.";
    spell.school = "Elementalist";
    spell.castingNumber = 10;
    spell.range = "SELF";
    SpellBook.spells[13] = spell;

    spell = new Spell();
    spell.name = "Scatter Shot";
    spell.description = "The spellcaster may make one +0 attack against every enemy figure (either from an opposing warband or a creature) within 12”. This may include enemy figures in combat, although the normal rules for shooting into combat are followed in this case.";
    spell.school = "Elementalist";
    spell.castingNumber = 12;
    spell.range = "AREA";
    SpellBook.spells[14] = spell;

    spell = new Spell();
    spell.name = "Wall";
    spell.description = "This spell creates an impenetrable 6”-long, 3”-high wall within 6” of the spellcaster. At the end of each following turn, roll a d20 – on a 17+ the wall vanishes.";
    spell.school = "Elementalist";
    spell.castingNumber = 10;
    spell.range = "LOS";
    SpellBook.spells[15] = spell;

  }
}
