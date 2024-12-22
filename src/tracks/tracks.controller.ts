import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { TracksService } from './tracks.service';
import { Track } from './entities/track.entity';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('tracks')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('tracks')
export class TracksController {
  constructor(private readonly tracksService: TracksService) {}

  @Post()
  @ApiOperation({ summary: 'Create track' })
  @ApiResponse({ status: 201, description: 'Track created successfully' })
  create(@Body() track: Partial<Track>): Track {
    return this.tracksService.create(track);
  }

  @Get()
  @ApiOperation({ summary: 'Get all tracks' })
  @ApiResponse({ status: 200, description: 'Return all tracks' })
  findAll(): Track[] {
    return this.tracksService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get track by id' })
  @ApiResponse({ status: 200, description: 'Return track by id' })
  findOne(@Param('id') id: string): Track {
    return this.tracksService.findOne(id);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update track by id' })
  @ApiResponse({ status: 200, description: 'Track updated successfully' })
  update(@Param('id') id: string, @Body() track: Partial<Track>): Track {
    return this.tracksService.update(id, track);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete track by id' })
  @ApiResponse({ status: 200, description: 'Track deleted successfully' })
  remove(@Param('id') id: string): boolean {
    return this.tracksService.remove(id);
  }
} 