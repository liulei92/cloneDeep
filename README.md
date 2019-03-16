

<div align="center">

[![Build Status](https://travis-ci.org/zwfun/cloneDeep.svg?branch=master)](https://travis-ci.org/zwfun/cloneDeep) [![codecov](https://codecov.io/gh/zwfun/cloneDeep/branch/master/graph/badge.svg)](https://codecov.io/gh/zwfun/cloneDeep)

</div>

# 发布一个放心使用并且可维护的npm包(以发布一个深拷贝方法为例)

#### 怎样才是一个放心使用并且可维护的npm包
- 发布的包能构建成功
- 发布的包经过测试(只有经过测试用户才能放心使用)
- 发布的包是符合代码规范, 提交规范(能让参与项目维护的用户使用同一套代码规范)

#### 以发布一个深拷贝包为例，编写并且发布npm流程
- 设置package.json文件
- webpack配置
- 编写深拷贝方法
- 编写单元测试/运行测试/测试报告
- 提交前格式化代码
- 放到github上
- 自动构建和自动化测试
- 项目徽章设置
- 发布包

#### package.json配置

npm init创建package.json文件

[我的package.json文件配置](https://github.com/zwfun/cloneDeep/blob/master/package.json)

package.json文件配置参考文档
- [官方文档 Creating a package.json file](https://docs.npmjs.com/creating-a-package-json-file)
- [npm新的包名规范](https://www.jianshu.com/p/7dc0083f30a6)
- [npm包结构](https://www.kancloud.cn/simon_chang/srqcnodejs/200134)
- [npm包描述文件与NPM](https://www.kancloud.cn/simon_chang/srqcnodejs/200135)
- [npm版本号规范](https://semver.org/lang/zh-CN/)

#### webpack配置
webpack帮我们做的事
- 打包js文件
- es6的支持

如何配置
- 配置文件入口和出口
- 配置.babelrc支持es6

webpack配置参考文档
- [webpack官方中文指南](https://webpack.docschina.org/guides/)
- [babel配置](https://babeljs.io/setup#installation)
ps: 之后会写一篇关于webpack配置的，再补充进来

安装的包: npm i webpack clean-webpack-plugin webpack-cli @babel/cli @babel/core @babel/preset-env @babel/register -D

#### 编写深拷贝方法
实现深拷贝数组和对象。函数和Date类型不做深拷贝。

#### 添加单元测试
为什么要单元测试
    只有通过单元测试并有一定的测试覆盖率，用户才能放心使用你的包

怎么单元测试
- 使用mocha做单元测试
- 使用chai的expect做断言库(还有很多种选择 用nodeJS原生的assert库也行)
- 使用nyc生成测试覆盖率(istanbul也可以)
- 编写测试用例

安装的包: npm i chai mocha nyc  -D

参考文档
- [mocha官方教程](https://mochajs.org/)
- [阮一峰 测试框架 Mocha 实例教程](http://www.ruanyifeng.com/blog/2015/12/a-mocha-tutorial-of-examples.html)
- [chai官网](https://www.chaijs.com/guide/styles/#expect)
- [nyc教程 我参考npm包的readme](https://www.npmjs.com/package/nyc)

ps: 在测试文件中使用import 需要引入@babel/register包(改写require命令，为它加上一个钩子。此后，每当使用require加载.js、.jsx、.es和.es6后缀名的文件，就会先用Babel进行转码)， 使用如下命令: nyc mocha --require @babel/register -R spec test

#### CI/CD 持续集成服务、自动构建和自动化测试
- travis-ci
Travis CI 提供的是持续集成服务（Continuous Integration，简称 CI）。它绑定 Github 上面的项目，只要有新的代码，就会自动抓取。然后，提供一个运行环境，执行测试，完成构建，还能部署到服务器。

持续集成指的是只要代码有变更，就自动运行构建和测试，反馈运行结果。确保符合预期以后，再将新代码"集成"到主干。

持续集成的好处在于，每次代码的小幅变更，就能看到运行结果，从而不断累积小的变更，而不是在开发周期结束时，一下子合并一大块代码。

- [travis-ci官方文档](https://docs.travis-ci.com/)
- [javascript width nodejs  .travis.yml配置教程](https://docs.travis-ci.com/user/languages/javascript-with-nodejs/)
- [阮一峰 持续集成服务 Travis CI 教程](http://www.ruanyifeng.com/blog/2017/12/travis_ci_tutorial.html)

- codecov

改善您的代码审查工作流程和质量。 Codecov提供高度集成的工具来分组，合并，存档和比较覆盖率报告

网上的教程比较少 自己写个
- 在[codecov](https://codecov.io/)用github账号登录
[![https://github.com/zwfun](https://github.com/zwfun/cloneDeep/blob/master/doc/img/1.png?raw=true)](https://github.com/zwfun/cloneDeep)

- 添加新项目
[![https://github.com/zwfun](https://github.com/zwfun/cloneDeep/blob/master/doc/img/2.png?raw=true)](https://github.com/zwfun/cloneDeep)
- 选择一个项目
[![https://github.com/zwfun](https://github.com/zwfun/cloneDeep/blob/master/doc/img/3.png?raw=true)](https://github.com/zwfun/cloneDeep)
- 复制token, 放在.travis.yml文件中
<pre>
// 这个token用来上传测试报告到对应的项目的
env: - CODECOV_TOKEN="6a3d8b1b-fe8e-44cb-8b6d-6af0d9344adc" 
</pre>
[![https://github.com/zwfun](https://github.com/zwfun/cloneDeep/blob/master/doc/img/4.png?raw=true)](https://github.com/zwfun/cloneDeep)


- 在.travis.yml文件中添加如下命令
    <pre>
        install:
        - npm install //安装依赖包
        - sudo pip install codecov // 安装codecov包
        script:
        - npm test // 执行测试用例
        - npm run report-coverage //生成测试报告
    </pre>
- 在package.json文件中添加
    <pre>
        "test": "nyc mocha --require @babel/register -R spec test", // 执行测试用例
        "report-coverage": "nyc report --reporter=text-lcov > coverage.lcov && codecov" // 上传测试报告
    </pre>
    
参考文档
- [codecov官方文档](https://docs.codecov.io/docs)
- [codecov js node环境 example](https://github.com/codecov/example-node)

#### github徽章设置
- [github徽章设置官网](https://shields.io/)

#### 发布包

- npm login
- 填写用户名和密码邮箱
- npm publish
- npm报错了，原因是跟已发布的包重名了， 修改了package.json中的name(You do not have permission to publish "clonedeep". Are you logged in as the correct user?)
- 发布成功+ zwclonedeep@0.1.0

<pre>
npm ERR! code E403
npm ERR! 403 Forbidden - PUT https://registry.npmjs.org/clonedeep - You do not have permission to publish "clonedeep". Are you logged in as the correct user?

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/zw/npm_cache/_logs/2019-03-16T07_40_09_245Z-debug.log
</pre>