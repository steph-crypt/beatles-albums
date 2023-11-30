import { Component } from '@angular/core';
import {ListComponent} from "../list/list.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ListComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
