import { Component, Element, Event, EventEmitter, Listen, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'gg-inline-input',
  styleUrl: 'gg-inline-input.scss',
  shadow: true,
})
export class GgInlineInput {
  @Element() element: HTMLElement;

  @Prop({ reflect: true }) isEditing = false;
  @Prop() text?: string;
  @Prop() identifier?: string;
  @Prop() bold?: boolean;

  @State() isEditingText = false;
  @State() editedText?: string;

  @Listen('click', { capture: true })
  toggleEditName(): void {
    if (!this.isEditingText) {
      this.isEditingText = !this.isEditingText;
      this.element.focus();
    }
  }
  @Listen('keydown')
  handleKeys(e: KeyboardEvent): void {
    console.log('keydown');
    if (e.key === 'Enter') {
      this.element.blur();
      return;
    }
    if (e.key === 'Escape') {
      this.isEditingText = false;
      return;
    }
  }
  @Listen('focusout')
  handleFocusout(): void {
    // TODO: needs the ability to show invalid state
    if (this.isEditing && this.editedText && this.editedText !== this.text) this.handleSubmit();
  }

  handleSubmit(): void {
    this.isEditingText = false;
    this.submitAttribute.emit({ id: this.identifier, text: this.editedText });
    this.editedText = undefined;
  }

  private handleInput = (e: Event): void => {
    let target = e.target as HTMLInputElement;
    this.editedText = target.value;
  };

  @Event() submitAttribute: EventEmitter<{ id: string; text: string }>;

  render() {
    return this.isEditing || !this.text ? (
      <div class="inputInline">
        {this.bold ? (
          <strong>
            <input type="text" value={this.editedText || this.text} placeholder="Add a new attribute" onInput={this.handleInput} />
          </strong>
        ) : (
          <input type="text" value={this.editedText || this.text} placeholder="Add a new attribute" onInput={this.handleInput} />
        )}
      </div>
    ) : (
      <span role="button">{this.text ?? this.editedText}</span>
    );
  }
}
