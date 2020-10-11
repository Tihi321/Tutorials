const stiliziraniTemplate = document.createElement('template');
stiliziraniTemplate.innerHTML = `
<style>
  .stilizirani-image {
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    width: 400px;
    height: 400px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border: 15px solid steelblue;
    transition: opacity 0.5s ease;
  }

  .show {
    opacity: 1;
  }
  
  .naslov {
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 800;
    font-family: sans-serif;
    letter-spacing: 1.2px;
  }

  .chewie {
    background-color: rgb(167, 128, 20);
    background-blend-mode: screen;
  }
  
  .empire {
    background-color: rgb(83, 89, 140);
    background-blend-mode: color-dodge;
  }
  
  .ingrid {
    background-color: rgb(252, 188, 255);
    background-blend-mode: hard-light;
  }
  
  .nightwing {
    background-color: rgb(62, 170, 254);
    background-blend-mode: luminosity;
  }

</style>
<div class="stilizirani-image">
  <slot class="naslov"></slot>
</div>
`;

class StiliziraniImageComponent extends HTMLElement {
  constructor() {
    super();
    if (!this.shadowRoot) {
      this.attachShadow({mode: 'open'});
      this.shadowRoot.appendChild(stiliziraniTemplate.content.cloneNode(true));
      this.stiliziraniImageContainer = this.shadowRoot.querySelector('.stilizirani-image');
    }

    const src = this.hasAttribute('src') ? this.getAttribute('src') : '';
    this.effect = this.hasAttribute('effect') ? this.getAttribute('effect') : '';

    if (src) {
      this.setSrc(src);
    }

    if (this.effect) {
      this.setEffect(this.effect);
    }
    
  }

  setSrc(source) {
    this.stiliziraniImageContainer.setAttribute("style", `background-image: url(${source})`);
  }

  setEffect(value) {
    if (value) {
      this.stiliziraniImageContainer.classList.add(value);
    }
  }

  showElement() {
    this.stiliziraniImageContainer.classList.add('show');
  }

  static get observedAttributes() {
    return ['src', 'effect'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'src':
        this.hideElement();
        this.setSrc(newValue);
        this.showElement();
      break;
      case 'effect':
        this.effect = newValue;
        this.removeEffect(oldValue);
        this.setEffect(newValue);
      break;
    }

    this.dispatchEvent(new Event('promjena'));
  }

  removeEffect(value) {
    if (value) {
      this.stiliziraniImageContainer.classList.remove(value);
    }
  }
  
  hideElement() {
    this.stiliziraniImageContainer.classList.remove('show');
  }

  connectedCallback() {
    this.showElement();
  }

  disconnectedCallback() {

  }
}

customElements.define('stilizirani-image', StiliziraniImageComponent);