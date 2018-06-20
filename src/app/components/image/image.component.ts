import {Component, Input, OnInit} from '@angular/core';
import {ImageModel} from '../../models/image.model';
import {ImageService} from '../../services/image.service';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  // @Input() imageModel: ImageModel;
  imageModel: ImageModel;
  image: any;

  constructor(private imageService: ImageService,
              private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.imageModel = this.imageService.imageModel;
  }

  setImage(event) {
    this.imageModel = event;
  }


}
