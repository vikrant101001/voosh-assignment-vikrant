import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ArtistsService } from './artists.service';
import { Artist } from './entities/artist.entity';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('artists')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('artists')
export class ArtistsController {
  constructor(private readonly artistsService: ArtistsService) {}

  @Post()
  @ApiOperation({ summary: 'Create artist' })
  @ApiResponse({ status: 201, description: 'Artist created successfully' })
  create(@Body() artist: Partial<Artist>): Artist {
    return this.artistsService.create(artist);
  }

  @Get()
  @ApiOperation({ summary: 'Get all artists' })
  @ApiResponse({ status: 200, description: 'Return all artists' })
  findAll(): Artist[] {
    return this.artistsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get artist by id' })
  @ApiResponse({ status: 200, description: 'Return artist by id' })
  findOne(@Param('id') id: string): Artist {
    return this.artistsService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update artist by id' })
  @ApiResponse({ status: 200, description: 'Artist updated successfully' })
  update(@Param('id') id: string, @Body() artist: Partial<Artist>): Artist {
    return this.artistsService.update(id, artist);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete artist by id' })
  @ApiResponse({ status: 200, description: 'Artist deleted successfully' })
  remove(@Param('id') id: string): boolean {
    return this.artistsService.remove(id);
  }
} 