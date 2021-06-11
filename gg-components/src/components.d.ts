/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface GgInlineInput {
        /**
          * apply bold style the text of the input and display
         */
        "bold"?: boolean;
        /**
          * unique identifier for the input, should be `id` of model containing the text
         */
        "identifier"?: string;
        /**
          * the element is in "edit mode"
         */
        "isEditing": boolean;
        /**
          * the original text value of the input
         */
        "text"?: string;
    }
    interface LbHeader {
    }
    interface LbHeaderItem {
    }
    interface LbRow {
    }
    interface LbRowItem {
    }
    interface ListBuilder {
    }
}
declare global {
    interface HTMLGgInlineInputElement extends Components.GgInlineInput, HTMLStencilElement {
    }
    var HTMLGgInlineInputElement: {
        prototype: HTMLGgInlineInputElement;
        new (): HTMLGgInlineInputElement;
    };
    interface HTMLLbHeaderElement extends Components.LbHeader, HTMLStencilElement {
    }
    var HTMLLbHeaderElement: {
        prototype: HTMLLbHeaderElement;
        new (): HTMLLbHeaderElement;
    };
    interface HTMLLbHeaderItemElement extends Components.LbHeaderItem, HTMLStencilElement {
    }
    var HTMLLbHeaderItemElement: {
        prototype: HTMLLbHeaderItemElement;
        new (): HTMLLbHeaderItemElement;
    };
    interface HTMLLbRowElement extends Components.LbRow, HTMLStencilElement {
    }
    var HTMLLbRowElement: {
        prototype: HTMLLbRowElement;
        new (): HTMLLbRowElement;
    };
    interface HTMLLbRowItemElement extends Components.LbRowItem, HTMLStencilElement {
    }
    var HTMLLbRowItemElement: {
        prototype: HTMLLbRowItemElement;
        new (): HTMLLbRowItemElement;
    };
    interface HTMLListBuilderElement extends Components.ListBuilder, HTMLStencilElement {
    }
    var HTMLListBuilderElement: {
        prototype: HTMLListBuilderElement;
        new (): HTMLListBuilderElement;
    };
    interface HTMLElementTagNameMap {
        "gg-inline-input": HTMLGgInlineInputElement;
        "lb-header": HTMLLbHeaderElement;
        "lb-header-item": HTMLLbHeaderItemElement;
        "lb-row": HTMLLbRowElement;
        "lb-row-item": HTMLLbRowItemElement;
        "list-builder": HTMLListBuilderElement;
    }
}
declare namespace LocalJSX {
    interface GgInlineInput {
        /**
          * apply bold style the text of the input and display
         */
        "bold"?: boolean;
        /**
          * unique identifier for the input, should be `id` of model containing the text
         */
        "identifier"?: string;
        /**
          * the element is in "edit mode"
         */
        "isEditing"?: boolean;
        /**
          * Custom event emitted on Enter key or "focusout"
          * @event InlineInput#submitText
          * @type {object}
          * @property {string} id - passed-in `identifier` property
          * @property {string} text - current value of the input element
         */
        "onSubmitText"?: (event: CustomEvent<{ id: string; text: string }>) => void;
        /**
          * the original text value of the input
         */
        "text"?: string;
    }
    interface LbHeader {
    }
    interface LbHeaderItem {
    }
    interface LbRow {
    }
    interface LbRowItem {
    }
    interface ListBuilder {
    }
    interface IntrinsicElements {
        "gg-inline-input": GgInlineInput;
        "lb-header": LbHeader;
        "lb-header-item": LbHeaderItem;
        "lb-row": LbRow;
        "lb-row-item": LbRowItem;
        "list-builder": ListBuilder;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "gg-inline-input": LocalJSX.GgInlineInput & JSXBase.HTMLAttributes<HTMLGgInlineInputElement>;
            "lb-header": LocalJSX.LbHeader & JSXBase.HTMLAttributes<HTMLLbHeaderElement>;
            "lb-header-item": LocalJSX.LbHeaderItem & JSXBase.HTMLAttributes<HTMLLbHeaderItemElement>;
            "lb-row": LocalJSX.LbRow & JSXBase.HTMLAttributes<HTMLLbRowElement>;
            "lb-row-item": LocalJSX.LbRowItem & JSXBase.HTMLAttributes<HTMLLbRowItemElement>;
            "list-builder": LocalJSX.ListBuilder & JSXBase.HTMLAttributes<HTMLListBuilderElement>;
        }
    }
}
