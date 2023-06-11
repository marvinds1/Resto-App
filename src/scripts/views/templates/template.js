import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import CONFIG from '../../globals/config';

const RestaurantDetail = (resto) => `
<div class="resto-container">
  <h2 class="restotitle">${resto.name}</h2>
  <img class="restoposter lazyload" loading="lazy" src="${CONFIG.IMG_URL_MEDIUM + resto.pictureId}" alt="Image for ${resto.name}"/>
  <div class="resto-info">
    <h3>Information</h3>
    <div class="resto-details">
      <h4>City</h4>
      <p>${resto.city}</p>
      <h4>Address</h4>
      <p>${resto.address}</p>
    </div>
  </div>
  <div class="resto-desc">
    <h3>Deskripsi</h3>
    <p>${resto.description}</p>
  </div>
  <div class="resto-item">
    <div class="resto-item-foods">
      <h4>Foods Menu</h4>
      <ul>
        ${resto.menus.foods.map((foods) => `<li>${foods.name}</li>`).join('')}
      </ul>
    </div>
    <div class="resto-item-drinks">
      <h4>Drinks Menu</h4>
      <ul>
        ${resto.menus.drinks.map((drinks) => `<li>${drinks.name}</li>`).join('')}
      </ul>
    </div>
  </div>
  <div class="resto-review">
    <h4>Customers Review</h4>
    ${resto.customerReviews.map((review) => `
      <div class="resto-review-cust">
        <p class="resto-name">${review.name}</p>
        <p class="resto-date">${review.date}</p>
        <p class="resto-text">${review.review}</p>
      </div>
    `)}
  </div>
  
  <form class="add-review-form" id="add-review-form">
    <h4>Add Review</h4>
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required>
    </div>
    <div>
      <label for="review">Review:</label>
      <textarea id="review" name="review" rows="4" required></textarea>
    </div>
    <button type="submit">Submit</button>
  </form>
</div>

`;

const RestaurantItem = (resto) => `
  <div class="restaurant-item">
    <div class="restaurant-name"><a href="/#/detail/${resto.id}"> ${resto.name}</a></div>
    <div class="restaurant-city">${resto.city}</div>
      <img class="restaurant-picture lazyload" loading="lazy" src="${CONFIG.IMG_URL_MEDIUM + resto.pictureId}" alt="${resto.name}">
    <div class="restaurant-description">${resto.description}</div>
    <div class="restaurant-rating"> Rating: ${resto.rating} </div>
    <div class="chart-container">
      <div class="chart-bar" style="width: 84%;"></div>
    </div>
  </div>
`;

const LikeButton = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const LikedButton = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  RestaurantItem,
  RestaurantDetail,
  LikeButton,
  LikedButton,
};
