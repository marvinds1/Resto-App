/* eslint-disable no-undef */
import * as TestButton from './helper/testFactories';
import FavoriteRestoDb from '../src/scripts/data/favorite-resto-db';

describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer" class="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('Should show the like button when the restaurant has not been liked before', async () => {
    await TestButton.createFavoriteButtonPresenterWithRestaurant({ id: 1 });
    expect(document.querySelector('[aria-label="like this movie"]'))
      .toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestButton.createFavoriteButtonPresenterWithRestaurant({ id: 1 });
    expect(document.querySelector('[aria-label="unlike this movie"]')).toBeFalsy();
  });

  it('Should be able to like the restaurant', async () => {
    await TestButton.createFavoriteButtonPresenterWithRestaurant({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestoDb.getResto(1);
    expect(restaurant).toEqual({ id: 1 });
    FavoriteRestoDb.deleteResto(1);
  });

  it('Should not add a restaurant again when its already liked', async () => {
    await TestButton.createFavoriteButtonPresenterWithRestaurant({ id: 1 });
    await FavoriteRestoDb.putResto({ id: 1 });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoDb.getAllRestos()).toEqual([{ id: 1 }]);
    FavoriteRestoDb.deleteResto(1);
  });

  it('Should not add a restaurant when it has no id', async () => {
    await TestButton.createFavoriteButtonPresenterWithRestaurant({});
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoDb.getAllRestos()).toEqual([]);
  });
});
