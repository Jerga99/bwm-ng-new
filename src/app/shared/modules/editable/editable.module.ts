import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditableInputComponent } from './editable-input/editable-input.component';

@NgModule({
  declarations: [
    EditableInputComponent
  ],
  exports: [
    EditableInputComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EditableModule { }
