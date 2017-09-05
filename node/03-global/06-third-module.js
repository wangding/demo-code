#!/usr/bin/node
// 06-third-module.js
// 第三方模块的使用

// usage:
//   ./06-third-module.js   会报错：cannot find module 'date-now'
//   npm install date-now   速度很慢，更换 npm 包的仓库
//   npm install date-now --registry=http://registry.npm.taobao.org  速度 OK
//   ./06-third-module.js   运行成功
//   ll                     看到 node_modules 文件夹，下面有 date-now
//   npm config ls -l       重看 npm 配置信息，registry = "https://registry.npmjs.org/"
//                          每次 npm install 时，设置仓库地址非常不方便
//   npm config set registry https://registry.npmjs.org/
//   npm config ls -l       看到设置成功
//   rm -rf node_modules    删除依赖包
//   npm install date-now   看一下速度

//                          引入 package.json 配置文件，如果我们的代码放到仓库里，node_modules 依赖包
//                          一般是不会上传的，因为这些代码不是我们写的，npm 的包仓库上是能找到的。但
//                          是当别人下载或者部署我们的代码的时候，他怎么知道我们的代码都使用了哪些依
//                          赖库，如果去查看代码，或者让代码运行，查看报错信息，就太不方便了。这里面
//                          有一个非常好用的工具，package.json，这是项目配置信息文件。这个文件里会保
//                          存着项目中依赖包的信息。
//                          npm init
//                          npm install package-name -g
//                          npm install package-name -S
//                          npm install package-name -D
//                          关于 npm 和 package.json 更多的用法，后面有专门的话题来讲解如何开发并发布
//                          自己的包。

var now = require('date-now');

console.log(now());
console.log(Date.now());
