/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
/* eslint-disable consistent-return */
import { itActsAsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';

let favoriteRestaurants = [];
const FavoriteRestaurantArray = {
  getResto(id) {
    if (!id) {
      return;
    }
    return favoriteRestaurants.find((restaurant) => restaurant.id === id);
  },
  getAllRestos() {
    return favoriteRestaurants;
  },
  putResto(restaurant) {
    if (!restaurant.id) {
      return;
    }
    if (this.getResto(restaurant.id)) {
      return;
    }
    favoriteRestaurants.push(restaurant);
  },
  deleteResto(id) {
    favoriteRestaurants = favoriteRestaurants.filter((restaurant) => restaurant.id !== id);
  },

};

describe('Favorite Restaurant Array Contract test Implementation', () => {
  afterEach(() => favoriteRestaurants = []);
  itActsAsFavoriteRestaurantModel(FavoriteRestaurantArray);
});
