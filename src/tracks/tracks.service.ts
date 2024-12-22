import { Injectable } from '@nestjs/common';
import { Track } from './entities/track.entity';

@Injectable()
export class TracksService {
  private tracks: Track[] = [];

  findAll(): Track[] {
    return this.tracks;
  }

  findOne(id: string): Track | undefined {
    return this.tracks.find(track => track.id === id);
  }

  create(track: Partial<Track>): Track {
    const newTrack = {
      id: Date.now().toString(),
      ...track,
    } as Track;
    this.tracks.push(newTrack);
    return newTrack;
  }

  update(id: string, track: Partial<Track>): Track | undefined {
    const index = this.tracks.findIndex(t => t.id === id);
    if (index !== -1) {
      this.tracks[index] = { ...this.tracks[index], ...track };
      return this.tracks[index];
    }
    return undefined;
  }

  remove(id: string): boolean {
    const index = this.tracks.findIndex(t => t.id === id);
    if (index !== -1) {
      this.tracks.splice(index, 1);
      return true;
    }
    return false;
  }
} 