/**
 * External dependencies
 */
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

/**
 * WordPress Dependencies
 */
import { useCopyToClipboard } from '@wordpress/compose'
import { Button } from '@wordpress/components'
import { __ } from '@wordpress/i18n';


const SourceCodeDisplay = ({sourceCode, lang}) => {
	const ref = useCopyToClipboard(sourceCode , () => { alert('copied') })
	return (
		<>
			<SyntaxHighlighter language={lang} style={tomorrow}>
				{sourceCode}
			</SyntaxHighlighter>
			<Button
				type="secondary"
				ref={ref}
				icon="clipboard"
				showTooltip
				label={__("Copy source code", 'gutenberg-feature-examples')}>
					{__("Copy source code", 'gutenberg-feature-examples')}
			</Button>
		</>
	)
}
export default SourceCodeDisplay;
