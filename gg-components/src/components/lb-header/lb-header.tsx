import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'gg-listbuilder-header',
  styleUrl: './lb-header.scss',
  shadow: true,
})
export class ListBuilderHeader {
  render() {
    return (
      <Host class="ds-gridTable--header">
        <slot></slot>
      </Host>
    );
  }
}
