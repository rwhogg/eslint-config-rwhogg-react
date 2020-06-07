module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        "rwhogg",
        "plugin:react/recommended"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
        },
    },
    "env": {
        "browser": true,
        "es2020": true,
        "jest": true,
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
