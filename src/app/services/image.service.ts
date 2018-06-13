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

  baseImageUrl = 'http://localhost:3000/images';

  constructor(private httpClient: HttpClient) {
  }

  getImages(sonum: string): Observable<ImageModel[]> {
    // const imageUrl = `${this.baseImageUrl}/${sonum}`;
    const imageUrl = `${this.baseImageUrl}?sonum=${sonum}`;
    console.log(imageUrl);
    return this.httpClient.get<ImageModel[]>(imageUrl);
    // .subscribe((data: ImageModel) => {
    //   console.log(data);
    //
    // });
  }

  savePhotoFromArticle(sonum: string): Observable<ImageModel[]> {
    // const payload = {};
    // payload[sonum] = sonum;
    // this.httpClient.put(this.baseImageUrl, payload);
    return this.getImages(sonum);
  }


  // getImage(imageUrl: string): Observable<Blob> {
  //   return this.httpClient
  //     .get(imageUrl, {
  //       responseType: 'blob'
  //     });
  // }

  // set image(image: ImageModel) {
  //   this.imageModel = image;
  // }
  // get image() {
  //   return this.imageModel;
  // }

}
