class Nav extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="navbar-wrapper" id="hamburgerButton">
            <nav class="navbar" id="navigationDrawer">
            <a href="#" class="tombol-menu">
                <span class="garis"></span>
                <span class="garis"></span>
                <span class="garis"></span>
            </a>
            <a class="navbar-brand"  href="#">
                <img src="./images/logo.png" alt="Resto Catalog App">
            </a>
            <button class="navbar-toggle" aria-label="Toggle navigation">
                <span class="navbar-toggle-icon"></span>
            </button>
            <ul class="navbar-menu">
                <li class="navbar-item"><a href="#" class="navbar-link">Home</a></li>
                <li class="navbar-item"><a href="#/favoriterestaurant" class="navbar-link">Favorite</a></li>
                <li class="navbar-item"><a href="https://www.linkedin.com/in/rifqiafwan/" class="navbar-link">About Us</a></li>
            </ul>
            </nav>
        </div>
        `;
  }
}

customElements.define('section-nav', Nav);
