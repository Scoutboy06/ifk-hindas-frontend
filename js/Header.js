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
   * @param {{ path: string, text: string, disabled?: boolean }}
   */
  _renderNavItem({ path, text, disabled }) {
    return html`<li
      class="nav-item ${window.location.pathname == path ? 'active' : ''}"
    >
      <a href="${path}" disabled="${disabled === true ? 'true' : 'false'}">
        ${text}
      </a>
    </li>`;
  }

  /**
   * @param {string} buttonText The text to display in the button
   * @param {{ text: string, path: string, openInNew?: boolean, disabled?: boolean }[]} paths The paths
   */
  _renderDropdownItem(buttonText, paths) {
    return html`<li class="nav-item">
      <button type="button" @click="${this._handleMobileDropdownToggle}">
        ${buttonText} <i class="icon">expand_more</i>
      </button>

      <ul class="dropdown">
        ${paths.map(
          ({ text, path, openInNew, disabled }) => html`<li
            class="nav-item ${window.location.pathname === path
              ? 'active'
              : ''}"
          >
            <a
              href="${path}"
              target="${openInNew ? '_blank' : '_self'}"
              disabled="${disabled === true ? 'true' : 'false'}"
            >
              ${text}
            </a>
          </li>`
        )}
      </ul>
    </li>`;
  }

  /**
   * @param {PointerEvent} e
   */
  _handleMobileDropdownToggle(e) {
    let target = e.target;
    if (target.localName === 'i') target = target.parentElement;
    const dropdown = target.nextElementSibling;
    dropdown.classList.toggle('open');
  }

  /**
   * @param {PointerEvent} e
   */
  _toggleMobileNav(e) {
    let target = e.target;
    if (target.localName === 'i') target = target.parentElement;
    const mobileNav = target.nextElementSibling;
    mobileNav.classList.toggle('visible');
  }

  render() {
    return html`<header class="header">
      <a href="/" class="logo">
        <picture>
          <source srcset="img/logo-md.webp" type="image/webp" />
          <img src="img/logo-md.png" alt="IFK Hindås logga" type="image/png" />
        </picture>
      </a>

      <button
        @click="${this._toggleMobileNav}"
        class="sidebar-toggle"
        title="Toggle navigation visibility"
        type="button"
      >
        <i class="icon">menu</i>
      </button>

      <nav class="mobile-nav">
        <ul>
          ${this._renderNavItem({ path: '/', text: 'Hem' })}
          ${this._renderDropdownItem('Träna med oss', [
            { text: 'Nybörjare', path: '/nyborjare', disabled: true },
            { text: 'Erfarna', path: '/erfarna', disabled: true },
            { text: 'Avancerat', path: '/avancerat', disabled: true },
          ])}
          ${this._renderDropdownItem('Om klubben', [
            { text: 'Historia', path: '/historia.html' },
            { text: 'Gamla resultat', path: '/gamla-resultat.html' },
            {
              text: html`Rankinglista <i class="icon">open_in_new</i>`,
              path: 'https://member.schack.se/ShowClubRatingServlet?clubid=38616',
              openInNew: true,
            },
            { text: 'Klubbmästare', path: '/klubbmastare', disabled: true },
          ])}
          ${this._renderNavItem({
            path: '/nyheter',
            text: 'Nyheter',
            disabled: true,
          })}
          ${this._renderNavItem({ path: '/kontakt.html', text: 'Kontakt' })}
        </ul>
      </nav>

      <nav class="top-nav">
        <ul>
          ${this._renderNavItem({ path: '/', text: 'Hem' })}
          ${this._renderDropdownItem('Träna med oss', [
            { text: 'Nybörjare', path: '/nyborjare', disabled: true },
            { text: 'Erfarna', path: '/erfarna', disabled: true },
            { text: 'Avancerat', path: '/avancerat', disabled: true },
          ])}
          ${this._renderDropdownItem('Om klubben', [
            { text: 'Historia', path: '/historia.html' },
            { text: 'Gamla resultat', path: '/gamla-resultat.html' },
            {
              text: html`Rankinglista <i class="icon">open_in_new</i>`,
              path: 'https://member.schack.se/ShowClubRatingServlet?clubid=38616',
              openInNew: true,
            },
            { text: 'Klubbmästare', path: '/klubbmastare', disabled: true },
          ])}
          ${this._renderNavItem({
            path: '/nyheter',
            text: 'Nyheter',
            disabled: true,
          })}
          ${this._renderNavItem({ path: '/kontakt.html', text: 'Kontakt' })}
        </ul>
      </nav>
    </header>`;
  }
}

customElements.define('c-header', Header);
