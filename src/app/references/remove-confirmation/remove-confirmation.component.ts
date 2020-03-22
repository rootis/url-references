import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-remove-confirmation',
  templateUrl: './remove-confirmation.component.html',
  styleUrls: ['./remove-confirmation.component.sass']
})
export class RemoveConfirmationComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<RemoveConfirmationComponent>,
  ) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  /*removeClick(): void {
    this.dialogRef.close();
  }*/
}
