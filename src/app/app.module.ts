import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AutofocusDirective } from './directives/autofocus.directive';
import {HttpClientModule} from '@angular/common/http';
import { ImageComponent } from './components/image/image.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NoImageAvailableComponent } from './components/no-image-available/no-image-available.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NewImageComponent } from './components/new-image/new-image.component';
import {AppRoutingModule} from './app-routing.module';
import { BarcodeInputComponent } from './components/barcode-input/barcode-input.component';

@NgModule({
  declarations: [
    AppComponent,
    AutofocusDirective,
    ImageComponent,
    NoImageAvailableComponent,
    SpinnerComponent,
    NewImageComponent,
    BarcodeInputComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
