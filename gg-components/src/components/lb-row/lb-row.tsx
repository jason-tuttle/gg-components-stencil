import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'lb-row',
  styleUrl: 'lb-row.css',
  shadow: true,
})
export class LbRow {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
