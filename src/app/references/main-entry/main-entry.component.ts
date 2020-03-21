import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { FirebaseService } from '../../core/firebase.service';
import { Column, ReferenceService } from '../reference.service';
import { InfoComponent } from '../info/info.component';

@Component({
  selector: 'app-main-entry',
  templateUrl: './main-entry.component.html',
  styleUrls: ['./main-entry.component.sass']
})
export class MainEntryComponent implements OnInit {

  code: string;

  constructor(
      public dialog: MatDialog,
      private firebaseService: FirebaseService,
      private referenceService: ReferenceService,
      private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  submit() {
    const document = this.firebaseService.getDocument(this.code);
    document.snapshotChanges().subscribe(result => {
      const structure: Column[] = result.payload.get('structure');
      if (structure) {
        this.referenceService.document = document;
        this.referenceService.columns = structure;
        this.referenceService.resources = result.payload.get('list');
        this.router.navigate([`/${this.code}`]);
      } else {
        this.dialog.open(InfoComponent, {
          width: '350px'
        });
      }
    });
  }
}
