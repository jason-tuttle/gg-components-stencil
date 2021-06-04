import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'lb-header-item',
  styleUrl: 'lb-header-item.scss',
  shadow: true,
})
export class LbHeaderItem {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
