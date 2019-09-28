# svelte-fontawesome

- Sapper support
- Duotone support

## Installation

```bash
npm i svelte-fontawesome

OR

yarn add svelte-fontawesome
```

### Requirements

```bash
npm i @fortawesome/fontawesome-svg-core

OR

yarn add @fortawesome/fontawesome-svg-core
```

## Usage

### Install the icons your want

#### Free icons

```bash
npm i @fortawesome/free-solid-svg-icons
npm i @fortawesome/free-brands-svg-icons
npm i @fortawesome/free-regular-svg-icons

OR

yarn add @fortawesome/free-solid-svg-icons
yarn add @fortawesome/free-brands-svg-icons
yarn add @fortawesome/free-regular-svg-icons
```

#### Pro icons

More info [here](https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers)

```bash
npm i @fortawesome/pro-solid-svg-icons
npm i @fortawesome/pro-regular-svg-icons
npm i @fortawesome/pro-light-svg-icons
npm i @fortawesome/pro-duotone-svg-icons

OR

yarn add @fortawesome/pro-solid-svg-icons
yarn add @fortawesome/pro-regular-svg-icons
yarn add @fortawesome/pro-light-svg-icons
yarn add @fortawesome/pro-duotone-svg-icons
```

### Example

```svelte

<script>
  import Fa from "svelte-fontawesome"
  import { faCircle } from '@fortawesome/free-solid-svg-icons'
</script>

<Fa>
  icon={faCircle}
  size="sm"
  color="#000000"
</Fa>

```

### Attributes

| Attribute        | Usage                                                                                                                                           |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| icon `required`  | The icon you imported from font awesome                                                                                                         |
| color            | Can be anything that the fill svg property supports                                                                                             |
| secondaryColor   | If you are using Duotone it's the secondary color                                                                                               |
| secondaryOpacity | If you are using Duotone it's the opacity of the secondary color                                                                                |
| size             | Can be a string from [this list](https://fontawesome.com/how-to-use/on-the-web/styling/sizing-icons#scale) or a standard css size in any units. |
| flip             | Can be "h" for horizontal flip, "v" for vertical flip, or "hv" for both.                                                                        |
| rotate           | In degrees                                                                                                                                      |
| style            | Custom css style on the &lt;svg>                                                                                                                |
