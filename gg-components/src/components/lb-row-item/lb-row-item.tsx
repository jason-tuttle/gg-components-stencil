import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'lb-row-item',
  styleUrl: 'lb-row-item.scss',
  shadow: true,
})
export class LbRowItem {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
