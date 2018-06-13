import {Component, Input, OnInit} from '@angular/core';
import {ImageModel} from '../../models/image.model';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  @Input() imageModel: ImageModel;

  constructor() {
  }

  ngOnInit() {
  }



}
