import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditableInputComponent } from './editable-input/editable-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EditableInputComponent
  ],
  exports: [
    EditableInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class EditableModule { }
