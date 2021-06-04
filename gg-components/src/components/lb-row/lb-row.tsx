import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'lb-row',
  styleUrl: 'lb-row.scss',
  shadow: true,
})
export class LbRow {
  render() {
    return (
      <Host class="ds-gridTable--row">
        <slot></slot>
      </Host>
    );
  }
}
