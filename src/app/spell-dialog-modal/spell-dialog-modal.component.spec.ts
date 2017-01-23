/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SpellDialogModalComponent } from './spell-dialog-modal.component';

import { Mage } from '../model/mage.model';
import { Spell } from '../model/spell.model';
import { SpellBook } from '../model/spellbook.model';

describe('SpellDialogModalComponent', () => {
  let component: SpellDialogModalComponent;
  let fixture: ComponentFixture<SpellDialogModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SpellDialogModalComponent,
        Mage,
        Spell,
        SpellBook
       ],
     imports: [
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellDialogModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
