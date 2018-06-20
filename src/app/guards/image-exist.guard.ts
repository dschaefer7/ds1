import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {ImageService} from '../services/image.service';

@Injectable({
  providedIn: 'root'
})
export class ImageExistGuard implements CanActivate {

  constructor(private imageService: ImageService,
              private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.imageService.imageModel != null && this.imageService.imageModel.imageExist === true) {
      return true;
    }
    this.router.navigate(['/'])
      .then();
    return false;
  }
}
