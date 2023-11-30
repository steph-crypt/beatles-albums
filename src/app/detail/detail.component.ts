import {Component, Input, inject} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RouterLink, RouterOutlet, RouterModule} from "@angular/router";
import {Album} from "../types";
import {ActivatedRoute} from '@angular/router';
import {DataService} from "../service/data.service";
import {ListComponent} from "../list/list.component";


@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, NgOptimizedImage, RouterModule, ListComponent],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  dataService = inject(DataService);
  album: Album | undefined;
  @Input() listComponent!: ListComponent;
  @Input() albums: Album[] = [];
  @Input() items: Album[] = [];

  constructor() {
    const albumId = Number(this.route.snapshot.params['id']);
    console.log("items in details", this.items)
    this.album = this.listComponent.getAlbumById(albumId);
    console.log("current album", this.album)
  }

  // housingService = inject(HousingService);
  // housingLocation: HousingLocation | undefined;
  // constructor() {
  //   const housingLocationId = Number(this.route.snapshot.params['id']);
  //   this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  // }
}



