import { Component, h } from '@stencil/core';

@Component({
  tag: 'list-builder',
  styleUrl: './list-builder.scss',
  shadow: true,
})
export class ListBuilder {
  render() {
    return (
      <div class="ds-gridTable">
        <slot />
      </div>
    );
  }
}
