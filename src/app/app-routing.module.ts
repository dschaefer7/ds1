import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {NewImageComponent} from './components/new-image/new-image.component';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'new-image', component: NewImageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})

export class AppRoutingModule {

}
