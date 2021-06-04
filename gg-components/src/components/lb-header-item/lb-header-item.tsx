import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'lb-header-item',
  styleUrl: 'lb-header-item.scss',
  shadow: true,
})
export class LbHeaderItem {
  render() {
    return (
      <Host class="ds-gridTable--item">
        <slot></slot>
      </Host>
    );
  }
}
