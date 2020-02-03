import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageUploadComponent } from './image-upload.component';
import { SpinnerModule } from '../spinner/spinner.module';



@NgModule({
  declarations: [
    ImageUploadComponent
  ],
  exports: [
    ImageUploadComponent
  ],
  imports: [
    CommonModule,
    SpinnerModule
  ]
})
export class ImageUploadModule { }
