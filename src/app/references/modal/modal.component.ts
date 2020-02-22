import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Column, ReferenceService } from '../reference.service';
import { FirebaseService } from '../../core/firebase.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {

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
    this.reference = JSON.parse(JSON.stringify(data.data));
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  save() {
    this.firebaseService.delete(this.referenceService.document, this.data.data);
    this.firebaseService.add(this.referenceService.document, this.reference);
  }
}
