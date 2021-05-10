---
title: 前端版本管理
---

## 背景故事

有一天某项目经理突然找到我, 说生产环境的表单下拉框快速向下滚动出现一片白色, 但是测试环境 OK.

对比了两个项目编译后的公共依赖文件的 hash 后缀, 确实不相同. 判断应该是线上编译版本和测试环境编译版本不一致导致的.

遂找到 UI 库的 release note, 确实在某个版本升级之后引入了 bug.

项目经理问我, 前端没有版本管理的么?

## 前端有没有版本管理

对于 npm 来说, 依赖库版本信息存在 package.json 的 dependencies 中, 同时通过 Semver 语义控制版本.

当我们执行`npm install`时, 会有如下场景

- 如果只存在 package.json, 不存在 package-lock.json, 则会生成一个 package-lock.json.
- 如果 package.json 和 package-lock.json 的规则兼容时, 走 package-lock.json.
- 如果手动修改 package.json 版本或者执行`npm upgrade`时, 则会下载新版本, 并且更新 package-lock.json.

## 问题是如何引入的

最初项目并没有在版本管理中加入 package-lock.json, 同时生产机编译使用`npm install`命令安装依赖, 这样生产机每次都会依照语义去下载最新的依赖文件.

## npm ci

此命令与 `npm install` 类似，不同之处在于它旨在用于自动化环境，例如集成测试环境、线上环境、或者您希望确保干净安装依赖项的任何情况。通过跳过某些面向用户的功能，它可以比常规的 `npm install` 快得多。它也比常规安装更严格，它可以捕获由于本地环境的增量安装引起的错误或不一致。

- 项目必须存在 package-lock.json 或 npm-shrinkwrap.json.
- 如果 lockfiles 中的依赖和 package.json 中不匹配，`npm ci` 会退出并且报错，而不是去更新 lockfiles.
- `npm ci` 只能安装整个项目的依赖，无法安装单个依赖.
- 如果 node_modules 已经存在，它将在 `npm ci` 开始安装之前自动删除.
- `npm ci` 永远不会改变 package.json 和 package-lock.json.

## 我们该怎么做

- 项目组内统一使用`yarn`或者`npm`, 这样可以控制项目只需要维护一份 lock 文件.
- lock 文件在 git 内维护, 不要放入 gitignore 中.
- 提交代码时需检查 lock 文件是否被更新, 需要开发负责人把控.
- CI 脚本使用`npm ci`或`yarn`代替`npm install`
- 定期升级依赖, 并且做好回归测试, 避免技术债.

## [是否应该使用测试环境包代替线上编译](https://juejin.cn/post/6844903635118194702)

如果对升级部署时间非常严控的团队, 这是一个好的方法.

## npm 源管理

像我司禁止使用外网开发, 只能通过 npm 私服下载的情况, 配置.npmrc 中的源, 可以避免每个新入职的小伙伴都需要去设置 npm.
