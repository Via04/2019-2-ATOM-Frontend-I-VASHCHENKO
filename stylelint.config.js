// Configuration for StyleLint
// See: https://stylelint.io/user-guide/configuration/

module.exports = {
	extends: ['@wemake-services/stylelint-config-scss', 'stylelint-config-css-modules', 'stylelint-a11y/recommended'],
	plugins: ['stylelint-no-unsupported-browser-features', 'stylelint-a11y'],

	rules: {
		// ignore special `var-` css variables for `:export`
		'property-no-unknown': [
			true,
			{
				ignoreProperties: ['/^var-/'],
			},
		],
		'plugin/stylelint-no-indistinguishable-colors': false,
		'plugin/selector-tag-no-without-class': null,

		// custom plugins to work with
		'plugin/no-unsupported-browser-features': [
			true,
			{
				severity: 'warning',
				ignore: ['flexbox', 'viewport-units'],
			},
		],

		// a11y
		'a11y/content-property-no-static-value': true,
		'csstools/use-nesting': 'ignore',
		indentation: 'tab',
		'scss/media-feature-value-dollar-variable': 'never',
		'scale-unlimited/declaration-strict-value': [['/color/', 'fill', 'stroke'], { disableFix: true }],
	},
};
