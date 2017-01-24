import { Spell } from './spell.model';

export class SpellBook{
  public static spells: Spell[] = new Array<Spell>();

  public static schools: string[] = ['Chronomancer', 'Elementalist', 'Enchanter', 'Illusionist'];

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

    spell = new Spell();
    spell.name = "Animate Construct";
    spell.description = "It is assumed that the spellcaster has built a construct prior to using this spell to animate it. If the spell is successfully cast, the construct immediately becomes a member of the warband, taking the place of a soldier. A spellcaster may declare that he is attempting to animate a construct of any size (Small, Medium or Large – see Chapter 6: Bestiary), but the larger the construct, the harder it is to animate, so the following modifiers are applied to his roll to cast the spell: Small -0, Medium -3, Large -6.";
    spell.school = "Enchanter";
    spell.castingNumber = 8;
    spell.range = "NA";
    SpellBook.spells[16] = spell;

    spell = new Spell();
    spell.name = "Control Construct";
    spell.description = "If successfully cast, the target construct must make an immediate Will roll versus the casting roll. If the roll fails, the spellcaster gains control of the construct for the rest of the game. A spellcaster may only control one construct at a time.";
    spell.school = "Enchanter";
    spell.castingNumber = 12;
    spell.range = "LOS";
    SpellBook.spells[17] = spell;

    spell = new Spell();
    spell.name = "Embed Enchantment";
    spell.description = "This spell causes any Enchant Armour or Enchant Weapon spell that is still active at the end of a game, to become permanent, and the weapon or armour in question to become a magic item. Alternatively, a spellcaster may cast either of those spells after a game (even though neither are usually an Out of Game spell), immediately followed by Embed Enchantment. If both spells are successful, the item becomes permanently enchanted.";
    spell.school = "Enchanter";
    spell.castingNumber = 12;
    spell.range = "NA";
    SpellBook.spells[18] = spell;

    spell = new Spell();
    spell.name = "Enchant Armour";
    spell.description = "The armour worn by the target now counts as magic armour and grants a +1 to Armour for the rest of the game. Multiple castings of this spell on the same target have no effect.";
    spell.school = "Enchanter";
    spell.castingNumber = 8;
    spell.range = "LOS";
    SpellBook.spells[19] = spell;

    spell = new Spell();
    spell.name = "Enchant Weapon";
    spell.description = "A target weapon is given a temporary magic boost by the spellcaster. Melee weapons affected by this spell count as magic weapons and give their users +1 Fight for the rest of the game. Bows and crossbows targeted by the spell give +1 Shoot instead, but do not count as magic weapons. Multiple castings of this spell on the same weapon have no effect. Alternatively, the spell can be used to enchant one arrow or quarrel. This gives +1 Shoot and counts as a magic weapon, but only for the next shot. A bow or crossbow boosted by Enchant Weapon may be used to fire arrows or quarrels similarly enchanted, and the bonuses stack.";
    spell.school = "Enchanter";
    spell.castingNumber = 8;
    spell.range = "LOS";
    SpellBook.spells[20] = spell;

    spell = new Spell();
    spell.name = "Grenade";
    spell.description = "The spellcaster takes an object, commonly a simple rock, imbues it with magic energy and throws it at his target,whereupon it explodes into hundreds of fragments. The caster picks a target point within 12”. Every figure, including allies, within 1.5” of that point immediately suffers a +3 shooting attack.";
    spell.school = "Enchanter";
    spell.castingNumber = 10;
    spell.range = "LOS";
    SpellBook.spells[21] = spell;

    spell = new Spell();
    spell.name = "Strength";
    spell.description = "The target receives +2 Fight for the rest of the game. Multiple Strength spells on the same target have no effect.";
    spell.school = "Enchanter";
    spell.castingNumber = 10;
    spell.range = "LOS";
    SpellBook.spells[22] = spell;

    spell = new Spell();
    spell.name = "Telekinesis";
    spell.description = "The spellcaster may move any currently unclaimed treasure within 24” by up to 6” in any direction. As long as he can maintain line of sight to the treasure, he can move it over any terrain or obstacle. If the treasure moves out of line of sight, it immediately falls straight to the ground.";
    spell.school = "Enchanter";
    spell.castingNumber = 8;
    spell.range = "LOS";
    SpellBook.spells[23] = spell;

    spell = new Spell();
    spell.name = "Beauty";
    spell.description = "This spell causes all humans (i.e. anything not found in Chapter 6: Bestiary) who look at the spellcaster to see a paragon of beauty. Anyone wishing to attack the spellcaster must first pass a Will roll versus the casting roll. Failing this Will roll does not cause the would-be attacker to lose an action. Any model magically compelled to fight the target must also pass a Will roll or suffer -1 to its Fight stat.";
    spell.school = "Illusionist";
    spell.castingNumber = 10;
    spell.range = "SELF";
    SpellBook.spells[1] = spell;

    spell = new Spell();
    spell.name = "Fool's Gold";
    spell.description = "This spell allows the spellcaster to place one additional treasure token before the start of the game. However, he must also secretly note down which of the treasures he has placed is the Fool’s Gold. When any figure comes into contact with the Fool’s Gold, the treasure token immediately vanishes and is removed from the game.";
    spell.school = "Illusionist";
    spell.castingNumber = 8;
    spell.range = "NA";
    SpellBook.spells[1] = spell;

    spell = new Spell();
    spell.name = "Glow";
    spell.description = "A brightly glowing light surrounds the target figure. For the rest of the game, all shooting attacks against this figure are at +3. Multiple Glow spells on the same target have no effect.";
    spell.school = "Illusionist";
    spell.castingNumber = 10;
    spell.range = "LOS";
    SpellBook.spells[1] = spell;

    spell = new Spell();
    spell.name = "Illusionary Soldier";
    spell.description = "Causes an illusionary soldier to join the warband for the next battle. This soldier can be of any type. This soldier cannot pick up treasure, nor can it deal damage. If the soldier ever suffers damage of any type, it is removed. A warband may only have one illusionary soldier at any given time.";
    spell.school = "Illusionist";
    spell.castingNumber = 12;
    spell.range = "NA";
    SpellBook.spells[1] = spell;

    spell = new Spell();
    spell.name = "Invisibility";
    spell.description = "The target figure becomes invisible and may not be attacked or targeted by spells (although he may still be affected by area effects, such as the blast radius of a Grenade spell). The effects of this spell last until the target attacks, casts a spell, or picks up an item of treasure. The spell can be cast on a figure already carrying treasure, rendering both invisible.";
    spell.school = "Illusionist";
    spell.castingNumber = 12;
    spell.range = "TCH";
    SpellBook.spells[1] = spell;

    spell = new Spell();
    spell.name = "Monstrous Form";
    spell.description = "Any figure wishing to move into contact with the spellcaster must make an immediate Will roll versus the casting roll. If failed, the figure sees a hideous creature instead of the spellcaster and is too scared to attack – he may only make a move that takes him further away. A spellcaster may not have Beauty and Monstrous Form cast at the same time. Undead, constructs, and demons are immune to Monstrous Form.";
    spell.school = "Illusionist";
    spell.castingNumber = 8;
    spell.range = "SELF";
    SpellBook.spells[1] = spell;

    spell = new Spell();
    spell.name = "Teleport";
    spell.description = "The spellcaster immediately moves to any location within line of sight, but may take no other action this turn. This spell may not be used to enter combat.";
    spell.school = "Illusionist";
    spell.castingNumber = 10;
    spell.range = "SELF";
    SpellBook.spells[1] = spell;

    spell = new Spell();
    spell.name = "Transpose";
    spell.description = "This spell switches the position of two figures on the board. The two figures being transposed must be within 10” of each other and both must be within line of sight of the spellcaster. The spellcaster may cast Transpose to switch himself with another figure. If he attempts to transpose an enemy figure (either a creature or member of a rival warband), they may each make a Will roll versus the casting roll. If even one succeeds with this Will roll, the spell fails. This spell may target figures in combat.";
    spell.school = "Illusionist";
    spell.castingNumber = 12;
    spell.range = "LOS";
    SpellBook.spells[1] = spell;

  }
}
