import {DetailComponent} from "./detail/detail.component";
import {Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AppComponent} from "./app.component";

// export const routes: Routes = [
//   {
//     path: '',
//     component: HomeComponent,
//     title: 'Home page',
//   },
//   {
//     path: 'details/:id',
//     component: DetailComponent,
//     title: 'Album details',
//   },
// ]


export const routes: Routes = [
  {
    path: '',
    component: HomeComponent, // this is the component with the <router-outlet> in the template
    title: 'Home page',
    children: [
      {
        path: 'details/:id',// child route path
        component: DetailComponent, // child route component that the router renders
        title: 'Album details',
      },
    ],
  },
];




