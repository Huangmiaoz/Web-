# HTML+CSS

## 前置知识

网页的基本组成：图片、文字、超链接、音频、视频

网页背后的本质：代码

通过**浏览器转化（解析和渲染）**成用户所看到的界面（浏览器：网页显示运行的平台）

五大浏览器：IE、火狐、谷歌、Safari、Opera

**渲染引擎**：渲染引擎不同，导致解析相同的代码时的速度、性能、效果也不同

![image-20211128223627873](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211128223627873.png)

### Web标准

让不同的浏览器按照相同的标准显示结果，使展示效果统一

结构HTML+表现CSS+行为JS（元素+页面样式+页面交互）

![image-20211128224009476](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211128224009476.png)

### HTML

**超文本标记语言**：专门用于网页开发，主要通过**HTML标签**对网页中的文本、图片、音频、视频等内容进行描述

#### HTML固定结构

网页中的固定结构是通过特定的**HTML标签**进行描述的

网页的整体：html

网页的头部：head

网页的身体：body

网页的标题：title

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

#### 语法规范

##### 注释

##### 标签的构成

双标签：由两部分组成---开始标签+包裹内容+结束标签 <> </> 

单标签：由一部分组成，自成一体，无法包裹内容

##### 标签的属性

![image-20211128232243646](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211128232243646.png)

a 超链接标签快捷键

img 图片链接快捷键

**注意**：

1. 标签的属性写在开始标签的内部
2. 标签上可同时存在多个属性
3. 属性之间以空格隔开
4. 标签名与属性名之间必须以空格隔开
5. 属性无顺序之分

##### 标签之间的关系

嵌套关系

并列关系

## HTML标签

#### 排版标签

##### 标题标签

`<h1></h1>`

h系列标签，1-6级标题，h1有特定使用场景，如新闻标题、logo等

特点：

1. 文字都有加粗
2. h1-h6逐级递减
3. 独占一行

Ctrl+D 选中相同的文本

Ctrl+C Ctrl+v 复制粘贴一行

##### 段落标签

`<p></p>`

**特点**

1. 独占一行
2. 段落间存在间隙

##### 换行标签

`<br>`

##### 水平线标签

`<hr>`

单标签

在页面中显示一条水平线

#### 文本格式化标签

![image-20211129000632793](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211129000632793.png)

##### 标签语义化

1. 代码结构清晰，方便阅读，有利于团队合作开发。
2. 方便其他设备解析（如屏幕阅读器、盲人阅读器、移动设备）以语义的方式来渲染网页。
3. 有利于搜索引擎优化（SEO）。

#### 图片标签

` <img src="" alt="">`

**特点**

1. 单标签
2. img标签需要展示对应的效果，需要借助标签的属性进行设置

**src属性**：属性值是目标图片的路径

**注意**：

若当前网页和目标文件在同一个文件夹里，路径直接写目标图片的名字（包括后缀)即可

**alt属性**：属性值是替换文本

若图片加载失败时候才会加载alt属性，图片加载成功时不会显示alt文本

**title属性**：属性值是提示文本，鼠标悬停时展示的文字

**注意**：不仅仅可用于图片标签，还可以用于别的标签

**width**属性+**height**属性：

**注意**

1. 若只设置了width和height属性中的一个，另一个没设置的会自动等比例缩放---图片不会变形
2. 如果同时设置了两个，若设置不当此时图片可能会变形

###### 路径

**绝对路径**：指目录下的绝对位置，可直接达到目标位置，通常从盘符开始的路径

![image-20211129105033880](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211129105033880.png)

选择：复制图片链接以获取网页上图片的网络地址

**相对路径**：从当前文件开始出发找目标文件的过程

当前文件：当前html网页，目标文件：要找的图片

同级目录：./后会显示同级目录中的文件

下级目录：

![image-20211129105939516](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211129105939516.png)

上级目录：

![image-20211129110714250](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211129110714250.png)

![image-20211129111059778](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211129111059778.png)

#### 音频标签

`<audio src=""></audio>`

src属性：音频的路劲

control是 显示播放的控件

autoplay 自动播放（目前部分浏览器不支持）

loop 循环播放

**注意**支持mp3、wav、ogg三种格式



#### 视频标签

`<video src=""></video>`

src controls autoplay（谷歌浏览器需配合muted实现静音播放） loop

**注意**：支持mp4、webm、ogg



#### 链接标签

双标签，内部可包裹内容

如果a标签点击后需要去指定页面，需要设置a标签的herf属性

herf：目标网页的路径，可以为外部链接和内部链接

**特点**：

1. a标签默认文字下有下划线
2. a标签没有点击过时默认显示为蓝色
3. a标签点击过后文字显示为紫色，清除浏览器历史记录可以恢复为蓝色

**target属性**

_self：默认值在当前窗口覆盖

_blank：在新窗口中跳转

**空连接**

回到顶部`<a href="#"></a>`

开发中并不确定最终跳转位置，以此先占个位

![image-20211129114023184](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211129114023184.png)

#### 列表标签

##### 无序列表

**ul**：表示无序列表的整体，用于包裹li标签

**li**：表示无序列表中的每一项，用于包含每一行的内容

**特点**：

列表的每一项前都默认显示圆点标识

ul标签中只允许包含li，li内可包含任意内容

```html
<body>
    <h1>number</h1>
    <ul>
        <p><li>12345</li></p>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
</body>
```

##### 有序标签

```html
   <h1>number</h1>
    <ol>
        <p><li>12345</li></p>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </0l>
```

##### 自定义列表

dl：表示自定义列表的整体，用于包裹dd、dt

dt：表示自定义列表的主题

dd：表示自定义列表针对主题的每一项内容，默认显示缩进效果

```html
<body>
 <dl>
     <dt>主题</dt>
     <dd>111111</dd>
     <dd>222222</dd>
     <dd>333333</dd>
 </dl>
</body>
```

### 表格标签

#### 表格的基本标签

![image-20211129160111617](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211129160111617.png)

样式效果可通过属性设置，也可以用CSS

width height

![image-20211129162005277](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211129162005277.png)

```html
<body>
    <table border="1" width="300" height="200">
    <caption><h3>优秀学生</h3></caption>
        <tr>
            <th>年级</th>
            <th>姓名</th>
            <th>学号</th>
            <th>班级</th>
        </tr>
        <tr >
            <td rowspan="2">高三</td>
            <td>张三</td>
            <td>10</td>
            <td>三年二班</td>
        </tr>
        <tr>
            <td>赵四</td>
            <td>120</td>
            <td>三年三班</td>
        </tr>
        <tr>
            <th>评语</th>
            <td colspan="3">你们都很优秀</td>
        </tr>
    </table>
</body>
```

![image-20211129222852035](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211129222852035.png)

#### 表格的结构标签

- **thead**
- **tbody**
- **tfoot**

表格结构标签内部用于包裹tr标签

表格结构标签可以省略

##### 合并单元格

将水平或垂直的多个单元格合并成一个单元格

- 跨行合并，垂直合并成一个
- 跨列合并，水平合并成一个

**合并单元格的步骤：**

1. 明确合并哪几个单元格
2. 通过左上原则，确定保留谁删除谁
3. rowspan 跨行合并 colspan 跨列合并

**注意**只有一个结构标签中的单元格才能合并，不能跨结构标签合并

### 表单标签

#### input标签

![image-20211129165322298](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211129165322298.png)

##### 文本框

在杨业中输入单行文本的表单控件

**属性**

*placeholder：占位符，用于提示用户输入文本的内容*

value 用户输入的内容，提交后会发给后端服务器，（也可设置默认值）

name 当前控件的含义，提交后会告诉后端发送过去的数据是什么含义

后端接收到的数据格式是：name属性值=value的属性值

![image-20211129170551999](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211129170551999.png)

##### 密码框

*若type设置错了，则相当于设置成了type的默认值text*

属性

##### 单选框+复选框checkbox

**name** 分组，若有相同name属性值，则为一组，一组中只能选一个

checked 默认选中

##### 文件选择

属性：

**multiple**多文件上传

##### 按钮

**submit**：提交按钮，点击后提交数据给后端服务器

**reset**：将表单恢复默认值

**button**：默认无功能，配合js使用

**注意**：

- 如果需要实现上述按钮的功能，需配合form标签使用
- form把（整个）表单标签一起包裹起来即可

```html
<body>   
    <h1>哈哈哈哈哈哈哈哈哈</h1>
    <hr>
    <form action="">   
        昵称：<input type="text" placeholder="请输入昵称">
        <br><br>
        性别：<input type="radio" name= "one"> 男 <input type="radio" name= "one"> 女
        <br><br>
        出生日期：<input type="date">
        <br><br>
        城市：
        <select name="" id="">
            <option value="">上海</option>
            <option value="">北京</option>
            <option value="" checked>广州</option>
            <option value="">深圳</option>
        </select>
        <br><br>
        婚姻状况：
            <input type="radio" name= "two" checked> 未婚
            <input type="radio" name= "two" > 已婚
            <input type="radio" name= "two" > 保密
        <br><br>
        兴趣爱好：
            <input type="checkbox" name="" id=""> 唱歌
            <input type="checkbox" name="" id=""> 看电影
            <input type="checkbox" name="" id=""> 打游戏
        <br><br>
        个人介绍：<br>
            <textarea name="" id="" cols="30" rows="10"></textarea>
        <h3>我承诺</h3>
            <ul>
                <li>我好棒</li>
                <li>我好美</li>
            </ul>
        <input type="checkbox"> 我同意上述所有条款
        <br><br>
        <button type="submit"value="免费注册">免费注册</button>
        <button type="reset">重置</button>
        <!-- 要想把重置起作用，要有form控制表单的范围 -->
    </form>
    
</body>
```

![image-20211129172308140](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211129172308140.png)

![image-20211129225559914](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211129225559914.png)

#### button 按钮标签

![image-20211129172746415](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211129172746415.png)

**重置按钮要起作用，需要注意用form确定一个表单的位置**

#### **表单标签**

##### 菜单标签

**select 标签**下拉菜单的整体

**option 标签**下拉菜单中的某一项

**selected 属性** 默认选项

##### textarea 文本域标签

![image-20211129173920546](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211129173920546.png)

##### label标签

![image-20211129174155155](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211129174155155.png)

### 语义化标签

#### 无语义的标签

##### div标签 

一行只显示一个（独占一行）

##### span 标签

一行可显示多个

#### 有语义的标签布局

![image-20211129205744012](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211129205744012.png)

![image-20211129205815978](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211129205815978.png)

以上标签和div的特点一致，但是比div多了不同的语义

#### 字符实体

若代码中出现多个空格、缩进等，但经过浏览器解析后只会有一个空格

在网页中展示特殊符号是需要使用字符实体代替

![image-20211129221017875](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211129221017875.png)

## CSS

**层叠样式表**

写在哪里：style标签中，style标签卸载head标签里面，title标签里面

语法规则：

```html
    <style>
        p{//选择器
            color: brown;//属性名：属性值
            font-size:30 px;
            background-color: goldenrod;
            width: 100px;

        }
    </style>
```

### 引入方式

#### 内嵌式：

CSS写在style中（可以写在任何位置但通常写在head标签中）

作用范围：当前页面

#### 外联式：

CSS单独写在一个.CSS文件中（需要通过link标签引入网页）

作用范围：多个页面

#### 行内式：

CSS写在标签Style中，配合JS使用

作用范围：当前标签

font-size 字体大小

color 字体颜色

### 基础选择器

#### 标签选择器

作用：通过标签名，选择页面中的标签，找到标签设置样式

注意：

- 选择的是一类的标签而不是单独的某一个

- 标签选择器无论嵌套关系有多深，都能找到对应的标签

#### 类选择器

作用：通过类名，选择页面中所有带着个类名的标签，找到标签设置样式

注意：

- 所有标签上都有class属性，class属性值成为类名

- 类名可有数字字母下划线中划线组成，但不能以数字或中划线开头

- 一个标签可有多个类名，类名间以空格隔开

- 类名可以重读，一个类选择器可以同时选中多个标签

- ```html
  <head>
      <title>Document</title>
      <style>
          .red{
              color: red;
          }
          .yellow{
              color: yellow;
          }
          .pink {
              color: pink;
          }
          .big{
              font-size: 30px;
          }
      </style>
  </head>
  <body>
      <h1 style="color: beige;">Hello World</h1>
      <p class="red big"> Hello World</p>
      <p class="yellow">Hello World</p>
      <p class="pink">Hello World</p>
      <p class="pink">Helllllo World</p>
  </body>
  ```

  

#### id选择器

作用：通过id属性值，选择页面中所有带着个id属性值的标签，找到标签设置样式

注意：

- 所有标签上都有id属性
- id属性值类似于身份证号码，在一个页面中是唯一的
- 一个标签上只有一个id属性值
- 一个id选择器只能选中一个标签

```html
    <style>
        #red{
            color: red;
        }
        #green{
            color: green;
        }
    </style>
<body>
    <p id="red">红果果</p>
    <p id="green">绿泡泡</p>
</body>
```

![image-20211130091603914](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211130091603914.png)

#### 通配符选择器

结构：*{css属性名：属性值}

作用：找到页面中所有的标签设置样式



#### 总结

![image-20211130092112692](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211130092112692.png)

### 字体和文本样式

![image-20211130092233231](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211130092233231.png)

#### 字体大小

font-size =数字+px

#### 字体粗细

**bold 或者 700**

![image-20211130092814099](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211130092814099.png)

![image-20211130092827331](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211130092827331.png)

#### 字体样式

![image-20211130093128919](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211130093128919.png)

#### 常见的字体系列

![image-20211130093420124](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211130093420124.png)

![image-20211130093642379](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211130093642379.png)

#### 样式层叠

如果同一个标签设置了相同的属性，此时样式会层叠，写在最下面的会生效（层叠覆盖）

#### 字体font相关属性的连写

```html
    <style>
        /* 
            style weight size family 
            swsf
            省略要求：只能省略前两个属性，后面的不能省略
        */
        p{
            font: italic  700 30px  楷体,宋体,隶书,sans-serif;
        }
    </style>
</head>
<body>
    <p>我是一个标签</p>
</body>
```

如果要设置单独和连写的形式，要么把单独的样式放到连写的**下面**，要么把单独的样式写在**连写里面**

#### 文本样式

##### 文本缩进

**text-indent**

取值：

数字+px 

数字+**em**

(1em=当前标签的font-size的大小)

##### 文本水平对齐方式

**text-align**

left

center

![image-20211130181301718](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211130181301718.png)

`margin:0 auto;` 用于div、p、h水平居中，直接给当前元素本身设置即可

一般针对于固定宽度的盒子，若没有设置宽度默认为父元素的宽度

right

##### 文本修饰

**text-decoration**

underline

line-through 删除线

overline

none

![image-20211130140255388](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211130140255388.png)

##### line-height

控制行间距

取值：

- 数字+px
- 倍数（当前标签font-size的倍数）

![image-20211130184454582](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211130184454582.png)

#### Chrome调试

![image-20211130190200125](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211130190200125.png)

##### 颜色表示

![image-20211130200421807](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211130200421807.png)

![image-20211130201759671](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211130201759671.png)

```html
    <style>
        body{
            background-color: #f5f5f5;
        }
        .box{
            width: 200px;
            height: 180px;
            background-color: #fff;
            margin: 0 auto;
            text-align: center;
        }
        .pic{
            width: 160px;
        }
        .product{
            height: 25px;
            font-size: 14px;
        }
        .info{
            height: 30px;
            font-size: 12px;
            color: #ccc;
        }
        .price{
            font-size: 14px;
            color: #ffa500;
        }
    </style>
</head>
<body>
    <div class="box">
        <img src="./1638275041(1).jpg" alt="" class="pic">
        <div class="product">电视机</div>
        <div class="info">超清电视机</div>
        <div class="price">6999</div>
    </div>
</body>
```

### 选择器

#### 复合选择器

##### 后代选择器：空格

作用：根据HTML的标签嵌套关系，选择父元素后代满足条件的元素

![image-20211201122554349](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211201122554349.png)

##### 子代选择器

![image-20211201125025772](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211201125025772.png)

##### 并集选择器

![image-20211201125511401](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211201125511401.png)

##### 交集选择器

![image-20211201125802534](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211201125802534.png)

##### emmet语法

![image-20211201130014276](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211201130014276.png)

##### hover伪类选择器

作用：选中鼠标悬停在元素上的状态，设置样式

![image-20211201131412764](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211201131412764.png)

**注意：不能有多余的空格**

```html
    <style>
        a{
            text-decoration: none;
        }
        a:hover{
            color: orange;
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <a href="#">我是一个a标签</a>
</body>
```

![image-20211201131616332](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211201131616332.png)

### 背景相关属性

##### 背景色

background-color

默认：rgba（0，0，0，0）、transparent

##### 背景图

background-image（bgi）

![image-20211201132357573](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211201132357573.png)

` background-image: url('./1638275041\(1\).jpg');`

##### 背景平铺

![image-20211201132617526](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211201132617526.png)

##### 背景位置

![image-20211201160146545](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211201160146545.png)

##### 背景相关属性的连写

![image-20211201160942993](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211201160942993.png)

`background: skyblue url(./1638275041\(1\).jpg) no-repeat center center;`

**连写中的默认值需要特别注意**

##### img标签和背景图片的区别

需求:需要在网页中展示一张图片的效果?

方法一:直接写上img标签即可
img标签是一个标签，不设置宽高默认会以原尺寸显示

方法二:div标签＋背景图片
需要设置div的宽高，因为背景图片只是装饰的CSS样式，不能撑开div标签

#### 元素显示模式

##### 块级元素

**属性**：display：block

**特点：**

- 独占一行
- 宽度默认是父元素的宽度，高度默认由内容撑开
- 可以设置宽高

**代表标签**：div p h ul li dl dt dd form header nav footer

##### 行内元素

**属性**：inline

**显示特点：**

- 一行可以显示多个
- 不可以设置宽高
- 宽度和高度默认由内容撑开

a span 

##### 行内块元素

- inline-block

- **一行可显示多个**
- **可以设置宽高**
- input、textarea、button、select

- img标签由行内块元素特点，但chrome调试工具中显示的结果是inline


##### 元素模式转换

![image-20211201221222468](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211201221222468.png)

##### 嵌套规范

![image-20211201223305344](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211201223305344.png)

##### 居中方法总结

![image-20211201223353560](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211201223353560.png)

#### CSS三大特性

##### 继承性

![image-20211201223608113](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211201223608113.png)

![image-20211201225301474](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211201225301474.png)

![image-20211201231637082](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211201231637082.png)

##### 层叠性

![image-20211201232917193](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211201232917193.png)

##### 优先级

![image-20211202210659225](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211202210659225.png)

![image-20211202211445096](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211202211445096.png)

```html
    <style>
        a{
            width: 80px;
            height: 50px;
            background-color: pink;
            display: inline-block;
            text-decoration: none;
            color: white;
            text-align: center;
            line-height: 50px;
        }
        a:hover{
        color: chocolate;
        text-decoration: underline;
    }
    </style>
</head>
<body>
    <a href="#">导航1</a>
    <a href="#">导航2</a>
    <a href="#">导航3</a>
    <a href="#">导航4</a>
    <a href="#">导航5</a>
</body>
```

![image-20211202214524401](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211202214524401.png)

### pxcook

![image-20211202215406471](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211202215406471.png)

![image-20211202231911505](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211202231911505.png)![image-20211202231911829](

### 盒子模型

- 页面中的每个标签，都可看成一个盒子，通过盒子视角更方便进行布局
- 网页进行渲染时，也会将网页中的元素看成一个个矩形的区域

##### 内容区域

width  heigth  数字+px

border-width color style 用空格隔开

```html
    <style>
        div{
            width: 400px;
            height: 400px;
            background-color: pink;
            border-width: 10px;
            border-style: dotted;
            border-color: orchid;
            /* 连写 */
            border:10px solid red;
            /* 单方向设置 */
            border-top：10px dashed red;
        }
    </style>
```

##### 内边距区域

![image-20211203102114210](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211203102114210.png)

![image-20211203102210504](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211203102210504.png)

![image-20211203102321203](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211203102321203.png)

##### 边框区域

border和padding都会使盒子大

![image-20211203103717174](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211203103717174.png)

###### CSS3盒模型    box-sizing：border-box；

自动进行内减

##### 外边距区域

![image-20211203112109728](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211203112109728.png)

![image-20211203112614461](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211203112614461.png)

###### 外边距的正常情况

###### 水平布局的盒子，左右的margin正常，互不影响

盒子间的最终距离为两个margin的和

**margin +x%是相对父元素的移动**

###### 外边距的折叠现象

1、合并现象：**垂直布局的块级元素**，上下margin会合并，两者间距为margin的最大值（解决：只给其中一个盒子设置margin即可）

2、塌陷现象：**互相嵌套的块级元素**，子元素的margin-top会作用于父元素上，会导致父元素一起下降

解决：

- 给父元素设置border-top、padding-top
- 给父元素设置overflow：hidden
- 转化成行内元素
- 设置浮动

##### 清除默认的margin和padding 

一般写项目前都去掉默认的margin和padding

```html
        *{
            margin: 0;
            padding: 0;
        }
```

body默认8 px

p默认上下margin

ul默认上下margin和padding-left(将小圆点删去：list-style：none)

##### 行内元素的margin和padding无效情况

对于垂直方向上的margin和padding布局无效

对于**水平方向**上的margin和padding布局无效

### CSS浮动布局

#### 结构伪类选择器

##### 查找一个

![image-20211203132304728](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211203132304728.png)

##### 查找多个

![image-20211203132950833](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211203132950833.png)

**n只能写在前面，不能写在后面**

注意：找到ul下第一个li的a标签的写法：

![image-20211203134256130](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211203134256130.png)

##### nth-of-type

![image-20211203134416308](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211203134416308.png)

eg：ul下的类型是否一样，type是选中第n个这种类型的标签，child是找到第n个标签

#### 伪元素

![image-20211203134839114](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211203134839114.png)

![image-20211203135239283](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211203135239283.png)

#### 标准流

也成为**文档流**，在渲染显示网页时，默认采用的一套排版规则

**块级元素**：从上往下垂直布局，独占一行

**行内、行内块元素：**从左到右水平布局，空间不够自行折行

#### 浮动

早期作用：图文环绕

现在作用：网页布局

属性名：float

属性值：left right

##### 浮动的特点

- 浮动元素会脱离标准流，在标准流中**不占位置**
- 浮动元素比标准流高半个级别，可以**覆盖标准流**的元素
- 浮动找浮动，下一个浮动的元素会在上一个浮动的元素后面左右浮动

- 浮动元素会受到**上边元素的边界**的影响
- 浮动元素有特殊的显示效果{一行可显示多个，可设置宽高}
- 

不可通过text-align:center或者margin:()auto让**浮动的元素本身**居中

![image-20211203151410387](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211203151410387.png)

##### 清除浮动

**含义**：清除浮动所带来的影响--如果子元素浮动了，此时元素不能撑开标准流的块级父元素

**原因**：子元素浮动后脱标--不占位置

**目的**：需要父元素有高度，从而不影响其他网页元素的布局

**解决方法：**

- 给父元素设置高度

**优点**：简单方便；

**缺点**：有些布局并不能固定父元素的高度,(高度动态变化)

- 额外标签法

**操作**：在父元素内容的最后添加一个块级元素；

​            再添加的块级元素中设置clear：both

**缺点**:在页面中添加额外的标签，使页面结构变得复杂

![image-20211203153407111](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211203153407111.png)

- 单伪元素清除法

  ![image-20211203153514915](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211203153514915.png)

![image-20211203153913945](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211203153913945.png)

- 双伪元素清除法

![image-20211203154300587](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211203154300587.png)

- 给父元素设置**overflow-hidden**

##### 块格式化上下文BFC

![image-20211203155040863](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211203155040863.png)

### 定位

#### 网页中常见的布局方法

标准流

- 块级元素独占一行，垂直布局
- 行内元素、行内块元素一行显示多个，水平布局

浮动

- 让原本垂直布局的**块级元素变成水平布局**

定位

- 让元素自由的摆放在网页的任意位置
- 一般用于盒子的**层叠情况**

##### 定位的应用场景：

- 解决盒子之间的层叠问题，层叠于其他盒子的上面（定位之后元素层级最高，可以折叠在其他盒子上面）
- 可以让盒子始终固定在屏幕中的某个位置

##### 使用步骤：

1、设定定位方式（position）

![image-20211203222711798](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211203222711798.png)

2、设定偏移值

- 水平和垂直方各选择一个使用即可
- 选取的原则一般是就近原则

![image-20211203223640321](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211203223640321.png)

#### 静态定位（static）

![image-20211203224131210](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211203224131210.png)

#### 相对定位

![image-20211203225024783](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211203225024783.png)

#### 绝对定位

![image-20211203225818049](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211203225818049.png)

祖先元素中没有定位---默认相对于浏览器进行移动

祖先元素中有定位--相对于最近的有定位的祖先元素进行定位

#### 子绝父相

![image-20211203231020446](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211203231020446.png)

##### 子绝父绝：

会对下面的盒子有影响，下面的盒子会跑上来~绝对定位在网页中是脱标的。

![image-20211204093207975](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211204093207975.png)

##### 使子盒子保持水平居中

(子盒子宽度变化后需要改代码)

![image-20211204100728337](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211204100728337.png)

margin +x%是相对父元素的移动

##### transform：translate x（）;

是沿某方向，移动了自己宽度的x%

连写：`  transform: translate(-50%,-50%);  `

```html
    <style>
        .father{
            position: relative;
            width: 600px;
            height: 400px;
            background-color: purple;
        }
        .son{
            position: absolute;
            left :50%;
            transform: translateX(-50%);
            width:200px;
            height:100px;
            background-color: pink;
        }
    </style>
```



##### 子盒子水平垂直均居中

给同一个标签设置相同的属性，下面的会覆盖上面的,不能有多余的空格

```html
            left :50%;
            top:50%;
            transform: translate(-50%,-50%);
```

#### 固定定位

![image-20211204104303982](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211204104303982.png)

#### Summary

![image-20211204104615944](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211204104615944.png)

#### 元素的层级关系

标准流＜浮动＜定位

相对绝对固定默认层级相同，此时html写在下面的元素层级更高，会覆盖上面的元素。

#### 更改定位元素的层级

z-index：数字（数字越大，层级越高）

### 装饰

基线：浏览器文字类型元素排版中用于对齐的基线（baseline）

###### 垂直对齐方式

![image-20211209212345974](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211209212345974.png)

解决的问题：

- 文本框和表单无法对齐的问题
- input和img无法对齐的问题
- div中的文本框无法贴顶的问题
- div不设高度由img标签撑开，此时img标签下面会存在额外的间隙（原因，图片默认要和文字基线对齐），也可将图片设为块级元素
- 用line-height使图片形成垂直居中的效果



#### 光标类型

cursor：

default/pointer/text/move(默认类型，小手--提示用户可点击，工字形--提示可以选择文字，十字光标--提示可移动)

#### 边框圆角

border-radius：

常见取值：数字+px、百分比

从左上角开始顺时针赋值，没有赋值的看对角

应用：

- 画一个正圆：

1. 盒子必须是正方形
2. border-radius：50%

- 胶囊按钮

1. 设置盒子为长方形
2. border-radius：盒子高度的一半

#### 溢出部分处理效果

overflow：处理盒子中的超出盒子范围的

visable、hidden、scroll、auto自动判断是否有移除来决定是都有滚动条）

#### 元素本身隐藏

让元素本身在屏幕中不可见

visibility：hidden（在网页中占位置）

display：hidden（在网页中不占位置）

block--显示

#### 元素本身的透明度

opacity

#### 边框合并

border-collapse：collapse(给table标签设置的)

#### CSS画三角形

原理：利用盒子的边框

步骤：

1. 设置一个盒子
2. 设置四周不同颜色的边框
3. 将盒子的宽高设置为0，仅保留边框
4. 得到四个三角形，选择其中一个后，将其他边框设置为透明
5. ![image-20211211151227234](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211211151227234.png)

### 选择器的拓展

#### 连接伪类选择器

![image-20211211151332422](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211211151332422.png)

LVHA顺序来书写

#### 焦点伪类选择器

获取焦点的状态，常用于表单控件

：focus{}

效果：表单控件获取焦点时会显示外部轮廓线

#### 属性选择器

![image-20211211152331206](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211211152331206.png)

### 样式补充

#### 精灵图

场景：将项目中多张小图片合成一张大图片，这张大图片成称为精灵图

优点：减少服务器发送次数，减轻服务器的压力，提高页面加载速度。

![image-20211211153214666](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20211211153214666.png)

#### 背景图片的大小

background-size

- 数字+px
- 百分比（相对于盒子本身的**百分比**）
- contain（**等比例缩放**，直到不会超出盒子的最大值的大小）
- cover（等比例缩放，直至整个盒子没有空白为止）

#### 文字阴影

text-shadow：px px px color；（大小，模糊度，颜色）

- h-shadow：水平垂直
- v-shadow：竖直垂直
- blur：模糊度
- color：颜色

阴影之间可以叠加设置，每组阴影的取值用逗号隔开

#### 盒子阴影

box-shadow

- h-shadow：水平垂直
- v-shadow：竖直垂直
- blur：模糊度
- color：颜色
- spread：阴影扩大
- insert：将阴影改为内部阴影

#### 过度

作用：让元素样式慢慢变化，常搭配hover使用，增强交互体验

transition 过渡范围 过渡时间，过度范围 过度时长

all：所有能过渡的属性都过度 

width等具体属性：只有该具体属性可以过度 

过度需要：只有默认状态和hover状态不同时才有过渡效果

1. 属性应该给需要过渡的属性本身加
2. 在不同状态中设置，效果不同

- 给默认状态设置，鼠标移入移出都有效果
- 给hover状态设置，移入才有过渡效果，移出没有过渡效果

#### 字体图标

inconfig

#### 平面转化

transform

transform:translate (水平，垂直移动距离)

- 取值正负均可，可以为像素值，也可以为百分比（是相对要移动的物体的本身的百分比）
- 只给一个数字时表示x轴方向的移动，单独设置某个方向的移动，translateX和translateY

#### 位移-绝对定位居中

两种写法：margin-right和left以及transform：translate()

```css
        .son {
            position: absolute;
            left: 50%;
            top: 50%;
            /* margin-left: -100px;
            margin-top: -50px; */

            transform: translate(-50%, -50%);

            width: 203px;
            height: 100px;
            background-color: pink;          
        }
```

#### 双开门效果

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        
        .box {
            width: 1366px;
            height: 600px;
            margin: 0 auto;
            background: url('./bg.jpg');
            overflow: hidden;
        }
        .box::after,.box::before{
            float:left;
            content: '';
            /* 伪元素要有这个 */
            /* display: inline-block; 
            伪元素默认行内显示，行内元素加宽加高无法显示 */
            width:50%;
            height: 600px;
            background: url(./fm.jpg);
            transition: all .5s;
        }
        .box::after{
            background-position: right 0;
        }
        .box:hover::before{
            transform: translate(-100%);
           
        }
        .box:hover::after{
            transform: translate(100%);
        }
        
    </style>
</head>
<body>
    <div class="box">

    </div>
</body>
</html>
```

#### 旋转

transform：rotate(角度)；

- 单位为deg，取正负均可
- 旋转效果一定要用transition过度

transform：translate（）rotate（）

#### 缩放

transform：scale（x缩放倍数，y缩放倍数）

但一般情况下只设置一个值，确保是等比例缩放

```html
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        li {
            list-style: none;
        }

        img {
            width: 100%;
        }

        .box {
            width: 249px;
            height: 210px;
            margin: 50px auto;
            overflow: hidden;
        }
        
        .box p {
            color: #3b3b3b;
            padding: 10px 10px 0 10px;
        }

        .box .pic {
            position: relative;
        }

        .box .pic::after {
            /* 播放按钮压在图片上面 - 居中 */
            position: absolute;
            left: 50%;
            top: 50%;
            /* margin-left: -29px;
            margin-top: -29px; */
            /* 下面还有一个transform会发生层叠，因此应与后面的tranform会并在一起 */
            /* transform: translate(-50%, -50%); */

            content: '';
            width: 58px;
            height: 58px;
            background-image: url(./images/play.png);

            /* 大图 */
            transform: translate(-50%, -50%) scale(5);

            /* 透明,看不见 */
            opacity: 0;
            transition: all .5s;
        }

        /* lihover的时候,  谁变小pic::after */
        .box li:hover .pic::after {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
    </style>
</head>
<body>
    <div class="box">
        <ul>
            <li>
                <div class="pic"><img src="./images/party.jpeg" alt=""></div>
                <p>【和平精英】“初火”音乐概念片：四圣觉醒......</p>
            </li>
        </ul>
    </div>
</body>
</html>
```

#### 渐变

background-image linear-gradient(color1,color2);

```html
    <title>渐变背景</title>
    <style>
        .box {
            width: 300px;
            height: 200px;
            background-image: linear-gradient(
                pink,
                green,
                /* hotpink */
            );
            background-image: linear-gradient(
                transparent,
                rgba(0,0,0, .6)
            );
        }
    </style>
```

#### 空间转化

#### 动画





## 项目前置知识

### SEO

搜索引擎优化，让网站在搜索引擎上排名靠前

- 竞价排名
- 将网页制作成html后缀
- 标签语义化

#### SEO三大标签

title：网页标题标签

description：网页描述标签

keyword：网页关键字标签



## 移动端

#### 屏幕尺寸

指的是屏幕**对角线**的长度，一般用英寸来度量

#### pc分辨率

1920*1080

**硬件分辨率**（物理分辨率）：是生产屏幕使就固定的，是不可被改变的。

**逻辑分辨率**：由软件（驱动）决定的

写网页是**参考逻辑分辨率**写的

iPhone 6/7/8 的物理分辨率为750×1334，逻辑分辨率为375×667，比例关系为2：1

#### 视口

使用meta标签设置视口宽度，制作适配不同设备宽度的网页

作用：网页宽度和设备宽度（分辨率）相同。

移动端网页宽度：980px，如果需要弄100%需要用视口的代码。

pc端默认：100%

#### 二倍图

#### 百分比布局

流式布局

宽度自适应，高度固定（position：fixed）

#### flex布局

- 弹性布局
- 基于flex精确灵活控制块级盒子得布局方式，避免浮动布局脱离文档流现象发生
- flex布局非常适合结构化布局
- 父级元素添加dislay：flex，子元素可以自动挤压或拉伸
- 组成部分：弹性容器、弹性盒子、主轴、侧轴、交叉轴

通过调节主轴和侧轴的对齐方式来调节盒子之间的距离

##### justify-content

调节主轴的对齐方式

center 弹性盒子居中分布

space-between：弹性盒子之间、子盒子之间出现间距

space-evenly 弹性盒子沿主轴均匀分布，所有地方的间距都相等

space-around：盒子的间距加在子集盒子的两侧，视觉效果：子集之间的距离是父级两头的距离的两倍

##### align-items

侧轴的对齐方式，添加到父级上，控制所有弹性容器

center：沿侧轴居中排列

stretch:默认值，弹性盒子沿着主轴线被拉伸直至铺满盒子；子集有高度则不会被拉伸

##### align-self

控制某个弹性盒子在侧轴对齐方式

弹性盒子：如果不给宽高，则实际宽由具体内容的多少决定；高由父级盒子的大小决定

#### 伸缩比

flex：（整数）

代表的是元素占用剩余空间的份数

##### flex-direction

修改主轴的方向

1. 先确定主轴方向
2. 再选择对应的属性实现主轴或侧轴的对齐方式

```html
flex-decoration: column;
align-items:center;
align-content:center;
```

##### flex-wrap

nowrap:默认是不换行的

wrap:自动换行，根据设定的宽度

##### align-content:

调节两个行之间的距离

space-between

space-around

center

### 省略号

![image-20220205155549918](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220205155549918.png)

溢出时文字显示省略号

因为弹性盒子的尺寸可以被内容撑开，不换行的文字可以撑开这个盒子，因此需要在父级上加一个宽度为0解决这个问题。

## 移动适配

### rem

网页元素按网页大小等比例缩放

相对单位，rem单位是相对html标签字号的计算结果

1rem=1html字号大小

（html标签是网页的根）

```html
     <style> 
        /* 1rem = 1html标签字号大小 */
        html {
            font-size: 20px;
        }  
        .box {
            width: 5rem;
            height: 3rem;
            background-color: pink;
        }
    </style>
```

#### 媒体查询

在分辨率（视口）不同的情况下如何设置不同的html标签字号？

使用媒体查询设置**差异化**css样式

媒体查询能够**检测视口的宽度**

```html
    <style>
        /* 使用媒体查询, 根据不同的视口宽度, 设置不同的根字号 */
        @media (width:375px) {
            html {
                font-size: 40px;
            }
        }

        @media (width:320px) {
            html {
                font-size: 30px;
            }
        }
    </style>
```

目前在布局方案中，将网页分成10份，html标签的字号为视口宽度的1/10

rem单位的尺寸=px单位数值/基准根字号

### flexible.js

配合rem是现在不同宽度的设备中，网页元素尺寸的等比例缩放

核心原理是：根据不同视口宽度给网页中html的根节点设置不同的font-size，原理是媒体查询

```javascript
(function flexible (window, document) {
  var docEl = document.documentElement
  var dpr = window.devicePixelRatio || 1

  // adjust body font size
  function setBodyFontSize () {
    if (document.body) {
      document.body.style.fontSize = (12 * dpr) + 'px'
    }
    else {
      document.addEventListener('DOMContentLoaded', setBodyFontSize)
    }
  }
  setBodyFontSize();

  // set 1rem = viewWidth / 10
  function setRemUnit () {
    var rem = docEl.clientWidth / 10
    docEl.style.fontSize = rem + 'px'
  }

  setRemUnit()

  // reset rem unit on page resize
  window.addEventListener('resize', setRemUnit)
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      setRemUnit()
    }
  })

  // detect 0.5px supports
  if (dpr >= 2) {
    var fakeBody = document.createElement('body')
    var testElement = document.createElement('div')
    testElement.style.border = '.5px solid transparent'
    fakeBody.appendChild(testElement)
    docEl.appendChild(fakeBody)
    if (testElement.offsetHeight === 1) {
      docEl.classList.add('hairlines')
    }
    docEl.removeChild(fakeBody)
  }
}(window, document))
```

### less

css不支持计算写法，可以通过less语法快速编译生成css代码

less是一个css的**预处理器**，后缀是less

作用：扩充了css语言，使css具有一定的**逻辑性、计算能力**

浏览器不能识别less代码，网页应引入对应的css文件

#### 嵌套

用less嵌套写后代选择器

&不生成后代选择器，表示**当前选择器**，通常配合**伪类或伪元素**使用

方便代码迁移

```less
.father {
    width: 100px;
    .son {
        color: pink;
        // & 表示当前选择器
        &:hover {
            color: green;
        }
    }

    &:hover {
        color: orange;
    }
}
```

```css
.father {
  width: 100px;
}
.father .son {
  color: pink;
}
.father .son:hover {
  color: green;
}
.father:hover {
  color: orange;
}
```

#### 变量

存储数据，方便使用和修改

定义：@变量名：值；

使用：css属性：@变量名；

```less
// 1. 定义. 2.使用
@colora:green;

.box {
    color: @colora;
}

.father {
    background-color: @colora;
}

.aa {
    color: @colora;
}
```

```css
.box {
  color: green;
}
.father {
  background-color: green;
}
.aa {
  color: green;
}
```

#### 导入

如果导入的是less文件，可以省略后缀

```less
@import './01-体验less.less';
@import './02-注释';
```

#### 导出

在setting.json中写代码后就会设置一个默认的路径

而用下面代码的话就会在aaaa文件夹中显示

```
//out:./aaaa/
//out:./qqqq/xixi.css
.box{
    color: red;
}
```



#### 注释

只能把多行注释渲染进css中

```less
//
/**/
```

#### 运算

加减乘直接书写计算表达式

除法需要添加小括号或.（less4.0之前的版本是不用加的）

```less
.box {
    width: 100 + 10px;
    width: 100 - 20px;
    width: 100 * 2px;
    // 除法
    // 68  > rem
    width: (68 / 37.5rem);
    // height: 29 ./ 37.5rem;
    height: 29 / 37.5rem;
}
```



### vw/vh

相对视口的尺寸

1vw=1/100视口宽度

vw:viewport width

vh:viewport height

vw尺寸=px单位数值/(1/100 视口宽度)

全面屏--不能vw、vh混用，比例会不同



## 响应式

### 媒体查询

根据设备宽度的变化设置差异化样式

由于CSS具有层叠性

max-width（从大到小）

min-width（从小到大）

```html
    <style>
        /*
            视口宽度 >= 768px，网页背景色是 粉色
            视口宽度 >= 992px，网页背景色是 绿色
            视口宽度 >= 1200px，网页背景色是 skyblue
         */

         /* css属性都有层叠性 */

         /* @media (min-width: 1200px) {
            body {
                background-color: skyblue;
            }
        } */
        
        @media (min-width: 768px) {
            body {
                background-color: pink;
            }
        }
        @media (min-width: 992px) {
            body {
                background-color: green;
            }
        }
        @media (min-width: 1200px) {
            body {
                background-color: skyblue;
            }
        }

    </style>
```

**完整写法：**

@media 关键词 媒体类型 and (媒体特性) {CSS代码}

**媒体类型**：屏幕（screen）、打印浏览（print）、阅读器（speech）、不区分类型（all）。

**媒体特征**：主要用来描述媒体类型的具体特征，如当前屏幕的宽高、分辨率、横竖屏。有视口的宽高（height、weight）、视口的最大、最小宽或高（max-width）、屏幕方向（orientation）--竖屏（portrait）、横屏（landscape）。

##### 媒体查询的link写法

一定要加上小括号~

```html
    <!-- 视口宽度 >= 992px，网页背景色为粉色 -->
    <!-- 视口宽度 >= 1200px，网页背景色为绿色 -->
    <link rel="stylesheet" href="./one.css" media="(min-width: 992px)">
    <link rel="stylesheet" href="./two.css" media="(min-width: 1200px)">
```

#### 隐藏

```html
        /* 如果检测到视口宽度小于768px, 认为是手机端, left隐藏 */
        @media (max-width: 768px) {
            .left {
                display: none;
            }
        }
```

### BootStrap

媒体查询--响应式网页的框架

#### 栅格系统

## 易错点

1、background-color和color的区别

2、不能有多余的空格

- `  transform: translate(-50%,-50%);  `
- `a:hover`

3、background的连写：color、image、repeat、position/size

当background和background-size连写时应注意覆盖问题，连写中省略了相当于设置了默认值

4、子集浮动的时候会**脱标**

5、引入iconfont图标时，class中的类名前面不用加点。。。
