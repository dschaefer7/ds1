import {RouterModule, Routes} from '@angular/router';
import {NewImageComponent} from './components/new-image/new-image.component';
import {NgModule} from '@angular/core';
import {BarcodeInputComponent} from './components/barcode-input/barcode-input.component';
import {ImageComponent} from './components/image/image.component';
import {NoImageAvailableComponent} from './components/no-image-available/no-image-available.component';
import {MakePhotoGuard} from './guards/make-photo.guard';
import {ImageExistGuard} from './guards/image-exist.guard';


const routes: Routes = [
  // {path: '', component: AppComponent},
  {
    path: 'new-image',
    component: NewImageComponent,
    canActivate: [ImageExistGuard]
  },
  {
    path: 'image-exist',
    component: ImageComponent,
    canActivate: [ImageExistGuard]
  },
  {
    path: 'make-photo/:id',
    component: NoImageAvailableComponent,
    canActivate: [MakePhotoGuard]
  },
  {
    path: '',
    component: BarcodeInputComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
