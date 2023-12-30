/** @type {import('stylelint').Config} */
export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
    'stylelint-prettier/recommended',
  ],
  plugins: ['stylelint-plugin-defensive-css', 'stylelint-plugin-logical-css'],
  rules: {
    'block-no-empty': true,
    'declaration-block-no-duplicate-properties': true,
    'max-nesting-depth': 2,
    'plugin/use-logical-properties-and-values': [
      true,
      {
        severity: 'warning',
        ignore: ['overflow-y', 'overflow-x', 'caption-side', 'float', 'clear'],
      },
    ],
    'plugin/use-logical-units': [true, { severity: 'warning' }],
    'plugin/use-defensive-css': [
      true,
      {
        severity: 'warning',
        'accidental-hover': true,
        'background-repeat': true,
        'custom-property-fallback': true,
        'flex-wrapping': true,
        'scroll-chaining': true,
        'scrollbar-gutter': true,
        'vendor-prefix-grouping': true,
      },
    ],
    'rule-empty-line-before': [
      'always',
      { except: ['first-nested', 'after-single-line-comment'] },
    ],
  },
};
