import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'list-builder',
  styleUrl: './list-builder.scss',
  shadow: true,
})
export class ListBuilder {
  render() {
    return (
      <Host class="ds-gridTable">
        <slot />
      </Host>
    );
  }
}
