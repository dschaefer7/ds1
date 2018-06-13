import {Component, Input, OnInit} from '@angular/core';
import {ImageModel} from '../../models/image.model';
import {ImageService} from '../../services/image.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  // @Input() imageModel: ImageModel;
  imageModel: ImageModel;

  constructor(private imageService: ImageService) {
  }

  ngOnInit() {
    this.imageModel = this.imageService.imageModel;
  }



}
