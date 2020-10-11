import { stiliziraniTemplate } from "./template.js";

class StiliziraniImageComponent extends HTMLElement {
  constructor() {
    super();
    if (!this.shadowRoot) {
      this.attachShadow({mode: 'open'});
      this.shadowRoot.appendChild(stiliziraniTemplate.content.cloneNode(true));
      this.stiliziraniImageContainer = this.shadowRoot.querySelector('.stilizirani-image');
    }

    this.imgElement = new Image();
    this.imageSize = {};
    this.setImageSizeCallback = this.setImageSizeCallback.bind(this);

    this.src = this.hasAttribute('src') ? this.getAttribute('src') : '';
    this.effect = this.hasAttribute('effect') ? this.getAttribute('effect') : '';

    this.updateImageSize();
  }

  updateImageSize() {
    if (this.src) {
      this.imgElement.src = this.src;
      this.imgElement.addEventListener('load', this.setImageSizeCallback);
    }
  }

  set setImageWithNewSize(value) {
    this.imageSize = value;
    this.stiliziraniImageContainer.setAttribute('style', `width: ${this.imageSize.width}px; height: ${this.imageSize.height}px; background-image: url(${this.src});`);
    this.showElement();
  }

  setImageSizeCallback(event) {
    this.setImageWithNewSize = {
      width: event.target.width,
      height: event.target.height
    };
  }

  static get observedAttributes() {
    return ['src', 'effect'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'src':
        this.hideElement();
        this.src = newValue;
        this.updateImageSize();
      break;
      case 'effect':
        this.effect = newValue;
        this.removeEffect(oldValue);
        this.setEffect(newValue);
      break;
    }
  }

  setEffect(value) {
    if (value) {
      this.stiliziraniImageContainer.classList.add(value);
    }
  }

  removeEffect(value) {
    if (value) {
      this.stiliziraniImageContainer.classList.remove(value);
    }
  }

  hideElement() {
    this.stiliziraniImageContainer.classList.remove('show');
  }

  showElement() {
    this.stiliziraniImageContainer.classList.add('show');
  }

  connectedCallback() {
    this.setEffect(this.effect); 
  }

  disconnectedCallback() {
    this.imgElement.removeEventListener('load', this.setImageSizeCallback);
  }
}

export { StiliziraniImageComponent };