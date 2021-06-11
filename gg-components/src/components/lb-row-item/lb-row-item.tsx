import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'gg-listbuilder-row-item',
  styleUrl: 'lb-row-item.scss',
  shadow: true,
})
export class ListBuilderRowItem {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
