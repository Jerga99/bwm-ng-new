import { Component, OnInit, OnDestroy } from '@angular/core';


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

  constructor() { }

  ngOnInit() {
    this.listenToFileLoading();
  }

  ngOnDestroy() {
    this.removeFileLoadListener();
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
