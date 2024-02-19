import stylisticJs from '@stylistic/eslint-plugin-js'

export default [
  {
    plugins: {
      '@stylistic/js': stylisticJs
    },
    rules: {
      'indent': ['error', 2],
      '@stylistic/js/indent': ['error', 2],
      '@stylistic/js/no-trailing-spaces': ["error", { "skipBlankLines": true }],
      // ...
    }
  }
]