import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Mage } from '../model/mage.model';

import { WizardStatsPanelComponent } from './wizard-stats-panel.component';

describe('WizardStatsPanelComponent', () => {
  let component: WizardStatsPanelComponent;
  let fixture: ComponentFixture<WizardStatsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations:
      [
        WizardStatsPanelComponent
      ],
      imports:
      [
        BrowserModule,
        FormsModule,
        HttpModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardStatsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
