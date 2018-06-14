import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ImageModel} from '../../models/image.model';
import {ImageService} from '../../services/image.service';
import {SpinnerService} from '../spinner/spinner.service';
import {Router} from '@angular/router';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-barcode-input',
  templateUrl: './barcode-input.component.html',
  styleUrls: ['./barcode-input.component.scss']
})
export class BarcodeInputComponent implements OnInit {


  showSpinner = false;
  imageModel: ImageModel;

  @Output() imageAvailable = new EventEmitter<ImageModel>();

  @ViewChild('query') input;

  constructor(
    private router: Router,
    private sanitizer: DomSanitizer,
    private imageService: ImageService,
    protected spinner: SpinnerService) {
  }

  ngOnInit() {
  }


  async checkPhotoExist(e, articleId: string) {
    e.preventDefault();

    if (e.keyCode === 13) {
      if (!articleId) {
        console.log('input invalid!!!');
        return;
      }

      this.showSpinner = true;
      this.imageModel = null;

      await this.delay(1000);

      this.imageService.getImage(articleId)
      // if (this.imageModel == null) {
      //   this.showSpinner = false;
      //   return;
      // }
      // if (this.imageModel.imageExist) {
      //   this.imageService.imageModel = this.imageModel;
      //   this.imageAvailable.emit(this.imageModel);
      //   this.router.navigate(['image-exist']);
      // } else {
      //   this.router.navigate(['make-photo']);
      // }
      //
      // this.showSpinner = false;

      .subscribe(
        (data: ImageModel) => {
          // this.imageModel = {
          //   sonum: articleId,
          //   src: 'http://imageservice.xip.io:80/api/v1/mapping/image/6000000814000010'
          // };
          this.imageModel = {
            ...data,
          };

          // this.imageModel = this.imageModels[0];

          console.log(this.imageModel);

          if (this.imageModel) {
            this.imageService.imageModel = this.imageModel;
            this.imageAvailable.emit(this.imageModel);
            this.router.navigate(['image-exist']);

          } else {
            this.router.navigate(['make-photo']);
          }
          this.showSpinner = false;
        },
        (error) => {
          console.log('ZOPA', error);
          this.router.navigate(['make-photo']);
          // this.h100 = true;
        }
      );

      this.showSpinner = false;
      // this.isLoading = false;
      this.input.nativeElement.value = '';
    }
  }


  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

}
