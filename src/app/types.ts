export type Album = {
  id: number;
  collectionId: number;
  artistName: string;
  collectionName: string;
  artworkUrl100: string;
  collectionViewUrl: string;
}
export interface Response {
  resultCount: number;
  results: Album[];
}






