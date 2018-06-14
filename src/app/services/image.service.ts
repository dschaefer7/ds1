import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ImageModel} from '../models/image.model';
import {Observable} from 'rxjs';
import {ResponseContentType} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  public imageModel: ImageModel;

  // baseImageUrl = 'http://localhost:3000/images';
  baseImageUrl = 'http://imageservice.xip.io:80/api/v1/mapping/image';

  constructor(private httpClient: HttpClient) {
  }

  getImage(sonum: string): Observable<ImageModel> {
    // const imageUrl = `${this.baseImageUrl}/${sonum}`;
    const imageUrl = `${this.baseImageUrl}/${sonum}`;
    console.log(imageUrl);

    return new Observable<ImageModel>((observer) => {
      // return this.httpClient.get<Blob>(imageUrl,{responseType: ArrayBuffer});
      this.httpClient
        .get(imageUrl, {
          headers: {},
          responseType: 'blob'
        }).subscribe(
        (data: Blob) => {
          this.imageModel = {
            sonum: sonum,
            imageExist: true,
            src: imageUrl
          };
          // return this.imageModel;
          observer.next(this.imageModel);
          // observer.complete();

        },
        (error) => {
          // console.log('ZOPA', error);
          // this.imageModel = {
          //   sonum: sonum,
          //   imageExist: false,
          //   src: imageUrl
          // };
          // return this.imageModel;
          observer.error(error);
        });


      // .subscribe((data: ImageModel) => {
      //   console.log(data);
      //
      // });
    });
  }



  // savePhotoFromArticle(sonum: string): Observable<ImageModel[]> {
  //   // const payload = {};
  //   // payload[sonum] = sonum;
  //   // this.httpClient.put(this.baseImageUrl, payload);
  //   return this.getImages(sonum);
  // }


  // getImage(imageUrl: string): Observable<Blob> {
  //   return this.httpClient
  //     .get(imageUrl, {
  //       responseType: 'blob'
  //     });
  // }

})
}
