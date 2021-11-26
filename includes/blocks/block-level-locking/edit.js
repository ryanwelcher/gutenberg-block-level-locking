/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { SelectControl, PanelBody } from '@wordpress/components';

/**
 * Internal dependencies
 */
import './editor.scss';
import SourceCodeDisplay from '../components/source-code-display';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 * @return {WPElement} Element to render.
 */
export default function Edit ({attributes:{lock}, setAttributes } ) {
	const { move, remove } = lock;
	const codeString = `"attributes":{\n\t"lock": {\n\t\t"type":"object",\n\t\t"default": {\n\t\t\t"move": ${move},\n\t\t\t"remove": ${remove}\n\t\t}\n\t}\n}`;

	return (
		<div { ...useBlockProps() } >
			<h3>{__('Block Level Locking', 'gutenberg-feature-examples')}</h3>
			<p      >
				{ __(
					'Whether a block can be moved or deleted can now be controlled via block attributes',
					'gutenberg-feature-examples'
				) }
			</p>
			<p      >
				{ __(
					'Use the select controls in the Block Inspector controls to change the status of this block and update the source code.',
					'gutenberg-feature-examples'
				) }
			</p>
			<h4>{__('Current Status', 'gutenberg-feature-examples')}</h4>
			<ul>
				<li>{move === false ? __('Can be moved', 'gutenberg-feature-examples'):__('Cannot be moved', 'gutenberg-feature-examples') }</li>
				<li>{remove === false ? __('Can be removed', 'gutenberg-feature-examples'):__('Cannot be removed', 'gutenberg-feature-examples') }</li>
			</ul>
			<SourceCodeDisplay sourceCode={codeString} lang="json"/>
			<InspectorControls>
				<PanelBody title={__('Locking Controls', 'gutenberg-feature-examples')}>
					<SelectControl
						label="Move"
						value={move}
						options={ [
							{ label: 'Movable', value: false },
							{ label: 'Locked', value: true },
						] }
						onChange={ ( newStatus ) => {
							setAttributes({ lock: {...lock, move: JSON.parse(newStatus) } })
							}
						}
					/>
					<SelectControl
						label="Remove"
						value={remove}
						options={ [
							{ label: 'Removable', value: false },
							{ label: 'Locked', value: true },
						] }
						onChange={ ( newStatus ) => {
							setAttributes({ lock: {...lock, remove: JSON.parse(newStatus) } })
							}
						}
					/>
				</PanelBody>
			</InspectorControls>
		</div>
	);
}
