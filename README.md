
[![Build Status](https://travis-ci.org/zwfun/cloneDeep.svg?branch=master)](https://travis-ci.org/zwfun/cloneDeep)

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

- [codecov官方文档](https://docs.codecov.io/docs)

#### 项目徽章设置



#### 发布包



