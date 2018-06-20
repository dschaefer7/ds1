import {Component, OnInit} from '@angular/core';
import {ImageService} from '../../services/image.service';
import {Router} from '@angular/router';
import {NotyfService} from 'ng-notyf';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-new-image',
  templateUrl: './new-image.component.html',
  styleUrls: ['./new-image.component.scss']
})
export class NewImageComponent implements OnInit {

  imageToShow: any;

  constructor(
    private router: Router,
    private notyfService: NotyfService,
    private imageService: ImageService) {

    this.notyfService.toastContainerStyle = {'top': '0', 'font-size': '1.5rem'};
  }

  ngOnInit() {
    this.createImageFromBlob();
  }

  saveNewPhoto() {

    console.log(this.imageService.imageModel);

    this.imageService.saveNewPhoto(this.imageService.imageModel)
      .subscribe(
        (data) => {
          this.notyfService.success('Foto gespeichert');
          this.router.navigate(['/']);
        },
        (error: HttpErrorResponse) => {
          this.notyfService.error('Fehler->' + error.message);
          console.log(error);
        }
      );

    // this.notyfService.error('Something went wrong 😰😰😰');
  }

  deleteNewPhoto() {
    this.imageService.deleteNewPhoto()
      .subscribe(
        (data) => {
          console.log(data);
          this.notyfService.toastStyle = {'background-color': 'blue', 'color': 'white'};
          this.notyfService.success('Foto wurde gelöscht');
          this.router.navigate(['/']);
        },
        (error: HttpErrorResponse) => {
          this.notyfService.error('Something went wrong 😰😰😰');
          console.log(error);
        }
      );
  }

  private createImageFromBlob() {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      this.imageToShow = reader.result;
    }, false);
    const newImage = this.imageService.imageModel.imageData;
    if (newImage) {
      reader.readAsDataURL(newImage);
    }
  }
}
