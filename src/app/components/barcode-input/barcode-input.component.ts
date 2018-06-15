import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ImageModel} from '../../models/image.model';
import {ImageService} from '../../services/image.service';
import {SpinnerService} from '../spinner/spinner.service';
import {Router} from '@angular/router';

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
    private imageService: ImageService,
    protected spinner: SpinnerService) {
  }

  ngOnInit() {
  }


  async checkPhotoExist(e, sonum: string) {
    e.preventDefault();
    if (e.keyCode === 13) {
      if (!sonum) {
        console.log('input invalid!!!');
        return;
      }
      this.showSpinner = true;
      this.imageModel = null;

      await this.delay(1000);

      this.imageService.getExistingImage(sonum)
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
          this.imageModel = {
            ...data,
          };

          // this.imageModel = this.imageModels[0];

          console.log(this.imageModel);

          // if (this.imageModel) {
            this.imageService.imageModel = this.imageModel;
            this.imageAvailable.emit(this.imageModel);
            this.router.navigate(['image-exist']);

         // } else {
         //   this.router.navigate(['make-photo']);
         // }
          this.showSpinner = false;
        },
        (error) => {
          // console.log('ZOPA', error);
          this.router.navigate(['make-photo', sonum]);
          this.showSpinner = false;
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
