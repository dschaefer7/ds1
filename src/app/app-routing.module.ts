import {RouterModule, Routes} from '@angular/router';
import {NewImageComponent} from './components/new-image/new-image.component';
import {NgModule} from '@angular/core';
import {BarcodeInputComponent} from './components/barcode-input/barcode-input.component';

const routes: Routes = [
  // {path: '', component: AppComponent},
  {path: 'new-image', component: NewImageComponent},
  {path: '', component: BarcodeInputComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})

export class AppRoutingModule {

}
