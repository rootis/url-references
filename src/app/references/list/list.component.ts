import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Entity, FirebaseService } from '../../core/firebase.service';
import { Column, ColumnType, ReferenceService } from '../reference.service';
import { ModalComponent } from '../modal/modal.component';
import { PreviewComponent } from '../preview/preview.component';
import { AuthService } from '../../core/auth.service';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';
import { InfoComponent } from '../info/info.component';

interface VoteEntity extends Entity {
  votedPeople: {[key: string]: boolean};
  votes: number;
}

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
  isVoteColumn: boolean;
  resources: VoteEntity[];

  constructor(
      public dialog: MatDialog,
      private firebaseService: FirebaseService,
      private referenceService: ReferenceService,
      private route: ActivatedRoute,
      private authService: AuthService,
      private snackBar: MatSnackBar,
      private router: Router
  ) {
    this.code = this.route.snapshot.paramMap.get('code');
    if (referenceService.columns) {
      this.setValues(referenceService.columns, referenceService.resources as VoteEntity[]);
    } else {
      referenceService.document = firebaseService.getDocument(this.code);
    }
    referenceService.document.snapshotChanges().subscribe(
        ({payload}) =>
            this.setValues(payload.get('structure'), payload.get('list'))
    );
  }

  ngOnInit() {
  }

  isTextualColumn(type: ColumnType) {
    return type === ColumnType.TEXT ||
        type === ColumnType.TITLE ||
        type === ColumnType.DESCRIPTION;
  }

  delete(row: object) {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => result && this.firebaseService.delete(this.referenceService.document, row))
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

  vote(voteEntity: VoteEntity) {
    const email = this.authService.user?.email;

    if (email) {
      this.addVote(voteEntity, email);
    } else {
      this.authService.loginGoogle()
        .then(({ email }) => this.addVote(voteEntity, email))
        .catch(() => console.error('Login failed'));
    }
  }

  private addVote(voteEntity: VoteEntity, email: string) {
    if (!email) {
      console.error('Invalid email');
      return;
    }

    if (voteEntity.votedPeople) {
      if (voteEntity.votedPeople[email] === true) {
        this.showToast('Only one vote is allowed... :(');
        return;
      }
    } else {
      voteEntity.votedPeople = {};
    }

    voteEntity.votedPeople[email] = true;
    voteEntity.votes = Object.keys(voteEntity.votedPeople).length;

    this.firebaseService.update(this.referenceService.document, voteEntity)
      .then(() => this.showToast('Your vote was added! :)'))
      .catch(err => {
        this.showToast('Something went wrong... :(');
        console.log(err);
      });
  }

  private showToast(message: string) {
    this.snackBar.open(message, null, {
      duration: 4000,
      verticalPosition: 'top'
    });
  }

  private setValues(columns: Column[], resources: VoteEntity[]) {
    this.columns = columns;
    try{
      this.displayedColumns = ['no', ...columns.map(c => c.title), 'actions'];
      this.resources = resources.sort(this.compare);
      this.columns.forEach(({ type }) => {
        if (type === ColumnType.TEXT) {
          this.isTextColumn = true;
        } else if (type === ColumnType.VOTE) {
          this.isVoteColumn = true;
        }
      });
    }
    catch (error) {
      this.dialog.open(InfoComponent, {
        width: '350px'
      });
      this.router.navigate([`/`]);
    }
  }

  private compare(a: VoteEntity, b: VoteEntity) {
    a.votes = a.votes || 0;
    b.votes = b.votes || 0;

    return (a.votes < b.votes) ? 1 : a.votes > b.votes ? -1 : 0;
  }
}
