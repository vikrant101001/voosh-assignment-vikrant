import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Artist } from '../../artists/entities/artist.entity';
import { Track } from '../../tracks/entities/track.entity';

@Entity('albums')
export class Album {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  year: number;

  @ManyToOne(() => Artist, artist => artist.albums)
  artist: Artist;

  @OneToMany(() => Track, track => track.album)
  tracks: Track[];
} 