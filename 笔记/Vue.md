# Vue

## 基础

页面由数据生成

`el`：**挂载点**

1. Vue会管理el**选项命中**的元素及其内部的**后代元素**
2. 推荐使用**ID选择器**
3. 可以使用其他双标签，不包括HTML和BODY

`data`：**数据对象**

1. Vue中用到的数据定义在data中
2. data中可以写复杂类型数据
3. 渲染复杂类型数据时，遵循js语法

```html
	<div id="app">
	  {{ message }} {{name}}
	</div>
	
	<script type="text/javascript">
	var app = new Vue({
		el: '#app',
		data: {
			message: 'Hello Vue!',
			name : "Vue"
		}
	});
	</script>
```

我们不再和 HTML 直接交互了。一个 Vue 应用会将其挂载到一个 DOM 元素上 (对于这个例子是 `#app`) 然后对其进行完全控制。那个 HTML 是我们的入口，但其余都会发生在新创建的 Vue 实例内部。

##### 例子：访问data元素中复杂类型数据

```html
<body>
    <div id="app">
        {{ message }}
        <span>{{test.uname}}</span>
        <ul>
            <li>{{campus[0]}}</li>
            <li>{{campus[1]}}</li>
        </ul>
    </div>
    <script>
        var app = new Vue({
                el: '#app',
                data: {
                    message: 'Hello Vue!',
                    campus:['hello','hi','h a u'],
                    test:{
                        uname:'黄小迪',
                        mobile:'136000000'
                    }
                }
            })
    </script>   
</body>
```

## 本地应用

#### `v-text` 

1. 设置标签内容
2. 默认写法回替换全部内容，使用**差值表达式{{}}**可以替换指定内容
3. 内部支持写**表达式**

#### `v-html`

1. 设置innerHTML元素
2. 内容中有html结构会被**解析成标签**
3. v-text无论内容是什么只会解析成文本

##### 例子：v-text 字符串拼接

```html
    <div id="app">
        <h2 v-text="message+'!!!'"></h2>
        <h3 v-text="info"></h3>
        <h4>{{message +'??'}}</h4>
    </div>
    <script type="text/javascript">
        var app = new Vue({
            el: '#app',
            data: {
                message: 'Hello Vue!',
                info:'黄小迪'
            }
        });
    </script>
```

##### 例子：v-text & v-html

```html
<body>
    <div id="app">
        <h1 v-html="content"></h1>
        <h2 v-text="content"></h2>
    </div>
    <script type="text/javascript">
        var app = new Vue({
            el: '#app',
            data: {
                message: 'Hello Vue!',
                info:'黄小迪',
                content:"<a href='http://www.baidu.com'>百度一下</a>"

            }
        });
    </script>
    
</body>
```

![image-20220226111716314](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220226111716314.png)

#### `v-on`

1. 为事件绑定元素
2. 事件名不需要写on，指令可简写为@
3. 绑定的方法定义在methods属性中
4. 方法内部通过this关键字访问定义在data中数据

在vue中，无需考虑如何操作DOM，只需考虑如何更改数据，数据更新后，使用数据的元素也会同步更新，但在方法内部取到数据需要使用this

##### 例子：按钮

```html
    <div id="app">
        <input type="button" value="test" v-on:click="doIt">
        <input type="button" value="test-简写" @click="doIt">
        <input type="button" value="test-双击" @dblclick="doIt">
        <h2 @click="uadd">{{uname}}</h2>
    </div>
    <script type="text/javascript">
        var app = new Vue({
            el: '#app',
            data:{
                uname:"黄小迪"
            },
            methods:{
                doIt:function() {
                    alert('Hello world!');
                },

                uadd:function() {
                    this.uname+="是猪"
                }
            },
        });
    </script>  
```

##### 例子：计数器

```html
    <div id="app">
        <div class="input-num">
            <button @click="sub">-</button>
            <span>{{num}}</span>
            <button @click="add">+</button>
        </div>
    </div>
    <script type="text/javascript">
        var app = new Vue({
            el: '#app',
            data:{
                num:1
            },
            methods:{
                add:function() {
                    if(this.num==10) {
                        alert('已经是最大值');
                    } else {
                        this.num++;
                    }
                },
                sub:function() {
                    if(this.num==0) {
                        alert('已经是最小值');
                    } else {
                        this.num--;
                    }
                }
            },
        });
    </script> 
```

##### 例子：传参+键盘触发

1. 事件绑定写成函数调用的形式就可以传入自定义的参数
2. 定义方法时需要定义形参来接受传入的实参
3. 事件后面跟上`.修饰符` 来对事件进行限制

```html
    <div id="app">
        <button @click="doit(666,'I am String')" value="点击">点我一下</button>
        <input type="text" @keyup.enter="sayHi">
    </div>
    <script>
        var app = new Vue({
            el:"#app",
            methods:{
                doit:function(p1,p2) {
                    console.log(p1);
                    console.log(p2);
                },
                sayHi:function() {
                    alert('你好');
                }
            }

        })
    </script>
```

#### `v-show`

1. 根据表达式的真值切换元素的显示和隐藏
2. 原理是修改元素的display
3. 指令后面的内同都会解析为布尔值
4. 数据改变之后对应元素的显示状态会同步更新

##### 例子：控制图片的显示和隐藏

```html
    <div id="app">
        <input type="button" value="切换显示" @click="changeIsShow">
       <img  v-show="isShow" src="./pic/evening.png" alt="">
    </div>
    <script type="text/javascript">
        var app = new Vue({
            el: '#app',
            data:{
                isShow:false
            },
            methods:{
                changeIsShow:function(){
                    this.isShow=!this.isShow;
                }
            },
        });
    </script>  
```

#### `v-if`

1. 根据表达式的真假切换元素的显示
2. 本质是通过操纵dom元素来切换显示状态，当表达式为true时，元素存在于dom树中，当为false时元素从dom树中移除
3. 频繁操作的切换v-show，反之使用v-if，v-show切换的消耗小

#### `v-bind`

1. 用于设置元素的属性值（如：src、title、class）
2. `v-bind:属性名 ` 或者`:属性名` 

```html
 <div id="app">
        <img v-bind:src="imgSrc" alt="">
        <br>
        <img :src="imgSrc" alt="" :title="imgTitle" 
        :class="isActive ? 'active':''" @click="toggletActive">

        <br>
        <img :src="imgSrc" alt="" :title="imgTitle" 
        :class="{active:isActive}" @click="toggletActive">

    </div>
    <script type="text/javascript">
        var app = new Vue({
            el: '#app',
            data: {
                imgSrc:'./pic/evening.png',
                imgTitle: "hello",
                isActive : false
            },
            methods: {
                toggletActive:function() {
                    this.isActive = !this.isActive;
                }
            },
        })
    </script>  
```

#### `v-for`

1. 根据数据生成列表结构
2. 数组经常结合`v-for`使用
3. 语法：`（item，index）in 数据`
4. item 和 index 可以结合其他指令一起使用
5. 数组长度的更新会同步到页面上，是响应式的

```html
    <div id="app">
        <ul>
            <li v-for="(item,index) in arr">
                {{index}} Address:{{item}}
            </li>
        </ul>
        <h2 v-for="item in uname" v-bind:title="item.myname">{{item.myname}}</h2>
        <button @click="add">ADD</button>
        <button @click="remove">SUB</button>

    </div>
    <script>
        var app = new Vue({
            el:"#app",
            data: {
                arr:["Beijing","Shanghai","Guangzhou"],
                uname:[
                    {myname:"ssw"},
                    {myname:"hrd"}
                ]
            },
            methods:{
                add:function() {
                    this.uname.push({myname:"hyy"});
                },
                remove:function() {
                    this.uname.shift();
                }
            }

        })
    </script>
```

#### `v-model`

获取和设置表单元素的值（**双向数据绑定**）

```html
   <div id="app">
        <input type="button" value="Update" @click="setMessage">
        <input type="text" v-model="message" @keyup.enter="getMessage">
        <h2>{{message}}</h2>
    </div>
    <script>
        var app = new Vue({
            el:"#app",
            data:{
                message:"黄小迪"
            },
            methods:{
                getMessage:function() {
                    alert(this.message);
                },
                setMessage:function() {
                    this.message="hyy";
                }
            }
        })
    </script>
```



## 网络应用

1. axios 必须先导入在使用
2. 使用get和post方法即可发送对应的请求
3. then方法中的回调函数会在请求成功或失败时触发
4. 通过回调函数的形参可以获取相应内容或错误信息
5. axios回调函数中的this已经改变无法访问到data中的数据
6. 把this保存起来，回调函数中直接使用保存的this即可
7. 和本地应用的最大区别是：**数据来源**

