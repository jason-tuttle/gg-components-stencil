import { Component, Element, Event, EventEmitter, Listen, Prop, State, h } from '@stencil/core';

/**
 * Inline input element for use in list-builder
 * @component gg-inline-input
 * @todo
 *   - needs the ability to show invalid state, and corresponding style rules
 */
@Component({
  tag: 'gg-inline-input',
  styleUrl: 'gg-inline-input.scss',
  shadow: true,
})
export class InlineInput {
  /**
   * @property {HTMLElement} element Reference to the host element
   */
  @Element() element: HTMLElement;

  /** the element is in "edit mode" */
  @Prop({ reflect: true }) isEditing = false;
  /** the original text value of the input */
  @Prop() text?: string;
  /** unique identifier for the input, should be `id` of model containing the text */
  @Prop() identifier?: string;
  /** apply bold style the text of the input and display */
  @Prop() bold?: boolean;

  /** input is focused */
  @State() isEditingText = false;
  /** the value of the text input */
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
    if (this.isEditing && this.editedText && this.editedText !== this.text) this.handleSubmit();
  }

  private handleSubmit = (): void => {
    this.isEditingText = false;
    this.submitText.emit({ id: this.identifier, text: this.editedText });
    this.editedText = undefined;
  };

  private handleInput = (e: Event): void => {
    let target = e.target as HTMLInputElement;
    this.editedText = target.value;
  };

  /**
   * Custom event emitted on Enter key or "focusout"
   * @event InlineInput#submitText
   * @type {object}
   * @property {string} id - passed-in `identifier` property
   * @property {string} text - current value of the input element
   */
  @Event() submitText: EventEmitter<{ id: string; text: string }>;

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
      <span role="button" class={this.bold ? 'bold' : ''}>
        {this.text ?? this.editedText}
      </span>
    );
  }
}
