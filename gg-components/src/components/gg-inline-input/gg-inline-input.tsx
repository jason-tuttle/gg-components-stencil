import { Component, Listen, Prop, State, h } from '@stencil/core';

export type Attribute = {
  displayName: string;
  id: string;
  lockable: boolean;
  obsolete: boolean;
  order: number;
  required: boolean;
  type: string;
};

@Component({
  tag: 'gg-inline-input',
  styleUrl: 'gg-inline-input.css',
  shadow: true,
})
export class GgInlineInput {
  @Prop() isEditing = false;
  @Prop() item: Attribute;

  @State() isEditingName = false;

  @Listen('click', { capture: true })
  toggleEditName(): void {
    this.isEditingName = !this.isEditingName;
  }

  render() {
    console.log(this.isEditing);
    if (this.isEditingName) {
      return <input type="text" value={this.item?.displayName} placeholder="Add a new attribute" />;
    } else {
      return <strong role="button">{this.item?.displayName ?? 'My first component'}</strong>;
    }
  }
}
