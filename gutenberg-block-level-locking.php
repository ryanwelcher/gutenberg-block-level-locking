<?php
/**
 * Plugin Name:       Gutenberg Block Level Locking
 * Description:       This plugins demonstrates how block level locking work for Gutenberg 11.6 and WordPress 5.9.
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Ryan Welcher
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       gutenberg-block-level-locking
 *
 * @package           gutenberg-block-level-locking
 */

namespace GutenbergFeatureExamples;

// Add a custom block category.
add_action(
	'block_categories_all',
	function( $categories ) {
		return array_merge(
			$categories,
			array(
				array(
					'slug'  => 'gutenberg-block-level-locking',
					'title' => __( 'Gutenberg Feature Examples', 'gutenberg-block-level-locking' ),
				),
			)
		);
	},
	10,
	2
);

// Register the blocks.
add_action(
	'init',
	function() {
		$blocks = array(
			'block-level-locking',
			'nested-block-locking',
		);

		foreach ( $blocks as $block ) {
			register_block_type(
				trailingslashit(
					plugin_dir_path( __FILE__ ) . 'includes/blocks/' . $block
				)
			);
		}
	}
);

// Register a custom template for the Post post type.
add_action(
	'init',
	function() {

	}
);
