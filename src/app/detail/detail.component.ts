import {Component, Input, inject, Output} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RouterLink, RouterOutlet, RouterModule} from "@angular/router";
import {Album} from "../types";
import {ActivatedRoute} from '@angular/router';
import {ListComponent} from "../list/list.component";
import {getAlbumById} from "../utils/getAlbumById"

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, NgOptimizedImage, RouterModule, ListComponent],
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  album: Album | undefined;
  @Input() albums: Album[] = [];
  @Input() items: Album[] = [];
  constructor() {
    const albumId = Number(this.route.snapshot.params['id']);
    console.log("id", albumId);
    this.album = getAlbumById(albumId, this.items);
  }
}



