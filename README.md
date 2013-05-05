《Node.js开发指南》实践+实例
======

## nodejs入门学习

### 未来规划：

建立几个子目录(如D:/node/)：

* mkdir nodejs //存放node程序和npm模块
* mkdir npm-global //存放node全局模块
* mkdir npm-cache //npm缓存路径

### 配置npm选项

```npm config set prefix "D:\node\node-global"
npm config set cache "D:\node\node-cache"```

## 操作实例

- helloworld.js     第一个程序
- app.js            建立HTTP服务器
- file.txt          读取文件异步同步编程及回调函数
 - readfile.js
 - readfilesync.js
 - readfilecallback.js
- event.js          事件编程