import {
  html,
  LitElement,
} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

class Header extends LitElement {
  createRenderRoot() {
    // Disable Shadow DOM
    return this;
  }

  /**
   * @param {String} path The URL of the link
   * @param {String} text The text contents of the f
   */
  renderNavItem(path, text) {
    return html`<li
      class="nav-item ${window.location.pathname == path ? 'active' : ''}"
    >
      <a href="${path}">${text}</a>
    </li>`;
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
          ${this.renderNavItem('/', 'Hem')}

          <li class="nav-item">
            <button type="button">
              Träna med oss
              <i class="icon">expand_more</i>
            </button>

            <ul class="dropdown">
              <li><a href="/nyborjare">Nybörjare</a></li>
              <li><a href="/erfarna">Erfarna</a></li>
              <li><a href="/avancerat">Avancerat</a></li>
            </ul>
          </li>

          <li class="nav-item">
            <button type="button">
              Om klubben
              <i class="icon">expand_more</i>
            </button>

            <ul class="dropdown">
              <li><a href="/historia">Historia</a></li>
              <li>
                <a href="/gamla-resultat">Gamla resultat</a>
              </li>
              <li>
                <a
                  href="https://member.schack.se/ShowClubRatingServlet?clubid=38616"
                  target="_blank"
                >
                  Rankinglista <i class="icon">open_in_new</i>
                </a>
              </li>
              <li>
                <a href="/klubbmastare">Klubbmästare</a>
              </li>
            </ul>
          </li>

          ${this.renderNavItem('/nyheter', 'Nyheter')}
          ${this.renderNavItem('/kontakt', 'Kontakt')}
        </ul>
      </nav>
    </header>`;
  }
}

customElements.define('c-header', Header);
