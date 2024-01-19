import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import type { CSSResultGroup, TemplateResult } from 'lit';
import { LitElement, html } from 'lit';
import { state } from 'lit/decorators.js';
import styles from './my-checkbox.scss.js';

export class MyCheckbox extends ScopedElementsMixin(LitElement) {

  /** @private */
  static override styles: CSSResultGroup = styles;

  @state()
  isChecked = false;

  override render(): string | TemplateResult {

    return html`
      <div>
        <input type="checkbox" ?checked=${this.isChecked}>Check me
      </div>

      <div>
        <button @click=${this.onCheckTheBoxClicked}>Check the box</button>
      </div>
      `;
  }

  onCheckTheBoxClicked() {
    this.isChecked = !this.isChecked;
  }
}
