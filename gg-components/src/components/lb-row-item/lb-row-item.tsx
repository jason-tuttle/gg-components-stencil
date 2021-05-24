import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'lb-row-item',
  styleUrl: 'lb-row-item.css',
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
