class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero">
        <picture>
            <source media="(max-width: 600px)" srcset="./images/hero-image_2-small.jpg">
            <img src="./images/hero-image_2-large.jpg" alt="Hero Image" >
        </picture>
        </div>
        <div class="hero-text" id="hero-text">
            <img src="./images/logo.png" alt="Logo Image">
                <h1>Resto Catalog App</h1>
            <p>Find your favorite restaurant here</p>
        </div>
        <section id="filter-option-head"> </section>
        <section id="restaurant-list"></section>
        `;
  }
}

customElements.define('section-hero', Hero);
