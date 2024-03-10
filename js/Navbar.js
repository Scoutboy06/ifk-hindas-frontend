import {
  html,
  LitElement,
} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

class Navbar extends LitElement {
  createRenderRoot() {
    // Disable Shadow DOM
    return this;
  }

  render() {
    return html`<nav class="navbar">
      <a href="/" class="emblem">
        <img src="/img/emblem.png" alt="IFK Hindås Emblem" />
      </a>

      <button title="Toggle navigation visibility" type="button">
        <!-- prettier-ignore -->
        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path fill="#fff" d="M160-240q-17 0-28.5-11.5T120-280q0-17 11.5-28.5T160-320h640q17 0 28.5 11.5T840-280q0 17-11.5 28.5T800-240H160Zm0-200q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h640q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440H160Zm0-200q-17 0-28.5-11.5T120-680q0-17 11.5-28.5T160-720h640q17 0 28.5 11.5T840-680q0 17-11.5 28.5T800-640H160Z"/></svg>
      </button>
    </nav>`;
  }
}

customElements.define('c-navbar', Navbar);
