class DateFormatter extends Date {

  getFormattedDate() {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${this.getDate()}-${months[this.getMonth()]}-${this.getFullYear()}`;
  }

}

console.log(new DateFormatter('August 19, 1975 23:15:30').getFormattedDate());


class OneDialog extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<h1>Hello, World!</h1>`;
  }
}

customElements.define('one-dialog', OneDialog);
