# gg-inline-input



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description                                                                  | Type      | Default     |
| ------------ | ------------ | ---------------------------------------------------------------------------- | --------- | ----------- |
| `bold`       | `bold`       | apply bold style the text of the input and display                           | `boolean` | `undefined` |
| `identifier` | `identifier` | unique identifier for the input, should be `id` of model containing the text | `string`  | `undefined` |
| `isEditing`  | `is-editing` | the element is in "edit mode"                                                | `boolean` | `false`     |
| `text`       | `text`       | the original text value of the input                                         | `string`  | `undefined` |


## Events

| Event        | Description                                     | Type                                         |
| ------------ | ----------------------------------------------- | -------------------------------------------- |
| `submitText` | Custom event emitted on Enter key or "focusout" | `CustomEvent<{ id: string; text: string; }>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
