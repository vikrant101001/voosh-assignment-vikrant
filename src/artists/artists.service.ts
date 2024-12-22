import { Injectable } from '@nestjs/common';
import { Artist } from './entities/artist.entity';

@Injectable()
export class ArtistsService {
  private artists: Artist[] = [];

  findAll(): Artist[] {
    return this.artists;
  }

  findOne(id: string): Artist | undefined {
    return this.artists.find(artist => artist.id === id);
  }

  create(artist: Partial<Artist>): Artist {
    const newArtist = {
      id: Date.now().toString(),
      ...artist,
    } as Artist;
    this.artists.push(newArtist);
    return newArtist;
  }

  update(id: string, artist: Partial<Artist>): Artist | undefined {
    const index = this.artists.findIndex(a => a.id === id);
    if (index !== -1) {
      this.artists[index] = { ...this.artists[index], ...artist };
      return this.artists[index];
    }
    return undefined;
  }

  remove(id: string): boolean {
    const index = this.artists.findIndex(a => a.id === id);
    if (index !== -1) {
      this.artists.splice(index, 1);
      return true;
    }
    return false;
  }
} 