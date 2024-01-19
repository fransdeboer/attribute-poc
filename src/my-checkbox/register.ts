import { MyCheckbox } from './my-checkbox.js';

customElements.define('my-checkbox', MyCheckbox);

declare global {
  interface HTMLElementTagNameMap {
    'my-checkbox': MyCheckbox;
  }
}
