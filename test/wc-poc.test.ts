import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import type { WcPoc } from '../src/wc-poc.js';
import '../src/wc-poc.js';

describe('WcPoc', () => {
  let element: WcPoc;
  beforeEach(async () => {
    element = await fixture(html`<wc-poc></wc-poc>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot!.querySelector('h1')!;
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
