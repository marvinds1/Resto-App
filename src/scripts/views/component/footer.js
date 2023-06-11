class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="footer-container">
            <div class="footer-content">
                <p>&copy; 2023 - Resto Catalog App. All rights reserved.</p>
                <p>Designed and developed by Rifqi Afwan</p>
            </div>
        </div>
        `;
  }
}

customElements.define('section-foot', Footer);
