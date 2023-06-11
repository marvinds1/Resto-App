import UrlParser from '../../routes/url-parser';
import TheRestoDbSource from '../../data/therestodbsource';
import LikeButtonInitiator from '../../utils/likeButton';
import { RestaurantDetail } from '../templates/template';
import addReview from '../../utils/addReviewer';

const Detail = {
  async render() {
    return `
        <div class="titleContent">Detail Restaurant</div>
        <div id="content" class="content"></div>
        <div id="likeButtonContainer" class="likeButtonContainer"></div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await TheRestoDbSource.detailResto(url.id);
    const restoContainer = document.querySelector('#content');
    restoContainer.innerHTML = RestaurantDetail(resto);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: {
        id: resto.id,
        name: resto.name,
        description: resto.description,
        pictureId: resto.pictureId,
        city: resto.city,
        rating: resto.rating,
      },
    });
    const form = document.getElementById('add-review-form');
    const nameInput = document.getElementById('name');
    const reviewInput = document.getElementById('review');

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const name = nameInput.value;
      const review = reviewInput.value;
      addReview(resto.id, name, review);

      nameInput.value = '';
      reviewInput.value = '';
    });
  },
};

export default Detail;
