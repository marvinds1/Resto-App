import TheRestoDbSource from '../../data/therestodbsource';
import { RestaurantItem } from '../templates/template';

const Home = {
  async render() {
    return `
            <div id="content" class="content">
                <div id="restos" class="restos"</div>
            </div>
        `;
  },

  async afterRender() {
    const restos = await TheRestoDbSource.homePage();
    const restosContainer = document.querySelector('#content');
    const filterDropdown = document.createElement('section');
    filterDropdown.classList.add('filter-option-head');
    filterDropdown.id = 'filter-option-head';
    const cities = [...new Set(restos.map((restaurant) => restaurant.city))];
    cities.unshift('all');
    const filterDiv = document.createElement('div');
    filterDiv.className = 'filter';

    const filterLabel = document.createElement('label');
    filterLabel.setAttribute('for', 'filter-option');
    filterLabel.textContent = 'Filter: ';

    const selectElement = document.createElement('select');
    selectElement.className = 'filter-dropdown';
    selectElement.id = 'filter-option';

    cities.forEach((city) => {
      const optionAll = document.createElement('option');
      optionAll.value = city;
      optionAll.textContent = city;

      selectElement.appendChild(optionAll);
      filterDiv.appendChild(filterLabel);
      filterDiv.appendChild(selectElement);
      filterDropdown.appendChild(filterDiv);
    });

    restosContainer.appendChild(filterDropdown);
    const restaurantList = document.createElement('section');
    restaurantList.classList.add('restaurant-list');
    restaurantList.id = 'restaurant-list';
    function filterRestaurants() {
      const selectedOption = document.getElementById('filter-option').value;

      const filteredRestaurants = restos.filter((restaurant) => {
        if (selectedOption === 'all') {
          return true;
        }
        return restaurant.city === selectedOption;
      });
      return filteredRestaurants;
    }

    filterRestaurants();
    const ShowListRestaurant = filterRestaurants();
    ShowListRestaurant.forEach((resto) => {
      restaurantList.innerHTML += RestaurantItem(resto);
    });
    restosContainer.appendChild(restaurantList);
    selectElement.addEventListener('change', () => {
      restaurantList.innerHTML = '';
      const filteredRestaurants = filterRestaurants();
      filteredRestaurants.forEach((resto) => {
        restaurantList.innerHTML += RestaurantItem(resto);
      });
      restosContainer.appendChild(restaurantList);
    });
  },
};

export default Home;
