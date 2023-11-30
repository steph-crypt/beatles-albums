import {DetailComponent} from "./detail/detail.component";
import {Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AppComponent} from "./app.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Homepage',
    children: [
      {
        path: 'details/:id',
        component: DetailComponent,
        title: 'Album details',
      },
    ],
  },
];




