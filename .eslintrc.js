module.exports = {
    env: {
        browser: true,
        es6: true
    },
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module',
        ecmaVersion: 2017
    },
    extends: 'eslint:recommended',
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    rules: {
        // 强制使用一致的缩进
        // http://eslint.cn/docs/rules/indent
        indent: ['error', 4, { SwitchCase: 1 }],

        // 要求或禁止使用分号代替 ASI
        // http://eslint.cn/docs/rules/semi
        semi: ['error', 'always'],

        // 要求或禁止使用拖尾逗号
        // http://eslint.cn/docs/rules/comma-dangle
        // 'comma-dangle': ['error', {
        //     'arrays': 'always-multiline',
        //     'objects': 'always-multiline',
        //     'imports': 'always-multiline',
        //     'exports': 'always-multiline',
        //     'functions': 'ignore',
        // }],

        // 禁止未使用过的变量
        // http://eslint.cn/docs/rules/no-unused-vars
        'no-unused-vars': ['warn', { ignoreRestSiblings: true }],

        // 要求或禁止函数圆括号之前有一个空格
        // http://eslint.cn/docs/rules/space-before-function-paren
        'space-before-function-paren': ['off'],

        // 要求箭头函数的参数使用圆括号
        // http://eslint.cn/docs/rules/arrow-parens
        'arrow-parens': ['off'],

        // allow async-await
        // 'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    }
};
