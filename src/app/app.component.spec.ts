/* tslint:disable:no-unused-variable */
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { WizardSummaryPanelComponent } from './wizard-summary-panel/wizard-summary-panel.component';
import { WizardStatsPanelComponent } from './wizard-stats-panel/wizard-stats-panel.component';
import { WizardSpellsPanelComponent } from './wizard-spells-panel/wizard-spells-panel.component';
import { WizardEquipmentPanelComponent } from './wizard-equipment-panel/wizard-equipment-panel.component';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
          AppComponent,
          WizardSummaryPanelComponent,
          WizardStatsPanelComponent,
          WizardSpellsPanelComponent,
          WizardEquipmentPanelComponent
        ],
      imports: [
          BrowserModule,
          FormsModule,
          HttpModule
        ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Frostgrave WarRoster'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Frostgrave WarRoster');
  }));

  it('should render summary panel', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-wizard-summary-panel')).toBeTruthy();
  }));
});
