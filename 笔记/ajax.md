# Ajax

## 基础概念

### 服务端与服务器

**服务器**：存放和对外提供资源的电脑

**客户端**：获取和消费资源的电脑

**URL**：统一资源定位器，用于表示互联网上每个资源的唯一存放位置；浏览器只有通过URL地址才能正确指导资源的存放位置，从而访问到对应的资源

组成：

1. 客户端与服务器间通信协议
2. 存放资源的服务器名称
3. 资源在服务器上存放的具体位置

![image-20220304100334579](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220304100334579.png)

<img src="C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220304101445011.png" alt="image-20220304101445011" style="zoom:80%;" />

数据是网页的灵魂，html（骨架）、css（颜值）、js（行为）皆是为了数据服务

只要是资源，必然通过**请求--处理--响应**的方式获取

#### 在网页中请求数据

通过 XMLHttpRequest 对象

`var xhrObj = new XMLHttpRequest()`

请求方式：

`get()` ：获取服务端资源

`post()` ：向服务器提交数据

## Ajax

Asynchronous Javascript and XML（异步的js和XML）

利用XMLHttpRequest在网页中请求数据称为Ajax

实现**网页与服务器之间的数据交互**

## jQuery+Ajax

#### `$.get()`

 发起请求，将服务器上的资源请求到客户端

`$.get(url,[data],[callback])`

![image-20220306162613092](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220306162613092.png)

不带参数

```html
    <script>       $.get('http://www.liulongbin.top:3006/api/getbooks',function(res) {
            console.log(res);
        })       
    </script>
```

带参数

```html
<script>       $.get('http://www.liulongbin.top:3006/api/getbooks',{id : 1},function(res) {
            console.log(res);
        })
    </script>
```

#### `$.post()`

![image-20220306165432532](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220306165432532.png)

```html
    <script> $.post('http://www.liulongbin.top:3006/api/addbook', 
            { bookname: 'hyy', author: 'hrd', publisher: 'gzhu' }, 
            function (res) {
             console.log(res)
        })
    </script>
```

#### `$.ajax()`

```html
    <script>
        $.ajax({
            type:'',// 请求的方式
            url:'', // 请求的url地址
            data:{}, // 请求要携带的数据
            succsee:function(res) {}
            // 请求成功后的回调函数
        })
    </script>
```

```html
    <script>
        $.ajax({
            type:'get',
            url:'http://www.liulongbin.top:3006/api/getbooks',
            // data:{i},
            succsee:function(res) {console.log(res)}
        })
        <------------------------------------------------->
        $.ajax({
            type:'post',
            url:'http://www.liulongbin.top:3006/api/addbook',
            data:{bookname: 'hyy', author: 'hrd', publisher: 'gzhu'},
            succsee:function(res) {console.log(res)}
        })
    </script>
```

## 接口

使用ajax请求数据时，被请求的url地址被叫做数据接口，同时每个接口都要有请求方式

### get请求接口的过程

![image-20220306171557038](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220306171557038.png)

### post请求接口过程

![image-20220306171618334](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220306171618334.png)

### 接口测试工具

postman

### 接口文档

接口的说明文档，调用接口的依据

包含接口url，参数以及输出内容说明，方便我们知道接口的作用以及对接口进行调用

![image-20220306173052601](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220306173052601.png)

## Ajax+表单

### 表单构成

1. 表单标签
2. 表单域
3. 表单按钮

form标签是用来采集数据的，form标签的属性则是用来规定如何把采集到的数据发送到服务器的

- action：url地址，规定提交表单时，**向何处发送表单数据**；
  - 是后端提供的一个url地址，这个地址专门接收表单提交过来的数据；
  - 未指定的情况下，默认是当前页面的url地址
  - 当提交表单后会立即跳转到action属性指定的url
- method：get 或者 post，规定以何种方式提交表单数据到url
  - get 方式适合用于提交少量简单的数据
  - post 方式适合提交大量的复杂的或包含文件上传的数据
- enctype：规定在表单发送数据之前如何对其进行**编码**
- target:规定**在何处打开action url**，blank（在新窗口中）\self（在默认的框架中打开）\parent（父框窗口中打开）\top（在整个窗口中打开）\framename（指定框架中打开）

### 同步提交

缺点：

1. 表单提交后页面会发生跳转，用户体验差
2. 页面之前的状态和数据会丢失

解决：表单只负责采集数据，Ajax负责将数据提交至服务器

```js
  <script>
    $(function () {
      // 第一种方式
       $('#f1').submit(function () {
         alert('监听到了表单的提交事件')
       })

      // 第二种方式
      $('#f1').on('submit', function () {  
        alert('监听到了表单的提交事件2')
      })
    })
  </script>
```

#### 阻止表单默认行为

```js
  <script> 
  $(function () {
      // 第一种方式
       $('#f1').submit(function (e) {
         alert('监听到了表单的提交事件')
         e.preventDefault()
       })

      // 第二种方式
      $('#f1').on('submit', function (e) {  
        alert('监听到了表单的提交事件2')
        e.preventDefault()
      })
    })
  </script>
```

### serialize()

`$(selector).serialize()`：**快速获取表单的数据**，必须为每个表单元素添加name属性

```js
  <script>
    $(function () {
      // 第一种方式
       $('#f1').submit(function (e) {
        e.preventDefault()
        var data = $(this).serialize()
        console.log(data)
      }) 

      // 第二种方式
      $('#f1').on('submit', function (e) {
        e.preventDefault()
        var data = $('#f1').serialize()
        console.log(data)
      })
    })
  </script>
```

## XMLHttpRequest

xhr 是浏览器提供的js对象，通过它可以在服务器上请求资源，jQuery中的ajax是由此封装的

### GET

步骤：

1. 创建xhr
2. 调用`xhr.open()`
3. 调用`xhr.send()`
4. 监听xhr.onreadystatechange事件

```html
  <script>
    // 1. 创建 XHR 对象
    var xhr = new XMLHttpRequest();
    // 2. 调用 open 函数
    xhr.open('GET', 'http://www.liulongbin.top:3006/api/getbooks');
    // 3. 调用 send 函数
    xhr.send();
    // 4. 监听 onreadystatechange 事件
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // 获取服务器响应的数据
        console.log(xhr.responseText);
      }
    }
  </script>
```

```
 xhr.open('GET', 'http://www.liulongbin.top:3006/api/getbooks?id=1');
```

![image-20220307232714232](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220307232714232.png)

### POST

**步骤**：

- 创建xhr对象
- 调用xhr.open()方法
- 设置Content-Type属性（固定写法）
- 调用xhr.send()函数，同时指定要发送的数据
- 监听xhr.onreadystatechange()事件

```html
  <script>
    // 1. 创建 xhr 对象
    var xhr = new XMLHttpRequest()
    // 2. 调用 open 函数
    xhr.open('POST', 'http://www.liulongbin.top:3006/api/addbook')
    // 3. 设置 Content-Type 属性
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    // 4. 调用 send 函数
    xhr.send('bookname=水浒传&author=施耐庵&publisher=上海图书出版社')
    // 5. 监听事件
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText)
      }
    }
  </script>
```



#### 查询字符串

这种放在URL后面的拼接的参数叫做**查询字符串**，是用于向服务器发送信息的字符串变量

**格式**：将英文❓放到URL末尾，然后再加上‘参数＝值’，想要加上多个参数的话用＆进行分隔

#### readystate

表示当前ajax请求所处的状态

- 0：**unsent**，未调用open方法
- 1：**opend**，已被调用open方法
- 2：**HEADERS＿RECEIVED**：send方法已经被调用，响应头已经被接受
- 3：**LOADING**：数据接收中，response属性中已经包含部分数据
- 4：**DONE**：ajax请求已经完成，意味着数据传输已经彻底成功或失败

### URL编码

URL地址中不允许出现中文，如果需要包含中文应该对中文字符进行转义

编码原则：使用安全的字符（**没有特殊用途或者特殊意义的可打印字符**）去表示那些不安全的字符

#### 编码解码的函数

`encodeURL()`

`decodeURL()`



## 模板引擎

```js
  $.each(res.data,function (i,item){
                var str ='<li class="list-group-item">'+item.content+'<span class="badge"style="background-color:#F0AD4E">评论人:'+item.username +'</span><span class="badge" style="background-color :#5BC0DE">评论时间：'+item.time+'</span>';
                rows.push(str);
            })
            $('#cmt-list').empty().append(rows.join(''));
```

这是通过字符串拼接的形式来渲染ＵＩ结构的，如果UI结构十分复杂，则拼接字符串需要额外注意引号之前的嵌套，且一旦需求发生改变修改起来也很繁琐

模板引擎可根据程序员指定的模板结构和数据自动生成一个完整的html页面

- 减少字符串的拼接操作
- 使代码更加清晰、易于维护和阅读

### art-template

#### 使用方法

1. 导入模板引擎，导入后就会在全局中多了个`template('id',需要渲染的数据对象)`的函数
2. 定义需要渲染的数据对象
3. 定义模板，模板的HTML结构，必须定义到script标签中，有type值
4. 调用template函数
5. 渲染html结构

#### art-template 基本语法

1、提供了**双括号占位符**，在双括号中可以进行变量、对象属性、三元表达式、逻辑或、加减乘除表达式输出

​	`{{a+b}}`,`{{value}}`

2、如果需要输出的值中包含了HTML标签，则需要使用**原文输出**，才能保证HTML标签被正确渲染

​	`{{@ value}}`

3、如果需要实现条件输出，可以在双括号内使用if、else、else if，进行**按需输出**

​	`{{if value}} text {{/if}}`

​	`{{if vl}} text {{else if v2}} text {{/if}}`

4 、**循环输出**，通过each语法循环数组，当前循环索引使用$index进行访问，当前访问使用$value进行访问

​	`{{each arr}} {{$index}} {{$value}} {{/each}}`

5、**过滤器**：本质是一个function处理函数，中间的那条杠类似于**管道操作符**，他的上一个输出作为下一个的输入

​	`{{value | filterName}}`

​	`template.defaults.imports.filterName = function(value)`

```js
<h3>{{regTime | dateFormat}}</h3>

template.defaults.imports.dateFormat = function (date) {
      var y = date.getFullYear()
      var m = date.getMonth() + 1
      var d = date.getDate()
      return y + '-' + m + '-' + d
 }
```

#### 实现原理

##### 正则与字符串操作(不懂)

###### 检索

`exec()`：检索字符串中的正则表达式的匹配

如果字符串中有匹配的值，则返回该匹配的值，否则返回null

`RegExpObject.exec(String)`

```html
<body>
    <script>
        var str = 'hello'
        var pattern = /e/
        var result = pattern.exec(str)
        console.log(result)
      </script>
</body>
```

![image-20220307164133129](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220307164133129.png)

###### 分组???

正则表达式中用（）包起来的内容表示一个分组，可以通过分组来提取自己想要的内容

```html
<body>
  <script>
    var str = '<div>我是{{name}}</div>';
    var pattern = /{{([a-zA-Z]+)}}/;
    var result = pattern.exec(str);
    console.log(result);
  </script>
</body>
```

![image-20220307164907204](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220307164907204.png)

###### 替换--replace

```js
<script>
    var str = '<div>{{name}}今年{{ age }}岁了</div>'
    var pattern = /{{\s*([a-zA-Z]+)\s*}}/

    // 第一次匹配
    var res1 = pattern.exec(str)
    str = str.replace(res1[0], res1[1])
    console.log(str)

    // 第二次匹配
    var res2 = pattern.exec(str)
    str = str.replace(res2[0], res2[1])
    console.log(str)

    // 第三次匹配
    var res3 = pattern.exec(str)
    console.log(res3)
  </script>
```

```html
  <script>
    var str = '<div>{{name}}今年{{ age }}岁了</div>'
    var pattern = /{{\s*([a-zA-Z]+)\s*}}/

    var patternResult = null
    while (patternResult = pattern.exec(str)) {
      str = str.replace(patternResult[0], patternResult[1])
    }
    console.log(str)
  </script>
```

## 数据交换格式

数据交换格式，就是服务器端和客户端之间进行数据传输和交换的格式

前端领域，经常提及的格式有XML和JSON

### XML

**可拓展标记语言**

HTML设计网页的内容，是网页内容的载体

XML是设计用来**传输和存储数据**的，是数据的载体

- 格式臃肿，与数据无关的代码多，体积大，传输效率低
- js解析xml比较麻烦

### JSON

JavaScript Object Notation，JavaScript的对象表示法，简单来说JSON就是js对象数组的字符串表示法，JSON本质是**字符串**，是js对象得字符串表示

轻量级文本数据交换格式，专门用于**存储和传输数据**，但比XML更小、更快、更易于解析

JSON包含对象和数组两种结构，通过这两种结构的相互嵌套，可以表示各种复杂的数据结构

**对象结构**：JSON中用{}括起来的内容，表示为键值对结构，key必须是英文双引号字符串，value可以是数字、字符串、bool、null、数组、对象六种类型

**数组结构**：数字、字符串、bool、null、数组、对象六种类型，用[]括起来的内容

#### 语法注意

- 属性名必须双引号包裹
- 字符串类型的值必须用双引号包裹
- 不允许使用单引号表示字符串
- 不能写注释
- 最外层必须是一个对象或数组格式
- 不能使用undefined

#### 字符串和对象的转换

`JSON.parse()`

`JSON.stringify()`

![image-20220308100453926](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220308100453926.png)

#### 序列化与反序列化

将数据对象转化为字符串的过程叫做序列化

把字符串转化为数据对象的过程叫做反序列化，

## 对ajxa进行封装

```js
function resolveData(data) {
  var arr = []
  for (var k in data) {
    var str = k + '=' + data[k]
    arr.push(str)
  }

  return arr.join('&')
}

// var res = resolveData({ name: 'zs', age: 20 })
// console.log(res)

function itheima(options) {
  var xhr = new XMLHttpRequest()

  // 把外界传递过来的参数对象，转换为 查询字符串
  var qs = resolveData(options.data)

  if (options.method.toUpperCase() === 'GET') {
    // 发起GET请求
    xhr.open(options.method, options.url + '?' + qs)
    xhr.send()
  } else if (options.method.toUpperCase() === 'POST') {
    // 发起POST请求
    xhr.open(options.method, options.url)
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    xhr.send(qs)
  }

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var result = JSON.parse(xhr.responseText)
      options.success(result)
    }
  }
}
```

## XMLHttpRequest leavel2

旧版缺点：

1. 只支持文本数据传输，不能读取和上传**文件**
2. 接受和传输数据时**没有进度信息**，只能提示有无完成

新版特点：

1. 可以设置HTTP请求时限
2. 可以使用formData对象管理表单数据
3. 支持上传文件
4. 可以获取数据传输进度

### 设置HTTP请求时限

timeout属性，超过了设置的时限，就会自动停止HTTP请求，与之配套的还有一个timeout事件，用来指定回调函数

```javascript
 <script>
    var xhr = new XMLHttpRequest()
    // 设置 超时时间
    xhr.timeout = 30
    // 设置超时以后的处理函数
    xhr.ontimeout = function () {
      console.log('请求超时了！')
    }
    xhr.open('GET', 'http://www.liulongbin.top:3006/api/getbooks')
    xhr.send()
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(xhr.responseText)
      }
    }
  </script>
```

### FormData对象管理表单数据

H5新增对象，可以模拟表单操作

```js
<script>
    // 1. 创建 FormData 实例
    var fd = new FormData()
    // 2. 调用 append 函数，向 fd 中追加数据
    fd.append('uname', 'zs')
    fd.append('upwd', '123456')

    var xhr = new XMLHttpRequest()
    xhr.open('POST', 'http://www.liulongbin.top:3006/api/formdata')
    xhr.send(fd)

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(JSON.parse(xhr.responseText))
      }
    }
  </script>
```

#### 获取表单中的数据

利用

```js
  <script>
    // 1. 通过 DOM 操作，获取到 form 表单元素
    var form = document.querySelector('#form1')

    form.addEventListener('submit', function (e) {
      // 阻止表单的默认提交行为
      e.preventDefault()

      // 创建 FormData，快速获取到 form 表单中的数据
      var fd = new FormData(form)

      var xhr = new XMLHttpRequest()
      xhr.open('POST', 'http://www.liulongbin.top:3006/api/formdata')
      xhr.send(fd)

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          console.log(JSON.parse(xhr.responseText))
        }
      }
    })
  </script>
```

### 上传文件

1. 定义UI结构
2. 验证是否选择了文件
3. 向FormData中追加文件
4. 使用xhr发起上传文件的请求
5. 监听onreadystate事件

![image-20220308135354606](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220308135354606.png)

#### 显示文件上传进度

`e.lengthComputable` ： 是一个布尔值，表示当前上传的资源是否具有可计算的长度

`e.load`：已传输的字节

`e.total`：需要传输的总字节

```html
<body>
  <!-- 1. 文件选择框 -->
  <input type="file" id="file1" />
  <!-- 2. 上传文件的按钮 -->
  <button id="btnUpload">上传文件</button>

  <!-- bootstrap 中的进度条 -->
  <div class="progress" style="width: 500px; margin: 15px 10px;">
    <div class="progress-bar progress-bar-striped active" style="width: 0%" id="percent">
      0%
    </div>
  </div>

  <br />
  <!-- 3. img 标签，来显示上传成功以后的图片 -->
  <img src="" alt="" id="img" width="800" />

  <script>
    // 1. 获取到文件上传按钮
    var btnUpload = document.querySelector('#btnUpload')
    // 2. 为按钮绑定单击事件处理函数
    btnUpload.addEventListener('click', function () {
      // 3. 获取到用户选择的文件列表
      var files = document.querySelector('#file1').files
      if (files.length <= 0) {
        return alert('请选择要上传的文件！')
      }
      var fd = new FormData()
      // 将用户选择的文件，添加到 FormData 中
      fd.append('avatar', files[0])

      var xhr = new XMLHttpRequest()

      // 监听文件上传的进度
      xhr.upload.onprogress = function (e) {
        if (e.lengthComputable) {
          // 计算出上传的进度
          var procentComplete = Math.ceil((e.loaded / e.total) * 100)
          console.log(procentComplete)
          // 动态设置进度条
          $('#percent').attr('style', 'width: ' + procentComplete + '%;').html(procentComplete + '%')
        }
      }
		// 上传成功后先移除所有的样式，然后给进度条添加success样式和进度条的基本样式
        //需要监听onload事件
      xhr.upload.onload = function () {
        $('#percent').removeClass().addClass('progress-bar progress-bar-success')
      }

      xhr.open('POST', 'http://www.liulongbin.top:3006/api/upload/avatar')
      xhr.send(fd)

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          var data = JSON.parse(xhr.responseText)
          if (data.status === 200) {
            // 上传成功
            document.querySelector('#img').src = 'http://www.liulongbin.top:3006' + data.url
          } else {
            // 上传失败
            console.log('图片上传失败！' + data.message)
          }
        }
      }
    })
  </script>
</body>
```

## jQuery+Ajax 进阶

### jQuery实现文件上传

```html
<body>
  <input type="file" id="file1" />
  <button id="btnUpload">上传文件</button>
  <br />
  <img src="./images/loading.gif" alt="" style="display: none;" id="loading" />
  <script>
    $(function () {
      // 监听到Ajax请求被发起了
      $(document).ajaxStart(function () {
        $('#loading').show()
      })
      // 监听到 Ajax 完成的事件
      $(document).ajaxStop(function () {
        $('#loading').hide()
      })
      $('#btnUpload').on('click', function () {
        var files = $('#file1')[0].files
        if (files.length <= 0) {
          return alert('请选择文件后再上传！')
        }
        var fd = new FormData()
        fd.append('avatar', files[0])
        // 发起 jQuery 的 Ajax 请求，上传文件
        $.ajax({
          method: 'POST',
          url: 'http://www.liulongbin.top:3006/api/upload/avatar',
          data: fd,
            // 不修改content-type属性，使用formdata默认的content-type值
          processData: false,
            // 不对formdata中的数据进行url编码，而是将formdata数据原样发送至服务器
          contentType: false,
          success: function (res) {
            console.log(res)
          }
        })
      })
    })
  </script>
</body>
```

### jQuery实现loading效果

`ajaxStart(callback)`：ajax请求开始时执行ajaxstart，可以在ajaxStart中的callback显示loading效果

这个函数会监听到当前文档的所有ajax请求

`ajaxStop(stop)`：监听到ajax事件完成

```js
$(document).ajaxStart(function() {
	$('#loading').show();
})
$(document).ajaxStop(function() {
	$('#loading').hide();
})
```

## axios

专门用于网络数据请求的库，简单易用，比jQuery更加轻量化，只专注于网络数据请求

### 发起请求

#### get

`axios.get('url',{params:{/*参数*/}}).then(callback)`

data才是服务器响应的真正数据，其他的都是axios的包装的数据

![image-20220308145801411](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220308145801411.png)

![image-20220308145827700](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220308145827700.png)

```html
<body>
    <button id="btn1">发起GET请求</button>

    <script>
        document.querySelector('#btn1').addEventListener('click',function() {
            let url = 'http://www.liulongbin.top:3006/api/get';
            let paramObj = { name : 'hyy',age : 19};
            axios.get(url,{params : paramObj}).then(function(res) {
                console.log(res.data);
            })
        })
    </script>
</body>
```

#### post

`axios.post('url',{params:{/*参数*/}}).then(callback)`

```js
document.querySelector('#btn2').addEventListener('click',function() {
            let url = 'http://www.liulongbin.top:3006/api/post';
            let paramObj = { location : 'hyy',address : 'gz'};
            axios.post(url,{params : paramObj}).then(function(res) {
                console.log(res.data);
            })
        })
```

![image-20220308150549405](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220308150549405.png)

#### axios

```js
axios({
	method:
	url:
	data:
	params:
}).then(callback)
```

```js
document.querySelector('#btn3').addEventListener('click', function () {
      var url = 'http://www.liulongbin.top:3006/api/get'
      var paramsData = { name: '钢铁侠', age: 35 }
      axios({
        method: 'GET',
        url: url,
        params: paramsData
      }).then(function (res) {
        console.log(res.data)
      })
    })
```

```js
  document.querySelector('#btn4').addEventListener('click', function () {
      axios({
        method: 'POST',
        url: 'http://www.liulongbin.top:3006/api/post',
        data: {
          name: '娃哈哈',
          age: 18,
          gender: '女'
        }
      }).then(function (res) {
        console.log(res.data)
      })
    })
```

jQuery中是通过success属性，这里是通过.then指定请求成功后的事情~

## 跨域和JSONP

### 同源

如果两个页面的**协议、域名和端口**都相同，则这两个页面具有相同的源

### 同源策略

是浏览器提供的一个安全功能

**同源策略限制了从一个源加载的文档或脚本文件如何与来自另一个源的资源进行交互，这是一个用于隔离潜在恶意文件的重要安全机制。**

简单来说，就是无法与非同源的网站进行资源交互。

1. 无法读取非同源网页的cookie、localstorage、indexedDB
2. 无法接触非同源网页的DOM
3. 无法发送ajax请求

### 跨域

不是同源的就是跨域

根本原因是：浏览器的同源策略不允许非同源的URL之间进行资源的交互

#### 跨域拦截

浏览器允许发起跨域请求，但是跨域请求回来的数据会被浏览器进行拦截，无法被页面获取到

`Failed to load resource: net::ERR_CONNECTION_REFUSED`

#### 实现跨域数据请求

##### JSONP 

出现的早，兼容性好，是前端程序员为了解决跨域问题想出来的一种**临时**的解决方案，缺点是只支持get请求，不支持post请求

###### 实现原理

由于同源策略的限制，网页中无法通过ajax请求非同源的数据接口，但是**script标签不受浏览器同源策略的影响，因此可以通过src属性请求非同源的js脚本**

因此，实现原理就是通过script标签的src属性，请求跨域的数据接口，并通过**函数调用**的形式接收跨域响应回来的数据

###### 大致步骤

1. 定义一个回调函数
2. 通过script的src属性来请求一个接口，希望这个接口返回一个函数的调用
3. 通过查询字符串的方式来规定服务器调用什么接口

```html
<body>
  <script>
    function abc(data) {
      console.log('拿到了Data数据：')
      console.log(data)
    }
  </script>

  <script src="./js/getdata.js?callback=abc"></script>
</body>
```

不能把JSONP请求数据的当时叫做ajax，因为JSONP没有用到XHRHttpRequest这个对象

##### CORS

出现较晚，是W3C标准，属于跨域Ajax请求的**根本**解决方案，支持GET和POST，缺点是不兼容某些低版本的浏览器

### jQuery+JSONP

```
$.ajax({
	url:
	dataType:
	success: function(res) {
		
	}
})
```

如果要使用`$.ajax()`发起JSONP请求，必须指定dataType为JSONP

### 防抖策略

当事件被触发后延迟n秒在执行回调，如果在n秒内事件又被触发则重新计时；保证在事件被频繁触发的时候能保证事件只被执行一次；可减少服务器负担

