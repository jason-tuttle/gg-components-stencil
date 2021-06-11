import { Component, h } from '@stencil/core';

@Component({
  tag: 'gg-listbuilder',
  styleUrl: 'listbuilder.scss',
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
