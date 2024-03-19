import {
  html,
  LitElement,
} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

class Header extends LitElement {
  static properties = {
    isScrolled: { type: Boolean, state: true },
  };

  constructor() {
    super();
    this.isScrolled = false;
  }

  createRenderRoot() {
    // Disable Shadow DOM
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('scroll', this._handleScroll.bind(this));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('scroll', this._handleScroll.bind(this));
  }

  _handleScroll() {
    this.isScrolled = window.scrollY > 0;
  }

  render() {
    return html`<header class="header${this.isScrolled ? ' scrolled' : ''}">
      <a href="/" class="emblem">
        <img src="img/emblem.png" alt="IFK Hindås Emblem" />
      </a>

      <button
        class="sidebar-toggle"
        title="Toggle navigation visibility"
        type="button"
      >
        <!-- prettier-ignore -->
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path fill="#000" d="M160-240q-17 0-28.5-11.5T120-280q0-17 11.5-28.5T160-320h640q17 0 28.5 11.5T840-280q0 17-11.5 28.5T800-240H160Zm0-200q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h640q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440H160Zm0-200q-17 0-28.5-11.5T120-680q0-17 11.5-28.5T160-720h640q17 0 28.5 11.5T840-680q0 17-11.5 28.5T800-640H160Z"/></svg>
      </button>

      <nav class="top-nav">
        <ul>
          <li class="nav-item"><a href="/">Hem</a></li>
          <li class="nav-item">
            <button type="button">
              Träna med oss
              <!-- prettier-ignore -->
              <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-362q-8 0-15-2.5t-13-8.5L268-557q-11-11-11-28t11-28q11-11 28-11t28 11l156 156 156-156q11-11 28-11t28 11q11 11 11 28t-11 28L508-373q-6 6-13 8.5t-15 2.5Z"/></svg>
            </button>
          </li>
          <li class="nav-item"><a href="/om-klubben">Om klubben</a></li>
          <li class="nav-item"><a href="/nyheter">Nyheter</a></li>
          <li class="nav-item"><a href="/kontakt">Kontakt</a></li>
        </ul>
      </nav>
    </header>`;
  }
}

customElements.define('c-header', Header);
