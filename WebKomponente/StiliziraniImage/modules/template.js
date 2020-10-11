const stiliziraniTemplate = document.createElement('template');
stiliziraniTemplate.innerHTML = `
<style>
  .stilizirani-image {
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    width: 0;
    height: 0;
    max-width: 500px;
    max-height: 500px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    border: 15px solid steelblue;
    transition: opacity 0.5s ease;
  }

  .show {
    opacity: 1;
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

  .naslov {
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 800;
    font-family: sans-serif;
    letter-spacing: 1.2px;
  }
</style>

<div class="stilizirani-image hide">
  <slot class="naslov" name="naslov"></slot>
</div>
`;

export { stiliziraniTemplate };