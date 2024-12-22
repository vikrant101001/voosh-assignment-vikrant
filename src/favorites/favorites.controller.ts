import { Controller, Get, Post, Delete, Param, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FavoritesService } from './favorites.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('favorites')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Get()
  @ApiOperation({ summary: 'Get all favorites' })
  @ApiResponse({ status: 200, description: 'Return all favorites' })
  getFavorites() {
    return this.favoritesService.getFavorites();
  }

  @Post('artists/:id')
  @ApiOperation({ summary: 'Add artist to favorites' })
  @ApiResponse({ status: 201, description: 'Artist added to favorites' })
  addArtist(@Param('id') id: string) {
    return this.favoritesService.addArtist(id);
  }

  @Delete('artists/:id')
  @ApiOperation({ summary: 'Remove artist from favorites' })
  @ApiResponse({ status: 200, description: 'Artist removed from favorites' })
  removeArtist(@Param('id') id: string) {
    return this.favoritesService.removeArtist(id);
  }

  @Post('albums/:id')
  @ApiOperation({ summary: 'Add album to favorites' })
  @ApiResponse({ status: 201, description: 'Album added to favorites' })
  addAlbum(@Param('id') id: string) {
    return this.favoritesService.addAlbum(id);
  }

  @Delete('albums/:id')
  @ApiOperation({ summary: 'Remove album from favorites' })
  @ApiResponse({ status: 200, description: 'Album removed from favorites' })
  removeAlbum(@Param('id') id: string) {
    return this.favoritesService.removeAlbum(id);
  }

  @Post('tracks/:id')
  @ApiOperation({ summary: 'Add track to favorites' })
  @ApiResponse({ status: 201, description: 'Track added to favorites' })
  addTrack(@Param('id') id: string) {
    return this.favoritesService.addTrack(id);
  }

  @Delete('tracks/:id')
  @ApiOperation({ summary: 'Remove track from favorites' })
  @ApiResponse({ status: 200, description: 'Track removed from favorites' })
  removeTrack(@Param('id') id: string) {
    return this.favoritesService.removeTrack(id);
  }
} 