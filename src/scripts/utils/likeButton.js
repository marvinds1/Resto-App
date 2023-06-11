import FavoriteRestoDb from '../data/favorite-resto-db';
import { LikeButton, LikedButton } from '../views/templates/template';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, resto }) {
    this.likeButtonContainer = likeButtonContainer;
    this.resto = resto;

    await this.renderButton();
  },

  async renderButton() {
    const { id } = this.resto;

    if (await this.isRestoExist(id)) {
      this.renderLiked();
    } else {
      this.renderLike();
    }
  },

  async isRestoExist(id) {
    const resto = await FavoriteRestoDb.getResto(id);
    return !!resto;
  },

  renderLike() {
    this.likeButtonContainer.innerHTML = LikeButton();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoDb.putResto(this.resto);
      this.renderButton();
    });
  },

  renderLiked() {
    this.likeButtonContainer.innerHTML = LikedButton();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoDb.deleteResto(this.resto.id);
      this.renderButton();
    });
  },
};

export default LikeButtonInitiator;
