/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restos');

Before(({ I }) => {
  I.amOnPage('/#/favoriterestaurant');
});

Scenario('test something', ({ I }) => {
  I.seeElement('#restaurant-list2');
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('Liking and Unliking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.waitForElement('.restaurant-name a', 20);
  I.seeElement('.restaurant-name a');

  const firstRestaurant = locate('.restaurant-name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton', 1);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favoriterestaurant');
  I.seeElement('.restaurant-item');
  const likedRestaurantName = await I.grabTextFrom('.restaurant-name');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  I.seeElement('.restaurant-name a');
  I.click(firstRestaurant);

  const unlikedRestaurantName = await I.grabTextFrom('.restotitle');
  I.waitForElement('#likeButton', 1);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  assert.strictEqual(firstRestaurantName, unlikedRestaurantName);
});
