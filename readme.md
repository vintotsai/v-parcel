mkdir my-app && cd my-app && npm init -y && npm i -D parcel-bundler 

touch index.html && touch index.js
  在index.html中引入index.js（支持es6 HMR）

npm i -D less && touch reset.less
  加入less支持，在index.js中引用 import './reset.less'（支持样式HMR）

<script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
  引入$并测试跨域请求
  ```javascript
  $.ajax({
        method: 'GET',
        dataType: "jsonp",
        url: 'https://api.douban.com/v2/movie/top250?count=10'
      }).done(function (data) {
        console.log('data->', data)
      }
  ```

  