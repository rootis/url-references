import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatDialogModule,
  MatSnackBarModule,
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
import { PreviewComponent } from './preview/preview.component';

@NgModule({
  declarations: [ListComponent, MainEntryComponent, ModalComponent, PreviewComponent],
  exports: [
    ListComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    ReferencesRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatMenuModule,
  ],
  entryComponents: [
    ModalComponent,
    PreviewComponent
  ]
})
export class ReferencesModule { }
