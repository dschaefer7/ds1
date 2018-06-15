import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ImageService} from '../../services/image.service';
import {ImageModel} from '../../models/image.model';
import {SpinnerService} from '../spinner/spinner.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-no-image-available',
  templateUrl: './no-image-available.component.html',
  styleUrls: ['./no-image-available.component.scss']
})
export class NoImageAvailableComponent implements OnInit {
  @Output() takenPhotoEvent: EventEmitter<ImageModel> = new EventEmitter();

  imageModel: ImageModel;
  sonum: number;

  showSpinner = false;

  constructor(private imageService: ImageService,
              protected spinner: SpinnerService,
              private router: Router,
              private route: ActivatedRoute) {
    this.spinner.show('spinnerNoImage');
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.sonum = +params['id'];
      this.getTakenPhoto();
    });

  }

  async getTakenPhoto() {
    this.showSpinner = true;
    await this.delay(1000);
    this.imageService.getNewTakenPhoto(this.sonum.toString())
      .subscribe(
        (data: ImageModel) => {
          this.imageModel = {
            ...data,
          };
          // this.takenPhotoEvent.emit(this.imageModel);
          this.showSpinner = false;

          console.log(this.imageModel);

          this.imageService.imageModel = this.imageModel;
          this.router.navigate(['new-image']);
        },
        (error: HttpErrorResponse) => {
          console.log('Error from new-image-component', error);

          if (error.status === 504) {
            this.imageService.deleteNewPhoto();
          }

          this.showSpinner = false;
        }
      );


  }


  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


}
