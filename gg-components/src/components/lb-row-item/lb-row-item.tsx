import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'lb-row-item',
  styleUrl: 'lb-row-item.scss',
  shadow: true,
})
export class LbRowItem {
  render() {
    return (
      <Host class="ds-gridTable--item">
        <slot></slot>
      </Host>
    );
  }
}
