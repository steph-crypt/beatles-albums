import {Component, HostListener, inject, Input, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RouterLink, RouterModule, RouterOutlet} from "@angular/router";
import {DataService} from "../service/data.service";
import {DetailComponent} from "../detail/detail.component";
import {Album, Response} from "../types";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, DetailComponent, NgOptimizedImage, RouterOutlet, RouterModule, RouterLink],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  dataService: DataService = inject(DataService);
  response: Response | undefined;
  items: Album[] = [];
  errorMessage!: string;
  isLoading: boolean = false;
  ascAlbums: Album[] = [];
  descAlbums: Album[] = [];
  @Input() albums: Album[] = [];
  @Input() products: any;

  constructor() {
  }

  ngOnInit(): void {
    this.loadItems()
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight && !this.isLoading) {
      console.log(event);
      this.loadItems()
    }
  }

  loadItems() {
    this.isLoading = true;
    this.dataService.getResponse().subscribe({
      next: (response: Response) => {
        this.response = response;
        this.albums = response.results;
        this.descAlbums = this.albums.sort((a, b) => a.collectionName.localeCompare(b.collectionName));
        this.items.push(...this.albums);
        this.isLoading = false
        console.log('items', this.items);
        return this.items
      },
      error: (error: string) => {
        this.errorMessage = error;
      },
    });
  }

  public getAlbumById(id: number): Album | undefined {
    console.log("just items", this.items);
    console.log("find", this.items.find((album) => album.id === id));
    return this.items.find((album) => album.id === id);
  }
  public sortAlbumsDesc(): void {
    this.descAlbums = this.items.sort((a: Album, b: Album) => a.collectionName.localeCompare(b.collectionName));
  }
  public sortAlbumsAsc(): void {
    this.ascAlbums = this.items.sort((a: Album, b: Album) => b.collectionName.localeCompare(a.collectionName));
  }
}


