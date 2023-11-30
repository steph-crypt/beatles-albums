import {DetailComponent} from "./detail/detail.component";
import {Routes} from '@angular/router';
import {AppComponent} from "./app.component";

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    title: 'Home page',
  },
  {
    path: 'details/:id',
    component: DetailComponent,
    title: 'Album details',
  },
]




