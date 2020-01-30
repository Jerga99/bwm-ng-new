import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bwm-editable-input',
  templateUrl: './editable-input.component.html',
  styleUrls: ['./editable-input.component.scss']
})
export class EditableInputComponent implements OnInit {

  @Input('entity') entity: any;
  @Input('className') className: string;
  @Input('type') type = 'text';

  @Input('field') set field(entityField: string) {
    this.entityField = entityField;
  }

  entityField: string;

  constructor() { }

  ngOnInit() {
  }

}
