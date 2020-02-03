import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageUploadComponent } from './image-upload.component';



@NgModule({
  declarations: [
    ImageUploadComponent
  ],
  exports: [
    ImageUploadComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ImageUploadModule { }
