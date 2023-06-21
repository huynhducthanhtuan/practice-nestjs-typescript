import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Favorite, FavoriteDocument } from 'src/schemas/favorites';

@Injectable()
export class FavoriteService {
  constructor(
    @InjectModel(Favorite.name)
    private readonly favoriteRepo: Model<FavoriteDocument>,
  ) {}

  async removeFavoriteById(id: string) {
    const favorite = await this.favoriteRepo.deleteOne({ _id: id });
    return favorite;
  }
}
