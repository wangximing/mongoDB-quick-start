## mongoDB学习

### 安装
OSX下运行下列命令
```
brew update
brew install mongodb
```

### 运行该项目
在项目根路径下运行下列命令
`npm install`, `mongod --dbpath=./data --port 27017`, `node app.js`。

参考：
[mongoDB install](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/)

[mongoDB quick start](http://mongodb.github.io/node-mongodb-native/2.0/overview/quickstart/)

### 疑问
运行教程中的`mongod --dbpath=/data --port 27017`命令时错误

不理解mongoDB的存储位置
