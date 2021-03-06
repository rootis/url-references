import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { FirebaseService, ReferenceService } from '@services';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {

  columns: Column[];
  reference: object;

  constructor(
      public dialogRef: MatDialogRef<ModalComponent>,
      @Inject(MAT_DIALOG_DATA) public data: {
        columns: Column[],
        data: object
      },
      private firebaseService: FirebaseService,
      private referenceService: ReferenceService
  ) {
    this.columns = data.columns.filter(c => c.type !== 'VOTE' && c.type !== 'CHECKBOX');
    this.reference = JSON.parse(JSON.stringify(data.data));
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save() {
    this.firebaseService.save(this.referenceService.document, this.reference);
  }
}
