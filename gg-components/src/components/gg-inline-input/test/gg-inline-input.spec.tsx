import { newSpecPage } from '@stencil/core/testing';
import { GgInlineInput } from '../gg-inline-input';
import { expect } from 'chai';

describe('gg-inline-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [GgInlineInput],
      html: `<gg-inline-input></gg-inline-input>`,
    });
    expect(page.root).to.have.html(`
      <gg-inline-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </gg-inline-input>
    `);
  });
});
