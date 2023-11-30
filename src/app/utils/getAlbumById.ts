import {Album} from "../types";


export function getAlbumById(id: number, items: Album[]) {
  return items.find((album) => album.collectionId === id);
}
