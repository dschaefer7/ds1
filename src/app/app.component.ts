import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import fontawesome from '@fortawesome/fontawesome';
import faCheckCircle from '@fortawesome/fontawesome-free-regular/';
import faCamera from '@fortawesome/fontawesome-free-solid/';
import faSpinner from '@fortawesome/fontawesome-free-solid/';


import {ImageService} from './services/image.service';
import {ImageModel} from './models/image.model';
import {SpinnerService} from './components/spinner/spinner.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnDestroy {
  title = 'app';
  imageModels: ImageModel[];
  h100 = true;
  isMakingPhoto = false;

  imageModel: ImageModel;
  newImage: ImageModel;
  showSpinner = false;


  @ViewChild('query') input;

  constructor(
    private imageService: ImageService,
    protected spinner: SpinnerService) {
    fontawesome.library.add(faCheckCircle);
    fontawesome.library.add(faSpinner);
    fontawesome.library.add(faCamera);

    this.spinner.show('spinner');
  }


  // async checkPhotoExist(e, articleId: string) {
  //   e.preventDefault();
  //
  //   if (e.keyCode === 13) {
  //     if (!articleId) {
  //       console.log('input invalid!!!');
  //       return;
  //     }
  //
  //     this.isMakingPhoto = false;
  //
  //     this.showSpinner = true;
  //
  //     this.h100 = true;
  //     this.imageModel = null;
  //     await this.delay(1000);
  //
  //     this.imageService.getImages(articleId)
  //       .subscribe(
  //         (data: ImageModel[]) => {
  //           this.imageModels = {
  //             ...data,
  //           };
  //
  //           this.imageModel = this.imageModels[0];
  //
  //
  //           console.log(this.imageModels);
  //
  //           if (this.imageModel) {
  //             this.h100 = false;
  //           } else {
  //             this.h100 = true;
  //             this.showSpinner = false;
  //             this.makePhotoFromArticle();
  //           }
  //         },
  //         (error) => {
  //           console.log('ZOPA', error);
  //           this.h100 = true;
  //         }
  //       );
  //
  //     this.showSpinner = false;
  //     // this.isLoading = false;
  //     this.input.nativeElement.value = '';
  //   }
  // }


  makePhotoFromArticle() {
    console.log('make foto!!!');
    this.isMakingPhoto = true;
  }


  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


  setImageModel(event) {
    this.showSpinner = true;
    console.log(event);
    this.newImage = event;
    this.showSpinner = false;
  }

  ngOnDestroy(): void {
  }

  // getImageFromService() {
  //   this.isImageLoading = true;
  //   this.imageService.getExistingImage('http://172.16.100.175:8180/api/v1/mapping/image')
  //     .subscribe(data => {
  //       this.createImageFromBlob(data);
  //       console.log(data);
  //       this.isImageLoading = false;
  //     }, error => {
  //       this.isImageLoading = false;
  //       console.log(error);
  //     });
  // }
  //
  //
  // createImageFromBlob(image: Blob) {
  //   const reader = new FileReader();
  //   reader.addEventListener('load', () => {
  //     this.imageToShow = reader.result;
  //     console.log(this.imageToShow);
  //   }, false);
  //
  //   if (image) {
  //     reader.readAsDataURL(image);
  //   }
  // }
  //
  // ngOnInit(): void {
  //   this.getImageFromService();
  // }
}
