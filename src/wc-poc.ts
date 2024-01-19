import { ScopedElementsMap, ScopedElementsMixin } from '@open-wc/scoped-elements';
import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { MyCheckbox } from './my-checkbox/my-checkbox';

@customElement('attribute-poc')
export class WcPoc extends ScopedElementsMixin(LitElement) {

  static get scopedElements(): ScopedElementsMap {
    return {
      'my-checkbox': MyCheckbox
    };
  }

  @state()
  isChecked = false;

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      font-size: calc(10px + 2vmin);
      color: #1a2b42;
      max-width: 960px;
      margin: 0 auto;
      text-align: center;
      background-color: var(--wc-poc-background-color);
    }

    dna-card {
      padding: 1rem;
    }

  `;

  render() {
    return html`
      <!-- <input type="checkbox" ?checked=${this.isChecked}>Check me
      <button @click=${this.onCheckTheBoxClicked}>Check the box</button> -->

      <my-checkbox></my-checkbox>
    `;
  }

  onCheckTheBoxClicked() {
    this.isChecked = !this.isChecked;
  }
}
