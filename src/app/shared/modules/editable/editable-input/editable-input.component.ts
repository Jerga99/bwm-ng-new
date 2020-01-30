import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'bwm-editable-input',
  templateUrl: './editable-input.component.html',
  styleUrls: ['./editable-input.component.scss']
})
export class EditableInputComponent {

  @Output('entityUpdated') entityUpdated = new EventEmitter();

  @Input('entity') entity: any;
  @Input('className') className: string;
  @Input('type') type = 'text';
  @Input('inline') inline = false;

  @Input('field') set field(entityField: string) {
    this.entityField = entityField;
    this.setOriginValue();
  }

  entityField: string;
  originEntityValue: any;
  isActiveInput = false;

  updateEntity() {
    if (this.entityValue !== this.originEntityValue) {
      this.entityUpdated.emit({
        data: { [this.entityField]: this.entityValue },
        notifier: this.inputNotifier
      })
    }
  }

  inputNotifier = (error: any) => {
    if (error) {
      this.cancelUpdate();
      return;
    }

    this.setOriginValue();
    this.isActiveInput = false;
  }

  cancelUpdate() {
    this.entityValue = this.originEntityValue;
    this.isActiveInput = false; 
  }

  private setOriginValue() {
    this.originEntityValue = this.entityValue;
  }

  private set entityValue(value: any) {
    this.entity[this.entityField] = value;
  }

  private get entityValue() {
    return this.entity[this.entityField];
  }
  
}
