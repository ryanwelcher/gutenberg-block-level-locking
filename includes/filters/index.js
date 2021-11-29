/**
 * External dependencies
 */
import { assign } from 'lodash';
/**
 * WordPress dependencies
 */
import { addFilter } from '@wordpress/hooks'

addFilter(
	'blocks.registerBlockType',
	'block-level-locking/register-block-type',
	function( settings, name ) {
		if ( name !== 'core/list' ) {
			return settings;
		}
		return assign({}, settings, {
			attributes: assign({}, settings.attributes, {
				lock: {
					type: 'object',
					default: {
						move: true,
						remove: true
					}
				}
			})
		})
	},
);
