import { newE2EPage } from '@stencil/core/testing';
import { expect } from 'chai';

describe('gg-inline-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<gg-inline-input></gg-inline-input>');

    const element = await page.find('gg-inline-input');
    expect(element).to.have.class('hydrated');
  });
});
