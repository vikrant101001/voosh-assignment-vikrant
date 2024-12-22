import { Injectable } from '@nestjs/common';

@Injectable()
export class FavoritesService {
  private favorites = {
    artists: new Set<string>(),
    albums: new Set<string>(),
    tracks: new Set<string>(),
  };

  addArtist(id: string): boolean {
    return this.favorites.artists.add(id).size > 0;
  }

  addAlbum(id: string): boolean {
    return this.favorites.albums.add(id).size > 0;
  }

  addTrack(id: string): boolean {
    return this.favorites.tracks.add(id).size > 0;
  }

  removeArtist(id: string): boolean {
    return this.favorites.artists.delete(id);
  }

  removeAlbum(id: string): boolean {
    return this.favorites.albums.delete(id);
  }

  removeTrack(id: string): boolean {
    return this.favorites.tracks.delete(id);
  }

  getFavorites() {
    return {
      artists: Array.from(this.favorites.artists),
      albums: Array.from(this.favorites.albums),
      tracks: Array.from(this.favorites.tracks),
    };
  }
} 