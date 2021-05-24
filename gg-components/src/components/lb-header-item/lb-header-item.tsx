import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'lb-header-item',
  styleUrl: 'lb-header-item.css',
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
