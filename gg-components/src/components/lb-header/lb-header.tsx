import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'lb-header',
  styleUrl: './lb-header.css',
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
