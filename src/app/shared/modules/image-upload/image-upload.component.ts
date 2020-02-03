import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bwm-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onImageLoad(event: any) {
    debugger
    const file = event.target.files[0];
    console.log(file);
  }

}
