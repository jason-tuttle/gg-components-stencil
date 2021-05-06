import { newE2EPage } from '@stencil/core/testing';

describe('gg-inline-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gg-inline-input></gg-inline-input>');

    const element = await page.find('gg-inline-input');
    expect(element).toHaveClass('hydrated');
  });
});
