import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'gg-listbuilder-header-item',
  styleUrl: 'lb-header-item.scss',
  shadow: true,
})
export class ListBuilderHeaderItem {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
