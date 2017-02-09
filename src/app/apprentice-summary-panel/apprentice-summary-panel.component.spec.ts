/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ApprenticeSummaryPanelComponent } from './apprentice-summary-panel.component';

describe('ApprenticeSummaryPanelComponent', () => {
  let component: ApprenticeSummaryPanelComponent;
  let fixture: ComponentFixture<ApprenticeSummaryPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApprenticeSummaryPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprenticeSummaryPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
