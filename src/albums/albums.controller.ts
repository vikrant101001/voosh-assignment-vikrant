import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AlbumsService } from './albums.service';
import { Album } from './entities/album.entity';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('albums')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('albums')
export class AlbumsController {
  constructor(private readonly albumsService: AlbumsService) {}

  @Post()
  @ApiOperation({ summary: 'Create album' })
  @ApiResponse({ status: 201, description: 'Album created successfully' })
  create(@Body() album: Partial<Album>): Album {
    return this.albumsService.create(album);
  }

  @Get()
  @ApiOperation({ summary: 'Get all albums' })
  @ApiResponse({ status: 200, description: 'Return all albums' })
  findAll(): Album[] {
    return this.albumsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get album by id' })
  @ApiResponse({ status: 200, description: 'Return album by id' })
  findOne(@Param('id') id: string): Album {
    return this.albumsService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update album by id' })
  @ApiResponse({ status: 200, description: 'Album updated successfully' })
  update(@Param('id') id: string, @Body() album: Partial<Album>): Album {
    return this.albumsService.update(id, album);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete album by id' })
  @ApiResponse({ status: 200, description: 'Album deleted successfully' })
  remove(@Param('id') id: string): boolean {
    return this.albumsService.remove(id);
  }
} 