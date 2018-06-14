import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ImageService} from '../../services/image.service';
import {ImageModel} from '../../models/image.model';
import {SpinnerService} from '../spinner/spinner.service';

@Component({
  selector: 'app-no-image-available',
  templateUrl: './no-image-available.component.html',
  styleUrls: ['./no-image-available.component.scss']
})
export class NoImageAvailableComponent implements OnInit {
  @Input() sonum;
  @Output() takenPhotoEvent: EventEmitter<ImageModel> = new EventEmitter();

  imageModels: ImageModel[];
  imageModel: ImageModel;

  showSpinner = false;

  constructor(private imageService: ImageService,
              protected spinner: SpinnerService) {
    this.spinner.show('spinnerCard');
  }

  ngOnInit() {
    this.getTakenPhoto();
  }

  async getTakenPhoto() {

    this.showSpinner = true;
    this.sonum = '1';
    await this.delay(1000);

    // this.imageService.savePhotoFromArticle(this.sonum)
    //   .subscribe(
    //     (data: ImageModel[]) => {
    //       this.imageModels = {
    //         ...data,
    //       };
    //       this.imageModel = this.imageModels[0];
    //       //console.log(this.imageModels);
    //
    //       //this.showSpinner = false;
    //
    //
    //       this.takenPhotoEvent.emit(this.imageModel);
    //       //this.showSpinner = false;
    //     },
    //     (error) => {
    //       console.log('ZOPAAAA', error);
    //       this.showSpinner = false;
    //     }
    //   );


  }


  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


}
