/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps,  InnerBlocks } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 * @return {WPElement} Element to render.
 */
export default function Edit () {
	return (
		<div {...useBlockProps()} >
			<h3>{__('Nested Block Locking', 'gutenberg-block-level-locking')}</h3>
			<p      >
				{ __(
					'When a block is nested inside an InnerBlocks instance, the lock attribute will override any templateLock prop. The InnerBlocks instance below has templateLock set to "all"',
					'gutenberg-block-level-locking'
				) }
			</p>
			<p      >
				{ __(
					'Use the select controls in the Block Inspector controls to change the lock status of the nested block to see how it affects the InnerBlocks templateLock setting.',
					'gutenberg-block-level-locking'
				) }
			</p>
			<InnerBlocks
				templateLock="all"
				template={[['core/paragraph', { content: 'This is a paragraph that sits above our nested block'}],['gutenberg-features/block-level-locking'], ['core/paragraph', { content: 'This is a paragraph that sits below our nested block'}]]}
				allowedBlocks={['gutenberg-features/block-level-locking']}
			/>

		</div>
	);
}
