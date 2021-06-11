import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'gg-listbuilder-row',
  styleUrl: 'listbuilder-row.scss',
  shadow: true,
})
export class ListBuilderRow {
  render() {
    return (
      <Host class="ds-gridTable--row">
        <slot></slot>
      </Host>
    );
  }
}
