import { Component, h } from '@stencil/core';

@Component({
  tag: 'lb-header',
  styleUrl: './lb-header.scss',
  shadow: true,
})
export class LbHeader {
  render() {
    return (
      <div class="ds-gridTable--header">
        <slot></slot>
      </div>
    );
  }
}
