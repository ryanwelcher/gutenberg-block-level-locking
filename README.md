# Block Level Locking

## Availability
- Gutenberg Plugin v11.6 or greater
- WordPress 5.9

## Overview
Theme/plugin developer can now manage when a block can be moved or deleted after being inserted. This applies to both core and custom blocks. This is done by registering the block with the new `lock` attribute. It's properties are `move` and `remove` that both accept boolean values with `true` representing locked and `false` representing unlocked. This attributes is added to all blocks with a default value of `undefined`

## Examples:

### Move and Remove locked.
This configuration does **not** allow the block to be moved or deleted from the block-editor.

```json
"attributes":{
	"lock": {
		"type":"object",
		"default": {
			"move": true,
			"remove": true
		}
	}
}
```
### Move and Remove unlocked
This configuration allows the block to to be moved or deleted from the block-editor. This is the default configuration.
```json
"attributes":{
	"lock": {
		"type":"object",
		"default": {
			"move": false,
			"remove": false
		}
	}
}
```
### Mix and match the settings
The settings can be configured as needed. This example allows moving the block but not deleting it.
```json
"attributes":{
	"lock": {
		"type":"object",
		"default": {
			"move": false,
			"remove": true
		}
	}
}
```

### Templates and InnerBlocks templateLock
This table shows the intersect of conditions between `templateLock` and `lock`

For removing:
| lock.remove\templateLock | `"all"`      | `"insert"`   | `false`      |
|--------------------------|--------------|--------------|--------------|
| `true`                   | can't Remove | can't Remove | can't Remove |
| `false`                  | can Remove   | can Remove   | can Remove   |
| `undefined`              | can't Remove | can't Remove | can Remove   |

For moving:
| lock.move\templateLock | `"all"`    | `"insert"` | `false`    |
|------------------------|------------|------------|------------|
| `true`                 | can't Move | can't Move | can't Move |
| `false`                | can Move   | can Move   | can Move   |
| `undefined`            | can't Move | can Move   | can Move   |


### Interacting with the `lock` attribute.
Because this is an attribute, it is possible to filter the values or change them via controls.

This repository contains the `Feature: Block-level Locking` block that provides an example of a block that is locked but can be changed via Sidebar controls.

There is also a filter in place to lock any instance of the `List` block.


## Development/Working with this repo.
You can download this repo as a .zip archive and install the plugin via the WordPress admin. If you want to experiment with the code, this repository may be forked and cloned to your local development environment. Once cloned. run `npm install && npm run start`.
