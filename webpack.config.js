const defaultConfig = require('@wordpress/scripts/config/webpack.config.js');
module.exports = {
	...defaultConfig,
	entry: {
		'block-level-locking': './includes/blocks/block-level-locking',
		'nested-block-locking': './includes/blocks/nested-block-locking',
		'block-filters': './includes/filters'
	},
};
