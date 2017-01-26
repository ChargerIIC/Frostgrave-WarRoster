/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ItemDialogModalComponent } from './item-dialog-modal.component';

describe('ItemDialogModalComponent', () => {
  let component: ItemDialogModalComponent;
  let fixture: ComponentFixture<ItemDialogModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDialogModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDialogModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
