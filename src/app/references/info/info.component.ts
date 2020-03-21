import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.sass']
})
export class InfoComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<InfoComponent>
  ) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close();
  }
}
