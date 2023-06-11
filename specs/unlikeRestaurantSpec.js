/* eslint-disable no-undef */
import FavoriteRestoDb from '../src/scripts/data/favorite-resto-db';
import * as TestButton from './helper/testFactories';

describe('Unliking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer" class="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestoDb.putResto({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestoDb.deleteResto(1);
  });

  it('Should display unlike widget when the restaurant has been liked', async () => {
    await TestButton.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this movie"]'))
      .toBeTruthy();
  });

  it('Should not display unlike widget when the restaurant has been liked', async () => {
    await TestButton.createFavoriteButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="like this movie"]'))
      .toBeFalsy();
  });

  it('Should be able to remove liked restaurant from the list', async () => {
    await TestButton.createFavoriteButtonPresenterWithRestaurant({ id: 1 });
    document.querySelector('[aria-label="unlike this movie"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoDb.getAllRestos()).toEqual([]);
  });

  it('Should not throw error if the unliked restaurant is not in the list', async () => {
    await TestButton.createFavoriteButtonPresenterWithRestaurant({ id: 1 });
    await FavoriteRestoDb.deleteResto(1);
    document.querySelector('[aria-label="unlike this movie"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoDb.getAllRestos()).toEqual([]);
  });
});
