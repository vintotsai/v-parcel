## steps

> * mkdir my-app && cd my-app && npm init -y && npm i -D parcel-bundler

> * touch index.html && touch index.js

> * 在 index.html 中引入 index.js（支持 es6 HMR）

> * npm i -D less && touch reset.less

> * 加入 less 支持，在 index.js 中引用 import './reset.less'（支持样式 HMR）

> * <script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>

```javascript
$.ajax({
  method: 'GET',
  dataType: 'jsonp',
  url: 'https://api.douban.com/v2/movie/top250?count=10'
}).done(function(data) {
  console.log('data->', data)
})
```

> * 在 package.json 写入命令行脚本

```
  "start": "parcel index.html -o"
  "build": "parcel build index.html"
```

## a parcel project

#### install dependencies

```
npm install
```

#### start

```
npm start
```

####build

```
npm build
```
