import { Controller, Delete, BadRequestException, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/guards/jwt.guard';
import { GetAuth, Auth } from '../../decorators';
import { FavoriteService } from './favorite.service';
import { PATH_CONTAIN_ID } from 'src/constants';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Favorites')
@Controller('/favorites')
@UseGuards(JwtAuthGuard)
export class FavoriteController {
  constructor(private readonly favoriteService: FavoriteService) {}

  @ApiOperation({ summary: 'Remove Favorite By Id' })
  @Delete(`/:favoriteId${PATH_CONTAIN_ID}`)
  @UseGuards(JwtAuthGuard)
  async removeToFavoriteById(@Param('favoriteId') favoriteId: string, @GetAuth() auth: Auth) {
    // const isExistedFavorite = await this.favoriteService.checkExistedFavoriteById(favoriteId);
    // if (isExistedFavorite === false)
    //   throw new BadRequestException({ message: "You didn't like it before", data: null });

    // const permission = await this.favoriteService.hasPermissionDeleteFavorite(auth, favoriteId);
    // if (permission) throw new UnauthorizedException({ message: permission.message, data: null });

    const favorite = await this.favoriteService.removeFavoriteById(favoriteId);

    if (!favorite) throw new BadRequestException({ message: 'Bad Request', data: null });
    return {
      message: 'Success',
      data: favorite.deletedCount,
    };
  }
}
