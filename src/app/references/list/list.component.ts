import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { FirebaseService } from '../../core/firebase.service';
import { Column, ColumnType, ReferenceService } from '../reference.service';
import { MatDialog } from '@angular/material';
import { ModalComponent } from '../modal/modal.component';
import { PreviewComponent } from '../preview/preview.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {

  displayedColumns: string[];
  code: string;
  columns: Column[];
  isTextColumn: boolean;
  resources: object[];

  constructor(
      public dialog: MatDialog,
      private firebaseService: FirebaseService,
      private referenceService: ReferenceService,
      private route: ActivatedRoute
  ) {
    this.code = this.route.snapshot.paramMap.get('code');
    if (referenceService.columns) {
      this.initValues(referenceService.columns, referenceService.resources);
    } else {
      referenceService.document = firebaseService.getDocument(this.code);
    }
    referenceService.document.snapshotChanges().subscribe(
        ({payload}) =>
            this.initValues(payload.get('structure'), payload.get('list'))
    );
  }

  ngOnInit() {
  }

  delete(row: object) {
    this.firebaseService.delete(this.referenceService.document, row);
  }

  add() {
    this.dialog.open(ModalComponent, {
      width: this.isTextColumn ? '500px' : '350px',
      data: {
        columns: this.columns,
        data: {}
      }
    });
  }

  edit(row: object) {
    this.dialog.open(ModalComponent, {
      width: this.isTextColumn ? '500px' : '350px',
      data: {
        columns: this.columns,
        data: row
      }
    });
  }

  view(content: string) {
    this.dialog.open(PreviewComponent, {
      width: '80%',
      data: {
        content
      }
    });
  }

  private initValues(columns: Column[], resources: object[]) {
    this.columns = columns;
    this.displayedColumns = ['no', ...columns.map(c => c.title), 'actions'];
    this.resources = resources;
    this.isTextColumn = !!this.columns.find(c => c.type === ColumnType.TEXT);
  }
}
