module.exports = {
  extends: [
  // add more generic rulesets here, such as:
    //'eslint:recommended',
    'plugin:vue/vue3-recommended'

  ],
  rules: {

    'vue/no-unused-vars': 'error',
    'vue/multi-word-component-names': 'off',
    'vue/html-self-closing': 'off',
    'vue/no-multiple-template-root': 'off',
     indent: 'off'
  }
}
