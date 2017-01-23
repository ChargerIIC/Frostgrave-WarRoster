/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WizardSpellsPanelComponent } from './wizard-spells-panel.component';

import { Mage } from '../model/mage.model';
import { Spell } from '../model/spell.model';
import { SpellBook } from '../model/spellbook.model';

describe('WizardSpellsPanelComponent', () => {
  let component: WizardSpellsPanelComponent;
  let fixture: ComponentFixture<WizardSpellsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        WizardSpellsPanelComponent,
        Mage,
        Spell,
        SpellBook
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardSpellsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
