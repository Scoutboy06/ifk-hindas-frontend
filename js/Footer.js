import {
  html,
  LitElement,
} from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';

class Footer extends LitElement {
  createRenderRoot() {
    // Disable Shadow DOM
    return this;
  }

  render() {
    return html`<footer id="footer">
      <a href="/" title="IFK Hindås logga" class="logo">
        <img src="/img/emblem.png" />
      </a>

      <div class="nav-container">
        <nav aria-label="Allmäna länkar">
          <h3>Allmänt</h3>

          <ul>
            <li><a href="/">Hem</a></li>
            <li><a href="/om-klubben">Om klubben</a></li>
            <li><a href="/styrelse">Styrelse</a></li>
            <li><a href="/kontakt">Kontakt</a></li>
          </ul>
        </nav>

        <nav aria-label="Klubbens serielag">
          <h3>Serier</h3>

          <ul>
            <li><a href="#">Division 2:5</a></li>
            <li><a href="#">Division 4</a></li>
            <li><a href="#">Division 5</a></li>
          </ul>
        </nav>

        <nav aria-label="Övriga länkar">
          <h3>Resurser</h3>

          <ul>
            <li><a href="#">Rankinglista</a></li>
            <li><a href="#">Sportsadmin</a></li>
          </ul>
        </nav>
      </div>

      <div class="map">
        <h3>Karta</h3>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2132.0990918897173!2d12.434311777074575!3d57.69778627386567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464ffe44a204919f%3A0x629b58dbe39a29f5!2sHind%C3%A5s%20idrottshall!5e0!3m2!1ssv!2sse!4v1710248294388!5m2!1ssv!2sse"
          width="100%"
          height="300"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div class="copy">Copyright &copy; 2024 IFK Hindås</div>
    </footer>`;
  }
}

customElements.define('c-footer', Footer);
