import { Component, OnInit, Input } from '@angular/core';

import { ReferenceService } from '../reference.service';
import { FirebaseService } from '../../core/firebase.service';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.sass']
})
export class CheckboxComponent implements OnInit {
  @Input() reference: object;
  isChecked: boolean;

  constructor(
      private firebaseService: FirebaseService,
      private referenceService: ReferenceService
   ) { }

  ngOnInit(): void {
    this.isChecked = this.reference['corona'];
  }

  click(event): void {
    this.reference['corona'] = event.checked;
    this.save();
  }

  private save() {
    this.firebaseService.save(this.referenceService.document, this.reference);
  }
}
