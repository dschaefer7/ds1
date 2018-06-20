import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ImageModel} from '../models/image.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  public imageModel: ImageModel;

  // baseImageUrl = 'http://localhost:3000/images';
  baseImageUrl = 'http://imageservice.xip.io:80/api/v1/mapping/image';

  constructor(private httpClient: HttpClient) {
  }

  getExistingImage(sonum: string): Observable<ImageModel> {
    // const imageUrl = `${this.baseImageUrl}/${sonum}`;
    const imageUrl = `${this.baseImageUrl}/${sonum}`;
    console.log(imageUrl);
    return new Observable<ImageModel>((observer) => {
      this.httpClient
        .get(imageUrl, {
          headers: {},
          // responseType: 'blob'
        }).subscribe(
        (data: any) => {
          this.imageModel = {
            sonum: sonum,
            imageExist: true,
            fileName: data.name,
            base64data: 'data:image/jpg;base64,' + data.base64data
          };
          // return this.imageModel;
          observer.next(this.imageModel);
          // observer.complete();

        },
        (error) => {
           this.imageModel = {
             sonum: sonum,
             imageExist: false,
             fileName: null,
             base64data: null
           };
          observer.error(error);
        });


      // .subscribe((data: ImageModel) => {
      //   console.log(data);
      //
      // });
    });
  }

  getNewTakenPhoto(sonum: string): Observable<ImageModel> {
    const imageUrl = `${this.baseImageUrl}`;
    // console.log(imageUrl);
    return new Observable<ImageModel>((observer) => {
      this.httpClient
        .post(imageUrl, null,
          {
            headers: {},
            responseType: 'blob'
          })
        .subscribe(
          (data: any) => {
            this.imageModel = {
              sonum: sonum,
              imageExist: true,
              fileName: data.name,
              base64data: 'data:image/jpg;base64,' + data.base64data
            };
            observer.next(this.imageModel);
          },
          (error) => {
            console.log('Error from service---');
            observer.error(error);
          });
    });
  }

  saveNewPhoto(imageModel: ImageModel): Observable<Object> {
    const body = {'sonum': imageModel.sonum};
    return this.httpClient.put(this.baseImageUrl, body);
  }

  deleteNewPhoto(): Observable<Object> {
    return this.httpClient.delete(this.baseImageUrl);
  }

}
