import { Component, OnInit, OnDestroy } from '@angular/core';
import { ImageUploadService } from './image-upload.service';


class ImageSnippet {
  src: string;
  file: File;
  status: string;

  constructor(file?: File) {
    this.file = file;
    this.status = 'INIT';
  }
}


@Component({
  selector: 'bwm-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit, OnDestroy {

  selectedImage: ImageSnippet;

  private fileReader = new FileReader();

  constructor(private imageService: ImageUploadService) { }

  ngOnInit() {
    this.listenToFileLoading();
  }

  ngOnDestroy() {
    this.removeFileLoadListener();
  }

  uploadImage() {
    this.selectedImage.status = 'PENDING';

    this.imageService
      .uploadImage(this.selectedImage.file)
      .subscribe((uploadedImage: any) => {
        console.log(uploadedImage);
        this.selectedImage.status = 'UPLOADED';
      }, () => {
        this.selectedImage.status = 'ERROR';
      })
  }

  cancelImage(fileInput: any) {
    this.selectedImage = null;
    fileInput.value = null;
  }

  onImageLoad(event: any) {
    const file = event.target.files[0];
    
    this.selectedImage = new ImageSnippet(file);
    // this will fire 'load' event
    this.fileReader.readAsDataURL(file);
  }

  private handleImageLoad = (event: any) => {
    const { result } = event.target;
    this.selectedImage.src = result;
    this.selectedImage.status = 'LOADED';
  }

  private listenToFileLoading() {
    this.fileReader.addEventListener('load', this.handleImageLoad);
  }

  private removeFileLoadListener() {
    this.fileReader.removeEventListener('load', this.handleImageLoad);
  }
}
