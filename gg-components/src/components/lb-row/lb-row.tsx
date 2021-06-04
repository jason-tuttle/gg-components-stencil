import { Component, h } from '@stencil/core';

@Component({
  tag: 'lb-row',
  styleUrl: 'lb-row.scss',
  shadow: true,
})
export class LbRow {
  render() {
    return (
      <div class="ds-gridTable--row">
        <slot></slot>
      </div>
    );
  }
}
