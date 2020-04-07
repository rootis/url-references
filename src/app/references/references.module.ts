import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';

import { ListComponent } from './list/list.component';
import { MainEntryComponent } from './main-entry/main-entry.component';
import { ModalComponent } from './modal/modal.component';
import { ReferencesRoutingModule } from './references-routing.module';
import { PreviewComponent } from './preview/preview.component';
import { InfoComponent } from './info/info.component';
import { DeleteConfirmationComponent } from './delete-confirmation/delete-confirmation.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [ListComponent, MainEntryComponent, ModalComponent, PreviewComponent, InfoComponent, DeleteConfirmationComponent, CheckboxComponent],
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
    MatCheckboxModule
  ],
  entryComponents: [
    ModalComponent,
    PreviewComponent
  ]
})
export class ReferencesModule { }
