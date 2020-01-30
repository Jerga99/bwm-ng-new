import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditableInputComponent } from './editable-input/editable-input.component';
import { FormsModule } from '@angular/forms';
import { EditableTextareaComponent } from './editable-textarea/editable-textarea.component';

@NgModule({
  declarations: [
    EditableInputComponent,
    EditableTextareaComponent
  ],
  exports: [
    EditableInputComponent,
    EditableTextareaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class EditableModule { }
