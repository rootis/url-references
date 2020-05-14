import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { FirebaseService, ReferenceService } from '@services';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.sass']
})
export class CheckboxComponent implements OnInit {

  @Input() reference: object;
  @Input() isChecked: boolean;
  @Output() isCheckedChange = new EventEmitter<boolean>();

  constructor(
    private firebaseService: FirebaseService,
    private referenceService: ReferenceService
  ) {}

  ngOnInit(): void {
  }

  onChange() {
    this.isCheckedChange.emit(this.isChecked);
    this.firebaseService.save(this.referenceService.document, this.reference);
  }
}
