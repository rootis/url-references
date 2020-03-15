import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FirebaseService } from '../../core/firebase.service';
import { Column, ReferenceService } from '../reference.service';

@Component({
  selector: 'app-main-entry',
  templateUrl: './main-entry.component.html',
  styleUrls: ['./main-entry.component.sass']
})
export class MainEntryComponent implements OnInit {

  code: string;

  constructor(
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
      }
    });
  }
}
