export interface ISong {
  album: string;
  artistName: string;
  artwork: string;
  category: string;
  id: string;
  lyrics: string;
  playlist: string;
  tag: string;
  trackName: string;
  youtube: string;
  duration: string;
  itemQuantity: number;
}

export interface IArtists {
  id: string;
  name: string;
  tag: string;
  url: string;
}

export interface IAlbum {
  0: {
    AlbumName: string;
    artistName: string;
    artwork: string;
    tag: string;
  };
  id: string;
}

export interface IAlbumLyrics {
  0: {
    album: string;
    artistName: string;
    artwork: string;
    category: string;
    id: string;
    lyrics: string;
    playlist: string;
    tag: string;
    trackName: string;
    youtube: string;
    duration: string;
  };
  id: string;
}