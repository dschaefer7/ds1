import {Component, OnInit, ViewChild} from '@angular/core';
import {ImageModel} from '../../models/image.model';
import {ImageService} from '../../services/image.service';
import {SpinnerService} from '../spinner/spinner.service';

@Component({
  selector: 'app-barcode-input',
  templateUrl: './barcode-input.component.html',
  styleUrls: ['./barcode-input.component.scss']
})
export class BarcodeInputComponent implements OnInit {


  showSpinner = false;
  imageModels: ImageModel[];
  imageModel: ImageModel;

  @ViewChild('query') input;

  constructor(private imageService: ImageService,
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

      // this.isMakingPhoto = false;

      this.showSpinner = true;

      // this.h100 = true;
      this.imageModel = null;
      await this.delay(1000);

      this.imageService.getImages(articleId)
        .subscribe(
          (data: ImageModel[]) => {
            this.imageModels = {
              ...data,
            };

            this.imageModel = this.imageModels[0];


            console.log(this.imageModels);

            if (this.imageModel) {
              // this.h100 = false;
            } else {
              // this.h100 = true;
              this.showSpinner = false;
              // this.makePhotoFromArticle();
            }
          },
          (error) => {
            console.log('ZOPA', error);
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
