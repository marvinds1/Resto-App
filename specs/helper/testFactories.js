import LikeButtonInitiator from '../../src/scripts/utils/likeButton';
import FavoriteRestoDb from '../../src/scripts/data/favorite-resto-db';

const createFavoriteButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteResto: FavoriteRestoDb,
    resto: restaurant,
  });
};

// eslint-disable-next-line import/prefer-default-export
export { createFavoriteButtonPresenterWithRestaurant };
