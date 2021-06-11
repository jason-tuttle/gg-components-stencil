import { newSpecPage } from '@stencil/core/testing';
import { InlineInput } from '../gg-inline-input';
import { expect } from 'chai';

describe('gg-inline-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InlineInput],
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
