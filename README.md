# description

一个简单的 npm 包项目

# 涉及技术栈

node + TS + ES6

# Install

> $ npm install kivet_npm_package

或

> $ yarn add kivet_npm_package

# Usage

```javascript
import { genderData, joinArr, clearSame } from 'kivet_npm_package';

const arr = ['111', '222', '333', '222'];

console.log('基础数据：', genderData);
console.log('拼接数组：', joinArr(arr));
console.log('数组去重：', clearSame(arr));
```

# 变更日志

- v1.0.0

  - npm 包初始化
  - 新增数组拼接方法 demo
  - 新增数组去重 demo
  - 新增性别基础数据枚举

- v1.0.1
  - 新增 TS 支持
