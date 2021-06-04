import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'lb-row',
  styleUrl: 'lb-row.scss',
  shadow: true,
})
export class LbRow {
  render() {
    return (
      <Host class="ds-gridTable">
        <slot></slot>
      </Host>
    );
  }
}
