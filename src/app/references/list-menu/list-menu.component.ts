import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.sass']
})
export class ListMenuComponent implements OnInit {

  isActive: boolean;

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.isActive = true;  //For development
  }

  deactivateList() {
    this.isActive = false;
    alert("List deactivated");
  }

  activateList() {
    this.isActive = true;
    alert("List activated");
  }

  delete() {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => result && alert("List deleted"));  //remove entry from firebase at this line
  }
}