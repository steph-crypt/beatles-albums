import { Component } from '@angular/core';
import {ListComponent} from "../list/list.component";
import {RouterLink, RouterModule, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ListComponent,
    RouterOutlet,
    RouterModule,
    RouterLink,
  ],
  template: `<app-list/>`,
  styleUrl: './home.component.scss'
})
export class HomeComponent {


}
