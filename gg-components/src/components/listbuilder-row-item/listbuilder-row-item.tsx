import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'gg-listbuilder-row-item',
  styleUrl: 'listbuilder-row-item.scss',
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
