module.exports = {
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true,
        }
    },
    "rules": {
        "no-invalid-this": 0,
        "babel/no-invalid-this": 1
    },
    "parser": "babel-eslint",
    "extends": [ "google", 'plugin:react/recommended' ],
    "plugins": [ "react", "babel" ]
};