import FavoriteRestoDb from '../../data/favorite-resto-db';
import { RestaurantItem } from '../templates/template';

const Favorite = {
  async render() {
    return `
        <div id="content" class="content">
            <p class="filter">Favorite Restaurant</>
        </div>
        `;
  },

  async afterRender() {
    const restos = await FavoriteRestoDb.getAllRestos();
    const restosContainer = document.querySelector('#content');
    const restaurantList = document.createElement('section');
    restaurantList.classList.add('restaurant-list2');
    restaurantList.id = 'restaurant-list2';
    if (restos.length === 0) {
      restaurantList.innerHTML = '<p class="restaurant-item__not__found">Tidak ada restaurant untuk ditampilkan</p>';
    } else {
      restos.forEach((resto) => {
        restaurantList.innerHTML += RestaurantItem(resto);
      });
    }
    restosContainer.appendChild(restaurantList);
  },
};

export default Favorite;
