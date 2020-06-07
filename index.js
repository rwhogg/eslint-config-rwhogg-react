module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    extends: [
        "rwhogg",
        "plugin:react/recommended",
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
        },
    },
    "settings": {
        "react": {
            "version": "detect",
        },
    },
    "rules": {
        "consistent-return": 0,
    },
}
