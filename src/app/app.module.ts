import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { WizardSummaryPanelComponent } from './wizard-summary-panel/wizard-summary-panel.component';
import { WizardStatsPanelComponent } from './wizard-stats-panel/wizard-stats-panel.component';
import { WizardSpellsPanelComponent } from './wizard-spells-panel/wizard-spells-panel.component';
import { WizardEquipmentPanelComponent } from './wizard-equipment-panel/wizard-equipment-panel.component';
import { WizardHomebasePanelComponent } from './wizard-homebase-panel/wizard-homebase-panel.component';
import { WizardWarbandPanelComponent } from './wizard-warband-panel/wizard-warband-panel.component';

import { SpellDialogModalComponent } from './spell-dialog-modal/spell-dialog-modal.component';
import { ItemDialogModalComponent } from './item-dialog-modal/item-dialog-modal.component';
import { WarbandDialogModalComponent } from './warband-dialog-modal/warband-dialog-modal.component';
import { LevelupDialogModalComponent } from './levelup-dialog-modal/levelup-dialog-modal.component';
import { GameresultsDialogModalComponent } from './gameresults-dialog-modal/gameresults-dialog-modal.component';

import { Mage } from './model/mage.model';

@NgModule({
  declarations: [
    AppComponent,
    WizardSummaryPanelComponent,
    WizardStatsPanelComponent,
    WizardSpellsPanelComponent,
    WizardEquipmentPanelComponent,
    SpellDialogModalComponent,
    ItemDialogModalComponent,
    WizardWarbandPanelComponent,
    WarbandDialogModalComponent,
    WizardHomebasePanelComponent,
    LevelupDialogModalComponent,
    GameresultsDialogModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
