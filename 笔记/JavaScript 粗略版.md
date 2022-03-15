# JavaScript 视频版

## 初识

![image-20220208234627753](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220208234627753.png)

![image-20220209135633449](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220209135633449.png)



### js特点

**(1)面向对象**

JavaScript 语言标准已经明确说明，JavaScript 是一门面向对象的语言;

JavaScript是否属于“面向对象的语言”一直饱受争议，一些争论中，有人强调，JavaScript 并非“面向对象的语言”，而是“基于对象的语言”，这个说法也一度流传甚广。JavaScript 的对象设计跟目前主流基于类的面向对象差异非常大。而事实上，这样的对象系统设计虽然特别，但是 JavaScript **提供了完全运行时的对象系统，这使得它可以模仿多数面向对象编程范式，所以它也是正统的面向对象语言**。而因为与基于类的面向对象的差异，我们也称JavaScript 为**基于原型的面向对象**。

(2)**脚本语言**

又被称为**动态语言**，只在被**调用时进行解释或编译**。在程序的运行过程中**逐行解释执行**。

**(3)解释性语言**

不需要编译可以直接使用，**由宿主环境（浏览器）解释执行**。

**(4)事件驱动**

JavaScript对用户的响应，是以**事件驱动的方式**进行的。在网页（Web Page）中执行了某种操作所产生的动作，被称为“事件”（Event）。例如按下鼠标、移动窗口、选择菜单等都可以被视为事件。当事件发生后，可能会引起相应的事件响应，执行某些对应的脚本，这种机制被称为“事件驱动”。

**(5)动态性**

语言的动态性，是指程序在运行时可以改变其结构。在一个 JavaScript 对象中，要为一个属性赋值时，我们不必事先创建一个变量，只需要在使用的时候做赋值操作即可。

**(6)弱类型&松散类型**

弱类型语言声明数据时不需要指定数据类型，一个变量可以赋不同数据类型的值，不同类型数据在计算过程中会自动进行转换，在参与运算的过程中，JavaScript**会将其自动转换为数据类型**，比如JavaScript中布尔类型的数据可以直接参与运算。

**(7)单线程与异步处理共存**

**单线程程序**的执行顺序是**从上到下依次执行**，一个程序中只可以执行一个程序。而异步处理不用阻塞当前线程来等待处理完成，而是允许后续操作，直至其它线程将处理完成。二者看起来相互矛盾，不能够同时存在，可是JavaScript以一种巧妙地方式用单线程实现了异步处理的效果。

在JavaScript的主线程和任务队列中间还存在一个WebAPIs，这个WebAPIs是浏览器单独为处理JavaScript的异步任务开辟的线程。当主线程栈中的函数需要异步处理的时候，主线程会把需要异步的部分推给WebAPIs,这部分异步由浏览器去执行，执行完异步之后将处理后的结果以事件的形式丢到任务队列中，这个事件就是我们写代码时的“回调函数”。

**(8)跨平台**

JavaScript依赖于浏览器本身，与操作环境无关。

**(9)安全性语言**

JavaScript是一种安全性语言，它不允许访问本地的硬盘，并不能将数据存入到服务器上，不允许对网络文档进行修改和删除，只能通过浏览器实现信息浏览或动态交互。**从而有效地防止数据的丢失**。

### js组成

#### ECMAScript

规定了js的编程语法和核心知识，是所有浏览器共同遵守的工业标准

![image-20220208235120883](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220208235120883.png)

#### DOM

文档对象模型

处理可拓展标记语言的标准编程接口，通过DOM提供的接口可以对页面上的各种元素进行操作

#### BOM

浏览器对象模型，提供了独立于内容，可以与浏览器进行互动的对象结构，通过BOM可以操作浏览器的窗口，如弹框、跳转、获取分辨率



### 书写位置

行内

![image-20220208235827308](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220208235827308.png)

内嵌

外部

### 输出

![image-20220209000626437](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220209000626437.png)



### 数据类型

![image-20220209101908028](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220209101908028.png)

数字前面加0表示八进制

0x表示十六进制

Number.MAX_VALUE

Number.MIN_VALUE

Infinity 表示无穷大，大于任何数值

-Infinity 表示无穷小，小于任何数值

NaN 表示一个非数值

isNaN() 判断是否是非数字

String 可以跟着双引号也可以跟着单引号，但是推荐使用单引号，但如果要用引号的嵌套，应外单内双or内双外单

![image-20220209113555142](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220209113555142.png)

String.length();

字符串拼接，字符串后面用+号连接任意类型的数据，会生成一个新的字符串

![image-20220209133031958](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220209133031958.png)

#### typeof

consol.log(typeof _name)；

#### 数据类型转换

表单、prompt获取过来的数据默认是字符串类型的，不能直接进行简单地加法运算，因此需要转换变量的数据类型。通俗来讲就是将一种数据类型转换为另一种数据类型。

![image-20220209133656716](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220209133656716.png)

![image-20220209133926218](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220209133926218.png)

![image-20220209134023514](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220209134023514.png)

取整是去掉小数部分不是四舍五入

![image-20220209134400138](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220209134400138.png)

![image-20220209134559644](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220209134559644.png)

Boolean

其他类型转化为布尔型

![image-20220209135439967](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220209135439967.png)

# DOM

可以改变网页的内容结构和样式

## 获取元素

#### 根据标签id

**document.getElementById();**

![image-20220220123432296](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220220123432296.png)

#### 根据标签名

**document.getElementByTagName();**

返回的是获取过来的**元素对象集合**，以**伪数组**的形式存储，可以采取遍历的方式来获取伪元素中的对象，得到的**元素对象是动态**的

还可以获取父元素内部所有指定标签名的子元素

父元素必须是单个对象，获取时不包括父元素自己

## html5新增 获取元素

#### 根据类名获取

**document.getElementByClassName();**

#### 根据选择器

**document.querySelector()**

.ClassName

#idName

方法返回文档中与**指定选择器或选择器组匹配的第一个 Element对象**。 如果找不到匹配项，则返回null。

**document.querySelectorAll()**

指定选择器的**所有元素对象**

## 获取特殊元素body html

**document.body()**

**document.documentElement()**

## 事件基础

事件是可以被js侦测到的行为

**触发--相应机制**

#### 三要素

事件源：事件被触发的对象

事件类型：如何触发

事件处理程序：通过函数赋值完成

```html
<body>
    <button id="btn">我是一个按钮</button>
    <script>
        var btn = document.getElementById('btn');
        btn.onclick =function () {
            alert('你好牛,真的按到我了呢！');
        }
    </script>
</body>
```

#### 执行事件的过程

1. 获取事件源
2. 注册事件、绑定事件
3. 添加事件处理程序

![image-20220220135548292](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220220135548292.png)

## 操作元素

**element.innerText()**

从起始位置到终止位置的内容，不包括html标签，去除空格和换行

**element.innerHtml()**

W3C标准

起始位置到终止位置的全部内容，包括html标签，**同时保留空格和换行**

这两个元素可读写



##### 例子

如果是要按按钮触发图片的更换，应该也获取图片这一元素

图片地址后面要加.jpg

```html
    <button id="hh">我是按钮1</button>
    <button id="xx">我是按钮2</button>
    <img src="./pic/abcd.jpg" alt="">
    <script>
        var img =document.querySelector('img');
        var hhh = document.getElementById('hh');
        hhh.onclick = function() {
            img.src = './pic/pic2.jpg';
        }
        var xxx = document.getElementById('xx');
        xxx.onclick = function() {
            img.src = './pic/pic1.jpg';
        }
    </script>
```

```html
    <img src="./pic/morning.png" alt="">
    <div>Happy Everyday</div>
    <script>
        var img = document.querySelector('img');
        var div = document.querySelector('div');
        var date = new Date();
        var h = date.getHours();
        if(h<12) {
            img.src = './pic/morning.png';
            div.innerHTML = '早上好哦宝贝';
        }
        else if(h < 18) {
            img.src = './pic/fighting.png';
            div.innerHTML = '下午好哦宝贝'
        } else {
            img.src = './pic/evening.png';
            div.innerHTML = '晚上好哦宝贝'
        }
    </script>
```

```html
<body>
    <button>我是一个可爱的按钮(●'◡'●)</button>
    <input type="text" value="你要输入啥呢">
    <script>
        var btn = document.querySelector('button');
        var input = document.querySelector('input');
        btn.onclick = function() {
            //input.innerHTML=''; 这个是普通盒子比如div标签元素里面的内容，表单里面的值是通过value修改的
            input.value='哎呀,我被点击了！';
             btn.disabled = true ;
        }
        btn.onmouseout = function() {
            input.value='不要走，嘤嘤嘤';
        }
    </script>
</body>
```

 `btn.disabled = true ;`表单禁用

` this.disabled = true ;`this指向的是表单的调用者 btn

### 样式属性操作

我们可以通过js修改元素的大小颜色和样式

element.style ： 样式比较少，功能简单

element.className :  将样式写入CSS，js只用添加这个样式即可，会**直接覆盖原先的类名**，要想保留，就两个类名都写上，中间用空格隔开（多类名选择器）

`this.className = 'change' ;`

1. js里面的样式采取驼峰命名法
2. js修改style的样式产生的是**行内样式**，CSS权重比较高



##### 例子：搜索栏

```html
    <style>
        input {
            color: #999;
        }
    </style>
</head>
<body>
    <input type="text" value="手机" name="" id="">
    <script>
        var text = document.querySelector('input');
        // 获得焦点事件
        text.onfocus = function () {
            if(text.value === '手机') {
                this.value = ' ';
            }
            //获得焦点把文本框颜色变深
            this.style.color = '#333';
        }
        text.onblur = function () {
            if(text.value === ' ') {
                this.value = '手机';
            }
            this.style.color = '#999';
        }
    </script>
</body>
```

##### 例子：密码框明文密文转换

```html
    <style>
        .box {
            position: relative;
            width: 400px;
            /* border : 1px solid #ccc; */
            margin: 100px;
        }
        .box input {
            width: 370px;
            height: 30px;
            border: 0;
            outline: none;
        }
        .box img {
            position: absolute;
            top: 2px;
            right: 2px;
            width: 24px;
        }
    </style>

</head>
<body>
    <div class="box">
        <label for="">
            <img src="./pic/images1/close.png" alt="" id="eye">
        </label>
        <input type="password" id="pwd">
    </div>
    <script>
        var eye =document.getElementById('eye');
        var pwd =document.getElementById('pwd');
        // 元素多用id获取元素
        let flag=0;
        eye.onclick = function () {
            if(flag == 0) {
                pwd.type ='text';
                eye.src ='./pic/images1/open.png';
                flag=1;
            } else {
                pwd.type ='password';
                eye.src ='./pic/images1/close.png';
                flag=0;
            }
        }
    </script>
</body>
```

### 排他思想

如果有同一组元素，要实现某个同样的样式，需要用到循环的排他思想算法

1. 所有元素全部清除样式
2. 给当前元素设置样式
3. 注意不能颠倒顺序

##### 例子：按钮换色

```html
<body>
    <button>我是按钮</button>
    <button>我是按钮</button>
    <button>我是按钮</button>
    <button>我是按钮</button>
    <button>我是按钮</button>
    <script>
        var btn= document.getElementsByTagName('button');
        for(let i=0;i<btn.length;i++) {
            btn[i].onclick = function () {
                for(let j=0;j<btn.length;j++) {
                    btn[j].style.backgroundColor='';
                    // 这里不能留空。。。不然会设置颜色回默认失败
                }
                btn[i].style.backgroundColor='pink';
            }
        }
    </script>
</body>
```

##### 例子：换背景图

![image-20220221154732798](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220221154732798.png)

##### 例子：表格高亮

![image-20220221161228226](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220221161228226.png)

##### 例子：表单全选和取消全选

```html
<body>
    <div class="box">
        <table>
            <thead>
                <tr>
                    <td><input type="checkbox" id="j_cbAll"></td>
                    <th>goods</td>
                    <th>price</td>
                </tr>
            </thead>
            <tbody id="j_tb">
                <tr>
                    <td><input type="checkbox"></td>
                    <td>iphone</td>
                    <td>2000</td>
                </tr>
                <tr>
                    <td><input type="checkbox"></td>
                    <td>ipad</td>
                    <td>3000</td>
                </tr>
                <tr>
                    <td><input type="checkbox"></td>
                    <td>MacBook</td>
                    <td>2500</td>
                </tr>
            </tbody>
        </table>
    </div>
  
    <script>
        var j_cbAll = document.getElementById('j_cbAll');
        var j_tbs = document.getElementById('j_tb').getElementsByTagName('input');
        j_cbAll.onclick = function() {
            console.log(this.checked) ;//得到当前复选框的选定状态
            for(let i=0;i<j_tbs.length;i++) {
                j_tbs[i].checked = this.checked;
            }
        }

        for(let j=0;j<j_tbs.length;j++) {
            j_tbs[j].onclick = function () {
                let flag=true;
                for(let k=0;k<j_tbs.length;k++) {
                    if(!j_tbs[k].checked) {
                        flag=false;
                        break;
                    }
                }
                j_cbAll.checked=flag;
            }
        }
    
    </script>
</body>
```

### 自定义属性操作

#### 获取

**element.属性**

获取内置属性值--元素本身自带的属性

**element.getAttribute('属性')**

程序员自行添加的属性称为自定义属性（data-index）

#### 设置

**element.属性='值'；**

**element.setAttribute('属性'，'值')**

修改clss时修改的是'Class'不是'ClassName'

#### 移除

**element.removeAttribute('属性')；**

##### 例子：tab栏切换

```html
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        
        li {
            list-style-type: none;
        }
        
        .tab {
            width: 978px;
            margin: 100px auto;
        }
        
        .tab_list {
            height: 39px;
            border: 1px solid #ccc;
            background-color: #f1f1f1;
        }
        
        .tab_list li {
            float: left;
            height: 39px;
            line-height: 39px;
            padding: 0 20px;
            text-align: center;
            cursor: pointer;
        }
        
        .tab_list .current {
            background-color: #c81623;
            color: #fff;
        }
        
        .item_info {
            padding: 20px 0 0 20px;
        }
        
        .item {
            display: none;
        }
    </style>
</head>
<body>
    <div class="tab">
        <div class="tab_list">
            <ul>
                <li class="current">商品介绍</li>
                <li>规格与包装</li>
                <li>售后保障</li>
                <li>商品评价(50000)</li>
                <li>手机社区</li>
            </ul>
        </div>
        <div class="tab_con">
            <div class="item" style="display: block;">
            <!-- <div class="item"> -->
                商品介绍模块内容
            </div>
            <div class="item">
                规格与包装模块内容
            </div>
            <div class="item">
                售后保障模块内容
            </div>
            <div class="item">
                商品评价(50000)模块内容
            </div>
            <div class="item">
                手机社区模块内容
            </div>
        </div>
    </div>
    <script>
        var tab_list = document.querySelector('.tab_list');
        var lis = tab_list.querySelectorAll('li');
        var items = document.querySelectorAll('.item');
        for(let i=0;i<lis.length;i++) {
            lis[i].setAttribute('index',i);
            lis[i].onclick = function() {
                for(let j=0;j<lis.length;j++) {
                    console.log('hi');
                    lis[j].className=' ';
                    //这里需要空格来置空or不留空格都行。。，注意Class的写法qwq
                }
                this.className='current';

                var index=this.getAttribute('index');
                for(let j=0;j<items.length;j++) {
                    items[j].style.display='none';
                }
                items[index].style.display='block';
            }
        }
    </script>
```

### html5自定义属性

为了保存并使用数据，有些数据可以保存到页面中而不可以保存到数据库里

h5规定自定义属性以data-开头为属性名并赋值

dataset是一个**集合**，存放了所有以data-开头的自定义属性，ie11才开始使用

element.dataset.index

element.dataset['index']

如果自定义属性里面有多个链接的单词采用驼峰命名法

### 节点操作

#### 父节点

**node.parentNode** 可以返回某节点的父节点，是距离最近的一个父节点，如果指定节点没有父节点，则返回null

#### 子节点

**node.childNodes** （换行属于文本节点）包括所有子节点，包括文本（nodeType==3）、元素结点（nodeType==1）

**node.children** 是一个只读属性，返回所有**子元素结点**，其余节点不返回

#### 第一个和最后一个子元素

**node.firstChild**：返回的是子节点，不管是文本还是元素结点

**node.lastChild**：返回的是子节点，不管是文本还是元素结点

**node.firstElementChild**：返回的是子元素节点，ie9以上使用

**node.LastElementChild**

实际使用：

**node.children[0]**

**node.children[node.children.length-1]**

##### 例子：下拉菜单

```html
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        
        li {
            list-style-type: none;
        }
        
        a {
            text-decoration: none;
            font-size: 14px;
        }
        
        .nav {
            margin: 100px;
        }
        
        .nav>li {
            position: relative;
            float: left;
            width: 80px;
            height: 41px;
            text-align: center;
        }
        
        .nav li a {
            display: block;
            width: 100%;
            height: 100%;
            line-height: 41px;
            color: #333;
        }
        
        .nav>li>a:hover {
            background-color: #eee;
        }
        
        .nav ul {
            display: none;
            position: absolute;
            top: 41px;
            left: 0;
            width: 100%;
            border-left: 1px solid #FECC5B;
            border-right: 1px solid #FECC5B;
        }
        
        .nav ul li {
            border-bottom: 1px solid #FECC5B;
        }
        
        .nav ul li a:hover {
            background-color: #FFF5DA;
        }
    </style>
</head>
<body>
    <ul class="nav">
        <li>
            <a href="#">微博</a>
            <ul>
                <li>
                    <a href="">私信</a>
                </li>
                <li>
                    <a href="">评论</a>
                </li>
                <li>
                    <a href="">@我</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#">微博</a>
            <ul>
                <li>
                    <a href="">私信</a>
                </li>
                <li>
                    <a href="">评论</a>
                </li>
                <li>
                    <a href="">@我</a>
                </li>
            </ul>
        </li>
    </ul>
    <script>
        var nav = document.querySelector('.nav');
        var lis = nav.children;
        for(let i=0;i<lis.length;i++) {
            lis[i].onmouseover =function () {
                this.children[1].style.display ='block';
            }
            lis[i].onmouseout =function () {
                this.children[1].style.display ='none';
            }
        }
    </script>
```

#### 兄弟节点

**node.nextSibling**：返回当前元素下一个兄弟节点，找不到则返回null，同样也是包含**所有节点**

**node.previousSibling**

**node.nextElementSibling**

**node.previousElementSibling**

兼容性问题：自己封装一个兼容性函数

```js
function getNextElementSibling(element) {
    var el =element;
    while(el=el.nextSibling) {
        if(el.nodeType == 1) {
            return e1;
        }
    }
    return null;
}
```

#### 创建节点

**document.createElement(' ')**；创建由tagName指定的HTML元素，因为这些元素原先不存在，是根据我们需求动态生成的，因此也成为动**态创建元素节点**

#### 添加节点

**node.appendChild(child)；**将一个节点添加到指定父元素的子节点列表末尾

**node.insertBefore(child,指定元素)**；

##### 例子：评论发布

```html
    <textarea name="" id=""></textarea>
    <button>发布</button>
    <ul></ul>

    <script>
        var btn = document.querySelector('button');
        var text = document.querySelector('textarea');
        var ul = document.querySelector('ul');

        btn.onclick = function() {
            if(text.value == '') {
                alert('发布的内容不能为空');
                return false;
            } else {
                let li =document.createElement('li');
                li.innerHTML = text.value;
                ul.insertBefore(li,ul.children[0]);
            }
            
        }
    </script>
```

#### 删除节点

**node.removeChild(child)**；

![image-20220222153422529](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220222153422529.png)

##### 阻止链接跳转

javascript:;

javascript:void(0);

##### 例子：评论删除

```html
    <script>
        var btn = document.querySelector('button');
        var text = document.querySelector('textarea');
        var ul = document.querySelector('ul');

        btn.onclick = function() {
            if(text.value == '') {
                alert('发布的内容不能为空');
                return false;
            } else {
                let li =document.createElement('li');
                li.innerHTML = text.value + "<a href='javascript:;'>删除</a>";
                ul.insertBefore(li,ul.children[0]);
            }   
            var as = document.querySelectorAll('a');
            // 这个不能写在里面，因为每点击一次发布就得检索按钮的个数；写在外面的话程序运行一次就结束了，没有检索到按钮的个数
            for(let i=0;i<as.length;i++) {
                as[i].onclick = function() {
                    // a所在的li即是a的父节点
                    ul.removeChild(this.parentNode);
                }
            }
        }
    </script>
```

删除按钮不能正常运行的原因：因为每点击一次发布就得检索按钮的个数；写在外面的话程序运行一次就结束了，没有检索到按钮的个数

#### 复制节点

**node.cloneNode()；**

该方法返回调用该方法的结点的一个**副本**

如果括号为空或者里面为false则为**浅拷贝**，只复制节点本身，不克隆里面的子节点

参数为true则为深拷贝

##### 例子：动态生成表格

```html
<body>
    <table>
        <thead>
            <tr>
                <th>姓名</th>
                <th>科目</th>
                <th>成绩</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody></tbody>
    </table>

    <script>
        var datas =[{
            name : '黄小迪',
            subject : 'java',
            score :100
        },{
            name : '黄小瑜',
            subject : 'javascript',
            score :100
        },{
            name : '黄小鱼',
            subject : 'C++',
            score :100
        }]
        console.log(datas.length);
        var tbody =document.querySelector('tbody');
        for(let i=0;i<datas.length;i++) {
            // 创建行
            var tr =document.createElement('tr');
            tbody.appendChild(tr);
            for(let j in datas[i]) {
                // 行里面创建单元格
                let td = document.createElement('td');
                // 把对象里面的属性值 给td
                td.innerHTML = datas[i][j];
                tr.appendChild(td);
            }
            let td = document.createElement('td');
            td.innerHTML='<a href="javascript:;">删除</a>'
            tr.appendChild(td);
        }

        var as = document.querySelectorAll('a');
        for(let i=0;i<as.length;i++) {
            as[i].onclick = function() {
                //点击a删除a所在的行，链接的父节点的父节点
                tbody.removeChild(this.parentNode.parentNode);
            }
        }
    </script>
</body>
```

##### 三种创建元素的方式区别：

**document.write()；**

`document.write(<div>111</div>)`

直接将内容写入页面的内容流，文档流执行完毕，会导致**页面重绘**

**innerHTML**

将内容写入某个DOM结点，不会导致页面重绘，创建多个元素效率更高（不采用拼接字符串，而是数组形式拼接），结构稍微复杂

**document.createElement()**

创建多个元素效率稍低，但是结构清晰

### 总结

#### 创建

document.write

innerHTML

createElement

#### 增

appendChild

insertBefore

#### 删

removeChild

#### 改

#### 查

getElementById

getElementByTagName

querySelector

querySelectorAll

利用节点操作获取元素，parentNode、children、previousElementSibling、nextElementSibling

#### 属性操作

setAttribute

getAttribute

removeAttribute

#### 实践操作

![image-20220220135548292](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220220135548292.png)

# 事件

## 事件基础

事件是可以被js侦测到的行为

**触发--相应机制**

#### 三要素

事件源：事件被触发的对象

事件类型：如何触发

事件处理程序：通过函数赋值完成

### 注册事件

给元素添加事件--**注册事件、绑定事件**

#### 传统方式

- 利用on开头的事件，onclick等
- btn.onclick = function(){}

特点：**唯一性**

同一个元素的同一事件**只能设置一个处理函数**，最后注册的处理函数会**覆盖**前面注册的处理函数

#### 方法监听注册方式

**addEventListener()** ie9以前不支持

特点：同一个元素同一个事件**可添加多个监听器**(事件处理程序)

`eventTarget.addEventListener(type,listener,useCapture)；`

- type：事件类型字符串，click、mouseover
- listener：事件处理函数，事件发生时。会调用该监听函数
- useCapture：可选参数。bool值

**attachEvent()** --了解

`attachEvent(eventNameWithOn,callback)`

- eventNameWithOn :事件类型字符串，onclick等（加on）
- callback：事件处理函数，当目标触发事件回调函数时被调用

![image-20220223134224599](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220223134224599.png)

### 删除事件

```html
<body>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <script>
        var divs = document.querySelectorAll('div');
        divs[0].onclick =function() {
            alert('hi');
            divs[0].onclick = null; //解绑效果
        }

        divs[1].addEventListener('click',fn)
        function fn() {
            alert('hello');
            divs[1].removeEventListener('click',fn);
        }
        //因为要解绑，因此要把函数写道注册事件的外面,单独声明一个函数

        divs[2].attachEvent('onclick',fn1);
        function fn1() {
            alert('hello world!');
            divs[2].detach('onclick',fn2);
        }
    </script>
</body>
```

### DOM事件流基础

**事件流**：描述的是**从页面接收事件的顺序**

事件发生时会在**元素节点间按照特定的顺序传播**，这个传播过程即为**DOM事件流**

**阶段**：捕获阶段--DOM事件流（目标阶段）--冒泡阶段

- 事件捕获：IE最早提出，时间开始时由最具体的元素接收，然后逐级向上传播到DOM最顶层结点的过程
- 事件冒泡：网景最早提出，由DOM最顶层的结点，逐级向下传播到具体的元素接收的过程



1. js代码只能执行捕获或者冒泡其中一个阶段
2. 只有onclick和attachEvent得到冒泡阶段
3. attachEventListener第三个参数如果是true，则说明在事件捕获阶段调用事件处理程序，如果是false；则表示在事件冒泡阶段调用事件处理程序
4. 实际开发中更关注冒泡
5. 有些事件没有冒泡，onblur、onfocus、onmouseenter、onmouseleave

### 事件对象

1. event就是一个事件对象，写到侦听函数的小括号里，当成形参来看
2. 事件对象只有有了事件才会存在，是系统给我们**自动创建**的，不需要传递参数，并依次传递给事件监听器（事件处理函数）
3. 事件对象是事件一系列**相关信息数据的集合**，跟事件相关的，比如鼠标点击里面就包含鼠标的相关信息，如鼠标坐标等
4. 事件对象可以自己明明，event、eve、e
5. 事件对象也有兼容性问题，ie678只能通过`window.event`获取`e==e || window.event`

#### 事件对象常见的属性和方法

![image-20220223200638845](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220223200638845.png)

- this 返回的是**绑定事件**的对象（元素）
- e.target \ e.srcElement 返回的是**触发事件**的元素（对象）

**currentTarget** 与 this 相似，但有兼容性问题

#### 阻止默认行为（事件）

**e.preventDeafult()** --dom标准写法

return false 可以阻止默认行为，没有兼容性问题

**特点**:return 后面的代码都不执行了，且仅限于传统的注册方式

#### 阻止事件冒泡

事件冒泡：开始时由最具体的元素接收，然后逐级向上传播到DOM最顶层结点

`e.stopPropagation()`

`e.cancelBubble = true;`

#### 事件委托（委派）

for循环给每个事件注册相同的事件，访问DOM次数月u都，就会延长整个页面交互的就绪时间

**原理**：不是给每个子结点单独设置事件监听器，而是事件监听器设置在其**父结点**上，然后利用冒泡原理影响每一个子节点

只操作一次DOM，提高程序性能



### 鼠标の事件（部分）

MouseEvent

#### 禁止鼠标右键菜单

contextmenu 主要控制应该何时显示上下文菜单，用于取消默认的上下文菜单

```javascript
document.addEventListener('contextmenu',function(e) {
            e.preventDefault();
        }) 
```

#### 禁止鼠标选中

```javascript
document.addEventListener('selectstart',function(e) {
            e.preventDefault
        })
```

#### 鼠标事件对象

![image-20220223221641503](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220223221641503.png)

##### 例子：鼠标跟随图片

这样你就获得一个可以一直跟着你的小图片啦！

```html
    <style>
        img {
            position: absolute;
            height: 50px;
            width: 50px;
        }
    </style>
</head>
<body>
    <img src="./JavaScript_exercise/pic/morning.png" alt="">
    <script>
        let pic =document.querySelector('img');
        document.addEventListener('mousemove',function(e) {
            let x = e.pageX;
            let y = e.pageY;
            pic.style.left = x + 'px';
            pic.style.top = y + 'px';
        })
    </script>
</body>
```

### 键盘事件

- **onkeyup**
- **onkeydown**
- **onkeypress** (它不识别功能键，如ctrtl、shift、箭头等)

执行顺序：keydown-keypress-keyup

**keyCode** 属性可以返回按下键的阿斯克码值

```javascript
    <script>
        document.addEventListener('keyup',function(e) {
            console.log('press:' + e.keyCode);
        })
    </script>
```

##### 例子：快捷键 S 聚焦搜索栏

```html
<body>
    <input type="text" name="" id="">
    <script>
        let search = document.querySelector('input');
        document.addEventListener('keyup',function(e) {
            if(e.keyCode === 83) {
                search.focus();
            }
        })
    </script>
</body>
```

# BOM

**浏览器对象模型**，独立于内容而与浏览器窗口进行交互的对象，核心对象是window，是浏览器的顶级事项

- 是js访问浏览器的接口
- 是一个全局变量，在全局作用域中的变量函数都会成为window对象的属性和方法，调用时可省略window

## 常见事件

### 页面加载事件

#### 窗口加载事件

```html
    <script>
        window.onload = function() {

        }
        window.addEventListener("load",function(){
            
        });
    </script>
```

`window.onload`当**文档内容完全加载完成**就会触发该事件（包括图像、脚本文件、CSS、文件等）就调用的处理函数

window.onload**传统注册方式只能写一次**，如有多个后面的会覆盖前面的，addEventListener可以写多个

##### test

```html
<body>
    <script>
        window.onload = function() {
            var btn = document.querySelector('button');
            btn.addEventListener('click',function(){
                alert(1);
            })

        }
        // window.addEventListener('load',function(){

        // });
    </script>
    <button>点一下看看</button>
</body>
```

`window.addEventListener('DOMContentLoaded',function(){});`

**仅当dom加载完毕后就可以触发事件**，不包含css、flash等，ie9以上支持。

如果页面图片很多的话，从用户访问到onload触发需要较长实现，交互效果的实现受影响，影响用户体验。此时用这个比较合适

#### 调整窗口大小事件

`window.addEventListener('resize',function(){})`

窗口大小像素发生变化就会触发这个事件

`window.innerWith`   **当前屏幕的宽度**

#### 定时器

`window.setTimeout(调用函数，{延迟的毫秒数});`

也称为一个**回调函数**

调用函数的写法：

- 可以直接写在里面
- 可以写在外面，里面写函数名 or  引号里加函数名再加括号 eg ' fn() '
- 一般给定时器赋标识符

`setInterval`

**重复调用**一个函数，每隔这个时间，就去调用一次这个函数

**取消先前设置的定时器**

`window.clearTimeout(timeoutID);`

`clearInterval()`



##### 例子：倒计时器

```html
<body>
    <div>
        <span class="hour"></span>
        <span class="minute"></span>
        <span class="second"></span>
    </div>
    <script>
        let hour =document.querySelector('.hour');
        let minute =document.querySelector('.minute');
        let second =document.querySelector('.second');
        countDown();//先调用一次这个函数，防止第一次刷新页面有空白
        var inputTime= +new Date('2022-8-14 00:00:00');
        setInterval(countDown,1000);//开启定时器
        function countDown() {
            var thisTime= +new Date();
            var times=(inputTime - thisTime)/1000;  //剩余时间的秒数
            var h=parseInt(times /60 /60);
            h = h >= 10 ? h: '0' + h;
            hour.innerHTML = h;
            var min=parseInt(times /60 %60);
            min = min >= 10 ? min: '0' + min;
            minute.innerHTML = min;
            var sec=parseInt(times %60);
            sec = sec >= 10 ? sec: '0' + sec;
            second.innerHTML = sec;
        }
    </script>
</body>
```

##### 例子：发送短信接收验证码的按钮

```html
<body>
    请输入你的手机号码:
    <input type="number"> <button>发送</button>
    <script>
        var btn = document.querySelector('button');
        var res = 10;
        var timer = null;
        btn.addEventListener('click',function() {
            btn.disabled = true;
            timer = setInterval(function() {
                if(res == 0) {
                    btn.disabled = false;
                    clearInterval(timer);
                    btn.innerHTML = '发送';
                    // 需要重新设置按钮里面的文字，否则是 还剩下 1s的字样
                    res = 10;
                } else {
                    btn.innerHTML = '还剩下' + res + '秒';
                    res --;
                }
            },1000);
        })
    </script>
</body>
```

### this

this指针的只想在函数定义时是确定不了的，只有函数执行时才能确定this指向谁，一般情况下this的最终指向是那个调用它的对象

1. 全局作用域或普通函数中的this指向全局对象window (定时器里面的this指向的是window)
2. 在方法中，指向的是调用方法的
3. 构造函数中this指向构造函数的实例

### JavaScript执行机制

![image-20220224144458636](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220224144458636.png)

js的一大特点是**单线程**，可能会导致的问题：如果js执行时间过长，就会造成页面的**渲染不连贯**，导致页面渲染**加载阻塞**的感觉

#### 同步 & 异步

为了解决上述问题，利用多核CPU的计算能力，HTML5提出了web worker标准，允许 js 脚本创建多个线程，因此出现了同步异步

**同步**：前一个任务执行结束后执行下一个任务，执行顺序与任务排列顺序一致、同步的。

都在主线程上执行，形成一个**执行栈**

**异步**：多个任务一块执行。

通过**回调函数**实现，将任务放进任务队列（消息队列）中

- 普通事件：click、resize
- 资源加载：load、error
- 定时器

本质区别：流水线上各个流水执行顺序不同

#### 执行机制

1. 先执行栈中的同步任务
2. 异步任务放入任务队列中
3. 一旦执行栈中的所有同步任务执行完毕，系统就会按次序读取任务队列中的异步任务，于是被读取的异步任务结束等待状态，进入执行栈，开始执行

由于主线程不断重复获取任务、执行任务、再获取任务、再执行，这种机制称为**事件循环**



### location对象

window对象为我们提供了一个location属性用于获**取或设置窗体的URL**，并且可以用于**解析URL**

因为这个属性返回的是一个对象，所以我们也称这个属性为location对象

URL：**统一资源定位符**，互联网上标准资源的地址。它包含的信息指出文件的位置以及浏览器如何处理它

#### location的对象属性

![image-20220224144802865](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220224144802865.png)



##### 例子：页面跳转效果

```html
<body>
    <button>点我一下</button>
    <div></div>
    <script>
        let btn = document.querySelector('button');
        let div = document.querySelector('div');
        btn.addEventListener('click',function() {
            let res = 5;
            let timer = setInterval(function() {
                if(res == 0) {
                    // clearInterval(timer);
                    location.herf = 'http://www.baidu.com';
                } else {
                    div.innerHTML = '您将在'+ res +'秒后跳转';
                    res --;
                } 
            },1000);
        })

    </script>
</body>
```

#### 获取URL参数

![image-20220224144740243](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220224144740243.png)

表单代码

```html
<body>
    <form action="index.html">
        用户名: <input type="text" name="uname">
        <input type="submit" value="login">
    </form>
</body>
```

跳转页面的代码

```html
<body>
    <div></div>
    <script>
        // 这个代码传的是中文的时候不行。。
        // console.log(location.search);
        let params = location.search.substr(1);//从1号位截取到最后一个位置
        // console.log(params);
        let arr = params.split('=');
        // console.log(arr);
        let div = document.querySelector('div');
        div.innerHTML = arr[1] + '欢迎您';
    </script>
</body>
```

#### location 对象的方法

![image-20220224144828307](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220224144828307.png)

### navigator 对象

navigator 对象包含有关**浏览器的信息** 

userAgent 属性可以返回由客户机发送服务器的 user-agent 头部的值

![image-20220224144843884](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220224144843884.png)

### history对象

与浏览器历史对象进行交互，该对象包含用户在浏览器窗口中访问过的url

**back()** ：后退功能

**forward()** ：前进功能

**go(参数)**： 前进后退功能，如果参数是1则前进一个界面，-1则后退一个界面



# 网页特效学习

## offset 

**偏移量**，可以动态的得到元素的位置、大小

- 获取元素距离带有定位的父元素的位置
- 获取元素自身的大小
- 所有返回值都没有单位

### 常用属性集合

`element.offsetParent`  ：返回作为该元素带有定位的父级元素，如果父级元素都没有定位则返回body

`element.offsetTop` ：返回元素**相对带有定位的**父级元素上方的偏移

`element.offsetLeft`：返回元素**相对带有定位的**父级元素左侧的偏移

`element.offsetWidth` ：返回自身包括padding、边框、内容区的宽度，返回数值不带单位

`element.offsetHeight` ：返回自身包括padding、边框、内容区的高度，返回数值不带单位

#### offset 和 style 的区别

最主要的区别是，offset是一个**只读属性**

![image-20220224144907715](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220224144907715.png)

##### 例子：获取鼠标在盒子中的坐标

```html
    <script>
        let box = document.querySelector('.box');
        box.addEventListener('click',function(e) {
            let x = e.pageX - this.offsetLeft;
            let y = e.pageY - this.offsetTop;
            this.innerHTML = ('x: '+x+' Y: '+ y);
        })
    </script>
```

##### 例子：拖动**模块框**（弹出登录框）

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .login-header {
            width: 100%;
            text-align: center;
            height: 30px;
            font-size: 24px;
            line-height: 30px;
        }
        
        ul,
        li,
        ol,
        dl,
        dt,
        dd,
        div,
        p,
        span,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        a {
            padding: 0px;
            margin: 0px;
        }
        
        .login {
            /* 点击之前隐藏 */
            display: none;
            width: 512px;
            height: 280px;
            position: fixed;
            border: #ebebeb solid 1px;
            left: 50%;
            top: 50%;
            background: #ffffff;
            box-shadow: 0px 0px 20px #ddd;
            z-index: 9999;
            transform: translate(-50%, -50%);
            /* 垂直水平居中 */
        }
        
        .login-title {
            width: 100%;
            margin: 10px 0px 0px 0px;
            text-align: center;
            line-height: 40px;
            height: 40px;
            font-size: 18px;
            position: relative;
            cursor: move;
        }
        
        .login-input-content {
            margin-top: 20px;
        }
        
        .login-button {
            width: 50%;
            margin: 30px auto 0px auto;
            line-height: 40px;
            font-size: 14px;
            border: #ebebeb 1px solid;
            text-align: center;
        }
        
        .login-bg {
            /* 点击之前隐藏 */
            display: none;
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0px;
            left: 0px;
            background: rgba(0, 0, 0, .3);
        }
        
        a {
            text-decoration: none;
            color: #000000;
        }
        
        .login-button a {
            display: block;
        }
        
        .login-input input.list-input {
            float: left;
            line-height: 35px;
            height: 35px;
            width: 350px;
            border: #ebebeb 1px solid;
            text-indent: 5px;
        }
        
        .login-input {
            overflow: hidden;
            margin: 0px 0px 20px 0px;
        }
        
        .login-input label {
            float: left;
            width: 90px;
            padding-right: 10px;
            text-align: right;
            line-height: 35px;
            height: 35px;
            font-size: 14px;
        }
        
        .login-title span {
            position: absolute;
            font-size: 12px;
            right: -20px;
            top: -30px;
            background: #ffffff;
            border: #ebebeb solid 1px;
            width: 40px;
            height: 40px;
            border-radius: 20px;
        }
    </style>
</head>
<body>
    <div class="login-header"><a id="link" href="javascript:;">点击,弹出登录框</a></div>
    <div id="login" class="login">
        <div id="title" class="login-title">登录会员
            <span><a id="closeBtn" href="javascript:void(0);" class="close-login">关闭</a></span>
        </div>
        <div class="login-input-content">
            <div class="login-input">
                <label>用户名:</label>
                <input type="text" placeholder="请输入用户名" name="info[username]" id="username" class="list-input">
            </div>
            <div class="login-input">
                <label>登录密码:</label>
                <input type="password" placeholder="请输入登录密码" name="info[password]" id="password" class="list-input">
            </div>
        </div>
        <div id="loginBtn" class="login-button"><a href="javascript:void(0);" id="login-button-submit">登录会员</a></div>
    </div>
    <!-- 遮盖层 -->
    <div id="bg" class="login-bg"></div>
    
    <script>
        let login = document.querySelector('.login');
        let mask = document.querySelector('.login-bg');
        let link = document.querySelector('#link');
        let closeBtn = document.querySelector('#closeBtn');
        let title = document.querySelector('#title');
        // 点击link 弹出登录框和灰色的背景
        link.addEventListener('click',function() {
            mask.style.display = 'block';
            login.style.display = 'block';
        })
        // 点击closeBtn 隐藏
        closeBtn.addEventListener('click',function() {
            mask.style.display = 'none';
            login.style.display = 'none';
        })
        // 实现拖拽效果
        // 鼠标坐标-鼠标在盒子内的坐标=模态框真正的位置
        title.addEventListener('mousedown',function(e) {
            let x = e.pageX - login.offsetLeft;
            let y = e.pageY - login.offsetTop;
            // move
            document.addEventListener('mousemove',move);
            function move(e) {
                login.style.left = e.pageX - x + 'px';
                login.style.top = e.pageY - y + 'px';
                console.log(e.pageX - x + 'px');
            }
            // stop
            document.addEventListener('mouseup',function() {
                document.removeEventListener('mousemove',move);
            })
        })

    </script>
</body>
</html>
```



```
点击绑定按钮就报 Uncaught TypeError: is_select is not a function at HTMLInputElement.onclick 这样的错误。

报错原因应该是如果有某个 input 元素的 name 或者 id 与 JS 函数同名的话就会产生冲突，不能正常调用。也有可能是你的js并没有引用，所以找不到函数。

解决办法就是改一下元素的 id/name 或者改函数名。或者将你的js引入

##也有可能是代码补全的时候选错了。。。

如何避免命名冲突呢？

1.采用匿名函数，

2.避免全局变量的泛滥，

3.合理使用命名空间；

4.添加必要的注释；

5.避免使用关键字和保留字
```

## Client



## Scroll



## Summary

### Offfset、Client、Scroll区别

![image-20220227091847611](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220227091847611.png)

`offset` 用于获取元素位置

`client` 用于获取元素大小

`scroll`    用于获取滚动距离

`window.pageXoffset` 获得页面滚动距离



### mouseover & mouseenter

#### mouseover

经过自身盒子会触发，经过子盒子也会触发

#### mouseenter

- 只会经过自身盒子时触发
- 不会有事件冒泡

## 动画原理

### 动画函数的封装

通过定时器`setInerval()`不断移动盒子的位置

#### 步骤

1. 获取盒子当前的位置
2. 让盒子在当前位置上加上一个移动距离(利用element.style赋值)
3. 利用定时器不断重复
4. 加一个定时器结束条件

**注意：此元素需要添加定位才能使用element.style.**

```html
<body>
    <button>点我一下</button>
    <div></div>
    <script>
        function animate(obj,target) {
            // 一开始加了按钮之后，点一次动一下，后来发现是关闭定时器的函数写进开启定时器的函数里面了。。。
            clearInterval(obj.timer);
            // obj.timer 防止多个函数调用时有歧义产生
            obj.timer = setInterval(function() {
                // 当我们不断点击按钮，这个元素的速度会越来越快，因为开启了太多的定时器
                // 解决方案：让元素只有一个定时器执行--先清楚以前的定时器，只保留当前的一个定时器
                if(obj.offsetLeft >= target) {
                    // 停止动画本质是停止计时器
                    clearInterval(obj.timer);
                }
                obj.style.left = div.offsetLeft + 10 +'px' ;
                console.log(obj.offsetLeft);
            },30);

        }
        var div = document.querySelector('div');
        var btn = document.querySelector('button');
        btn.addEventListener('click',function() {
            animate(div,400);
        })
    </script>
</body>
```

### 缓动动画原理

让速度运动速度有所变化

#### 思路：

1. 让盒子每次移动的距离慢慢变小，速度就会慢慢变小
2. 核心算法：**（目标值-现在的位置）/ 10**
3. 停止的条件是：到达指定的位置就会停止计时器

- 应该修改步长，解决小数的问题
- 当元素在多个目标值之间移动时需要考虑移动距离的正负

```javascript
let step =  step > 0 ? Math.ceil((target - div.offsetLeft)/10) : Math.floor((target - div.offsetLeft)/10);
```

```javascript
 function animate(obj,target) {
            clearInterval(obj.timer);
            let step =  target > 0 ? Math.ceil((target - div.offsetLeft)/10) : Math.floor((target - div.offsetLeft)/10);
            obj.timer = setInterval(function() {
                if(obj.offsetLeft >= target) {
                    clearInterval(obj.timer);
                }
                obj.style.left = div.offsetLeft + step +'px' ;
            },30);
        }
```

- **匀速动画：盒子当前的位置 + 固定的值**
- **缓动动画：盒子当前的位置 + 变化的值（目标值-现在的位置）/10**

### 缓动动画添加回调函数

**回调函数原理**：函数可以作为一个参数，将这个**函数作为参数传到另一个函数里面**，当那个函数执行完后，在执行传进去的这个函数，这个过程就叫回调。

写到定时器结束的位置

```javascript
    <script>
        function animate(obj,target,callback) {
            clearInterval(obj.timer);
            let step =  target > 0 ? Math.ceil((target - obj.offsetLeft)/10) : Math.floor((target - div.offsetLeft)/10);
            obj.timer = setInterval(function() {
                if(obj.offsetLeft >= target) {
                    clearInterval(obj.timer);
                    if(callback) {
                        callback();
                    }
                }
                obj.style.left = div.offsetLeft + step +'px' ;
            },30);
        }
        var div = document.querySelector('div');
        var btn = document.querySelector('button');
        btn.addEventListener('click',function() {
            animate(div,600,function() {
                alert('我执行完了');
            });
        })
    </script>
```

### 轮播图

1. 用ul li 将图片放入网页
2. 让图片浮动起来--将CSS样式改为浮动
3. 将ul的宽度改为：一张图的宽度 × 图片的数量，让图片排到一行上去
4. for动态生成圆圈
5. 点击某个小圆圈，就让图片滚动小圆圈的索引号乘以图片的宽度
6. **无缝滚动**：将ul的第一个li放在ul最后面，当图片滚动到克隆的最后一张图片时让图片快速的不做滚动的跳到最左侧

```javascript
function animate(obj, target, callback) {
    // console.log(callback);  callback = function() {}  调用的时候 callback()

    // 先清除以前的定时器，只保留当前的一个定时器执行
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        // 步长值写到定时器的里面
        // 把我们步长值改为整数 不要出现小数的问题
        // var step = Math.ceil((target - obj.offsetLeft) / 10);
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            // 停止动画 本质是停止定时器
            clearInterval(obj.timer);
            // 回调函数写到定时器结束里面
            // if (callback) {
            //     // 调用函数
            //     callback();
            // }
            callback && callback();
        }
        // 把每次加1 这个步长值改为一个慢慢变小的值  步长公式：(目标值 - 现在的位置) / 10
        obj.style.left = obj.offsetLeft + step + 'px';

    }, 15);
}
```

```javascript
window.onload = function load(){
    // 左右箭头设置，鼠标放上来才会出现， 离开就消失
    let focus = document.querySelector('.focus');
    let arrow1 = document.querySelector('.arrow-l');
    let arrow2 = document.querySelector('.arrow-r');
    focus.addEventListener('mouseenter',function() {
        arrow1.style.display = 'block';
        arrow2.style.display = 'block';
    })
    focus.addEventListener('mouseleave',function() {
        arrow1.style.display = 'none';
        arrow2.style.display = 'none';
    })

    // 自动根据图片数量生成对应的小圆圈 + 点击小圆圈时候变色和移动
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');
    for(let i = 0;i<ul.children.length;i++) {
        let li = document.createElement('li');
        // 记录当前小圆圈的索引号
        li.setAttribute('index',i);
        ol.appendChild(li);
        ol.children[0].className = 'current';
        
        li.addEventListener('click',function() {
            for(let j = 0;j<ol.children.length;j++) {
                ol.children[j].className='';
            }
            this.className = 'current';
            // move my pic
            // 获取当前的索引号
            let index = this.getAttribute('index');
            // 当我们点击了某个小li，就应该把这个索引号给cnt
            cnt = index;
            let focusWidth = focus.offsetWidth;
            animate(ul,-index*focusWidth);
        })
    }
    // 无缝滚动
    let fir = ul.children[0].cloneNode(true);
    // 深克隆
    ul.appendChild(fir);

    // 点击箭头，图片进行滚动
    let cnt = 0 ,circleCnt = 0;
    let focusWidth = focus.offsetWidth;
    arrow1.addEventListener('click',function(){
        cnt--;
        if(cnt < 0) {
            cnt = ol.children.length - 1;
            ul.style.left = -cnt *focusWidth +'px';
        }
        animate(ul,-cnt*focusWidth);
        circleChange(cnt);
    })

    arrow2.addEventListener('click',function(){
        cnt++; 
        // 当遍历到最后一张图片时自动跳转到最前面
        if(cnt == ul.children.length - 1) {
            ul.style.left = 0;
            cnt = 0;
            ol.children[0].className = 'current';
        }
        animate(ul,-cnt*focusWidth);
        circleChange(cnt);
    })

    function circleChange(cnt) {
        for(let j = 0;j<ol.children.length;j++) {
            ol.children[j].className = '';
        }
        ol.children[cnt].className = 'current';
    }


    // 自动播放，手动调用点击事件
    let timer = setInterval(function() {
        arrow2.click();
    },2000)
}
```



### 节流阀

当上一个函数动画执行完毕，再去执行下一个函数动画，让事件无法连续触发。

核心思想：利用回调函数，添加一个变量来控制，锁住和解锁函数

# 移动端网页特效

## 基础特效

### 触摸事件

`touchstart` ：手指触摸事件

`touchmove` ：手指在DOM元素上的移动事件

`touchend` ：手指离开DOM元素事件

#### 触摸事件对象

`TouchEvent` :是一类描述手指在触摸屏的状态的变化时间，这类事件用于描述一个或多个触点，使开发者可以检测触点的移动增加和减少

touches ： 正在触摸**屏幕**的所有的触点的列表

targetTouches ：正在触摸**当前DOM元素**的一个列表

`changeTouches` ：手指状态发生了改变的列表，从无到有，从有到无

#### 移动端拖动元素

1. touchstart获取手指初始坐标，同时获取盒子原来的位置
2. 移动手指touchmove，计算手指滑动距离并且移动盒子
3. 离开手指touchend

手指移动也会触发滚动屏幕，所以在这里要阻止默认的屏幕滚动事件，`e.preventDefault`

```javascript
    <script>
        // （1） 触摸元素 touchstart：  获取手指初始坐标，同时获得盒子原来的位置
        // （2） 移动手指 touchmove：  计算手指的滑动距离，并且移动盒子
        // （3） 离开手指 touchend:
        var div = document.querySelector('div');
        var startX = 0; //获取手指初始坐标
        var startY = 0;
        var x = 0; //获得盒子原来的位置
        var y = 0;
        div.addEventListener('touchstart', function(e) {
            //  获取手指初始坐标
            startX = e.targetTouches[0].pageX;
            startY = e.targetTouches[0].pageY;
            x = this.offsetLeft;
            y = this.offsetTop;
        });

        div.addEventListener('touchmove', function(e) {
            //  计算手指的移动距离： 手指移动之后的坐标减去手指初始的坐标
            var moveX = e.targetTouches[0].pageX - startX;
            var moveY = e.targetTouches[0].pageY - startY;
            // 移动我们的盒子 盒子原来的位置 + 手指移动的距离
            this.style.left = x + moveX + 'px';
            this.style.top = y + moveY + 'px';
            e.preventDefault(); // 阻止屏幕滚动的默认行为
        });
    </script>
```

#### 轮播图

```JavaScript
window.addEventListener('load', function() {
    // alert(1);
    // 1. 获取元素 
    var focus = document.querySelector('.focus');
    var ul = focus.children[0]; // 将包裹图片的ul获取
    // 获得focus 的宽度
    var w = focus.offsetWidth;
    var ol = focus.children[1]; // 将包裹点点的ol获取
    // 2. 利用定时器自动轮播图图片
    var index = 0;

    var timer = setInterval(function() {
        index++;
        var translatex = -index * w;
        // 过度属性
        ul.style.transition = 'all .3s';
        ul.style.transform = 'translateX(' + translatex + 'px)';
    }, 2000);

    // 等着我们过渡完成之后，再去判断 监听过渡完成的事件 transitionend 
    ul.addEventListener('transitionend', function() {
        // 无缝滚动
        if (index >= 3) {
            index = 0;
            // 去掉过渡效果 这样让我们的ul 快速的跳到目标位置
            ul.style.transition = 'none';
            // 利用最新的索引号乘以宽度 去滚动图片
            var translatex = -index * w;
            ul.style.transform = 'translateX(' + translatex + 'px)';
        } else if (index < 0) {
            index = 2;
            // 去掉过渡效果
            ul.style.transition = 'none';
            // 利用最新的索引号乘以宽度 去滚动图片
            var translatex = -index * w;
            ul.style.transform = 'translateX(' + translatex + 'px)';
        }
        // 3. 小圆点跟随变化
        // 把ol里面li带有current类名的选出来去掉类名 remove
        ol.querySelector('.current').classList.remove('current');
        // 让当前索引号 的小li 加上 current   add
        ol.children[index].classList.add('current');
    });

    // 4. 手指滑动轮播图 
    // 触摸元素 touchstart： 获取手指初始坐标
    var startX = 0;
    var moveX = 0; // 后面我们会使用这个移动距离所以要定义一个全局变量
    var flag = false; // 记录手指是否有过移动
    ul.addEventListener('touchstart', function(e) {
        startX = e.targetTouches[0].pageX;
        // 手指触摸的时候就停止定时器
        clearInterval(timer);
    });

    // 移动手指 touchmove： 计算手指的滑动距离， 并且移动盒子
    ul.addEventListener('touchmove', function(e) {
        // 计算移动距离
        moveX = e.targetTouches[0].pageX - startX;
        // 移动盒子：  盒子原来的位置 + 手指移动的距离 
        var translatex = -index * w + moveX;
        // 手指拖动的时候，不需要动画效果所以要取消过渡效果
        ul.style.transition = 'none';
        ul.style.transform = 'translateX(' + translatex + 'px)';
        flag = true; // 如果用户手指移动过我们再去判断否则不做判断效果
        e.preventDefault(); // 阻止滚动屏幕的行为
    });

    // 手指离开 根据移动距离去判断是回弹还是播放上一张下一张
    ul.addEventListener('touchend', function(e) {
        if (flag) {
            // (1) 如果移动距离大于50像素我们就播放上一张或者下一张
            if (Math.abs(moveX) > 50) {
                // 如果是右滑就是 播放上一张 moveX 是正值
                if (moveX > 0) {
                    index--;
                } else {
                    // 如果是左滑就是 播放下一张 moveX 是负值
                    index++;
                }
                var translatex = -index * w;
                ul.style.transition = 'all .3s';
                ul.style.transform = 'translateX(' + translatex + 'px)';
            } else {
                // (2) 如果移动距离小于50像素我们就回弹
                var translatex = -index * w;
                ul.style.transition = 'all .1s';
                ul.style.transform = 'translateX(' + translatex + 'px)';
            }
        }
        // 手指离开的时候就重新开启定时器
        clearInterval(timer);
        timer = setInterval(function() {
            index++;
            var translatex = -index * w;
            ul.style.transition = 'all .3s';
            ul.style.transform = 'translateX(' + translatex + 'px)';
        }, 2000);
    });
```

#### 返回顶部按钮

```javascript
 // 返回顶部模块制作
    var goBack = document.querySelector('.goBack');
    var nav = document.querySelector('nav');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset >= nav.offsetTop) {
            goBack.style.display = 'block';
        } else {
            goBack.style.display = 'none';
        }
    });

    goBack.addEventListener('click', function() {
        window.scroll(0, 0);
    })
})
```

#### click 延时解决方案

移动端click会有300ms延时，因为移动端屏幕双击会缩放页面（double tap to zoom）

**解决方案1：**禁止缩放，浏览器禁用默认的双击缩放行为并且去掉300ms的点击延迟

**解决方案2：**用touch事件封装这个事件解决

**原理：**

1. 当手指触摸屏幕时，记录当前触摸事件
2. 当手指离开屏幕时，用离开时间减去触摸时间
3. 若时间小于150ms，且没有滑动过屏幕，则定义为点击

![image-20220303133616706](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220303133616706.png)

**解决方案3：**fastclick插件

1、引用

```
 <script src="fastclick.js"></script>
```

2、使用

```
 <script>
        if ('addEventListener' in document) {
            document.addEventListener('DOMContentLoaded', function() {
                FastClick.attach(document.body);
            }, false);
        }
        var div = document.querySelector('div');
        div.addEventListener('click', function() {
            alert(11);
        })
    </script>
```

# 本地存储

### 特征

![image-20220303143716970](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220303143716970.png)

#### `window.sessionStorage`

生命周期为关闭浏览器窗口

在同一个窗口下的数据可以共享

以键值对的形式存储

`sessionStorage.setItem(key,value)`

`sessionStorage.getItem(key)`

`sessionStorage.remove(key)`

`sessionStorage.clear()`

```html
<body>
    <input type="text">
    <button class="set">存储数据</button>
    <button class="get">获取数据</button>
    <button class="remove">删除数据</button>
    <button class="del">清空所有数据</button>
    <script>
        console.log(localStorage.getItem('username'));

        var ipt = document.querySelector('input');
        var set = document.querySelector('.set');
        var get = document.querySelector('.get');
        var remove = document.querySelector('.remove');
        var del = document.querySelector('.del');
        set.addEventListener('click', function() {
            // 当我们点击了之后，就可以把表单里面的值存储起来
            var val = ipt.value;
            sessionStorage.setItem('uname', val);
            sessionStorage.setItem('pwd', val);
        });
        get.addEventListener('click', function() {
            // 当我们点击了之后，就可以把表单里面的值获取过来
            console.log(sessionStorage.getItem('uname'));
        });
        remove.addEventListener('click', function() {
            // 
            sessionStorage.removeItem('uname');
        });
        del.addEventListener('click', function() {
            // 当我们点击了之后，清除所有的
            sessionStorage.clear();
        });
    </script>
</body>
```

#### `window.localStorage`

可以多页面像命周期永久存生效，除非手动删除，否则关闭页面也会存在

生e命周期永久存生效，除非手动删除，否则关闭页面也会存在

可以多页面共享数据

```html
<body>
    <input type="text" id="username"> <input type="checkbox" name="" id="remember"> 记住用户名
    <script>
        var username = document.querySelector('#username');
        var remember = document.querySelector('#remember');
        if (localStorage.getItem('username')) {
            username.value = localStorage.getItem('username');
            remember.checked = true;
        }
        remember.addEventListener('change', function() {
            if (this.checked) {
                localStorage.setItem('username', username.value)
            } else {
                localStorage.removeItem('username');
            }
        })
    </script>
</body>
```

```html
<body>
    <input type="text">
    <button class="set">存储数据</button>
    <button class="get">获取数据</button>
    <button class="remove">删除数据</button>
    <button class="del">清空所有数据</button>
    <script>
        var ipt = document.querySelector('input');
        var set = document.querySelector('.set');
        var get = document.querySelector('.get');
        var remove = document.querySelector('.remove');
        var del = document.querySelector('.del');
        set.addEventListener('click', function() {
            var val = ipt.value;
            localStorage.setItem('username', val);
        })
        get.addEventListener('click', function() {
            console.log(localStorage.getItem('username'));
        })
        remove.addEventListener('click', function() {
            localStorage.removeItem('username');
        })
        del.addEventListener('click', function() {
            localStorage.clear();
        })
    </script>
```

#### `JSON.stringify()`

本地存储只能存储字符串数据格式

#### `JSON.parse()`

获取本地存储的数据，需要把字符串数据转化为对象格式的数据

```html
    <script>
        var todolist = [{
            title: '我今天吃八个馒头',
            done: false
        }, {
            title: '我今天学习jq',
            done: false
        }, ];
        // localStorage.setItem("todo", todolist);
        // 1. 本地存储里面只能存储字符串的数据格式 把我们的数组对象转换为字符串格式 JSON.stringify()
        localStorage.setItem("todo", JSON.stringify(todolist));
        var data = localStorage.getItem("todo");
        // console.log(typeof data);
        // console.log(data[0].title);
        // 2. 获取本地存储的数据 我们需要把里面的字符串数据转换为 对象格式 JSON.parse()
        data = JSON.parse(data);
        console.log(data);
        console.log(data[0].title);
    </script>
```

![image-20220306103009410](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220306103009410.png)

