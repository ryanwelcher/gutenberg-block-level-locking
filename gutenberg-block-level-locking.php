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

// Register a custom post type with a default template.
add_action(
	'init',
	function() {
		register_post_type(
			'block-level-locking',
			array(
				'labels'        => array(
					'name' => __( 'Block Level Locking', 'gutenberg-block-level-locking' ),
				),
				'public'        => true,
				'show_in_rest'  => true,
				'template'      => array(
					array( 'core/paragraph', array( 'content' => 'This is the locked paragraph above' ) ),
					array( 'gutenberg-features/block-level-locking' ),
					array( 'core/paragraph', array( 'content' => 'This is the locked paragraph below' ) ),
				),
				'template_lock' => 'all',
			)
		);
	}
);

// Enqueue the block filters.
add_action(
	'enqueue_block_editor_assets',
	function() {
		$filter_assets_dir_path = plugin_dir_path( __FILE__ ) . 'build/block-filters.asset.php';
		if ( file_exists( $filter_assets_dir_path ) ) {
			$assets = require $filter_assets_dir_path;
			wp_enqueue_script(
				'gutenberg-block-level-locking-block-filters',
				plugins_url( 'build/block-filters.js', __FILE__ ),
				$assets['dependencies'],
				$assets['version'],
				true
			);
		}
	}
);
