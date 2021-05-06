import { Component, Element, Event, EventEmitter, Listen, Prop, State, h } from '@stencil/core';

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
  @Element() element: HTMLElement;

  @Prop() isEditing = false;
  @Prop({ mutable: true }) item: Attribute = {
    displayName: 'My First Attribute',
    id: '1',
    lockable: false,
    obsolete: false,
    order: 1,
    required: false,
    type: 'SINGLE_SELECT',
  };

  @State() isEditingName = false;
  @State() editedName?: string;

  @Listen('click', { capture: true })
  toggleEditName(): void {
    if (!this.isEditingName) {
      this.isEditingName = !this.isEditingName;
      this.element.focus();
    }
  }
  @Listen('keydown')
  handleKeys(e: KeyboardEvent): void {
    if (e.key === 'Enter') {
      this.isEditingName = false;
      this.item.displayName = this.editedName;
      this.editedName = undefined;
      this.submitAttribute.emit({ ...this.item, displayName: this.editedName });
    }
    if (e.key === 'Escape') {
      this.isEditingName = false;
    }
  }

  handleInput(e: Event): void {
    let target = e.target as HTMLInputElement;
    this.editedName = target.value;
  }

  @Event() submitAttribute: EventEmitter<Attribute>;

  render() {
    if (this.isEditingName) {
      return <input type="text" value={this.editedName ?? this.item?.displayName} placeholder="Add a new attribute" onInput={e => this.handleInput(e)} />;
    } else {
      return <strong role="button">{this.item?.displayName ?? this.editedName}</strong>;
    }
  }
}
