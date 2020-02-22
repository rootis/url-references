import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatTableModule
} from '@angular/material';

import { ListComponent } from './list/list.component';
import { MainEntryComponent } from './main-entry/main-entry.component';
import { ModalComponent } from './modal/modal.component';
import { ReferencesRoutingModule } from './references-routing.module';

@NgModule({
  declarations: [ListComponent, MainEntryComponent, ModalComponent],
  exports: [
    ListComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    ReferencesRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatMenuModule,
  ],
  entryComponents: [
    ModalComponent
  ]
})
export class ReferencesModule { }
