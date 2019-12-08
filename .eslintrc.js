module.exports = {
  'env': {
    'browser': true,
    'es6': true
  },
  'extends': ['standard'],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
  ],
  'rules': {
    'semi': 0,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
  }
}
