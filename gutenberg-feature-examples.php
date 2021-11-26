<?php
/**
 * Plugin Name:       Gutenberg Feature Examples
 * Description:       This plugins demonstrates various block and theme features of Gutenberg.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           1.0.0
 * Author:            Ryan Welcher
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       gutenberg-feature-examples
 *
 * @package           gutenberg-feature-examples
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
					'slug'  => 'gutenberg-feature-examples',
					'title' => __( 'Gutenberg Feature Examples', 'gutenberg-feature-examples' ),
				),
			)
		);
	},
	10,
	2
);

// Register the blocks
add_action( 'init', function() {

	$blocks = array(
		'block-level-locking',
		'nested-block-locking'
	);

	foreach ( $blocks as $block ) {
		register_block_type(
			trailingslashit(
				plugin_dir_path( __FILE__ ) . 'includes/blocks/' . $block
			)
		);
	}
} );
