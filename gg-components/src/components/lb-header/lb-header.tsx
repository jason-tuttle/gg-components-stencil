import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'lb-header',
  styleUrl: './lb-header.scss',
  shadow: true,
})
export class LbHeader {
  render() {
    return (
      <Host class="ds-gridTable--header">
        <slot></slot>
      </Host>
    );
  }
}
