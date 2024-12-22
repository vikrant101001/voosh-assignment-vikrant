import { Injectable } from '@nestjs/common';
import { Album } from './entities/album.entity';

@Injectable()
export class AlbumsService {
  private albums: Album[] = [];

  findAll(): Album[] {
    return this.albums;
  }

  findOne(id: string): Album | undefined {
    return this.albums.find(album => album.id === id);
  }

  create(album: Partial<Album>): Album {
    const newAlbum = {
      id: Date.now().toString(),
      ...album,
    } as Album;
    this.albums.push(newAlbum);
    return newAlbum;
  }

  update(id: string, album: Partial<Album>): Album | undefined {
    const index = this.albums.findIndex(a => a.id === id);
    if (index !== -1) {
      this.albums[index] = { ...this.albums[index], ...album };
      return this.albums[index];
    }
    return undefined;
  }

  remove(id: string): boolean {
    const index = this.albums.findIndex(a => a.id === id);
    if (index !== -1) {
      this.albums.splice(index, 1);
      return true;
    }
    return false;
  }
} 