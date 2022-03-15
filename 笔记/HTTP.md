# HTTP协议

网页内容叫做超文本，因此网页传输内容又叫做超文本传输协议

通信的方式：响应

交互模型：请求/响应交互模型

## HTTP 请求消息

客户端发起的请求叫做http请求，客户端发送到服务器的消息叫做http请求消息（又叫请求报文）

**组成**：请求行、请求头部、空行、请求体



![image-20220312221205224](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220312221205224.png)

**请求行**：请求方式、URL、HTTP协议版本

**请求头部**：客户端的基本消息，从而把客户端的相关消息告诉服务器

由多行键值对组成，每行的键和值之间用英文的冒号分隔

- User-Agent：说明当前是什么类型的浏览器
- Content-Type：描述发送到服务器的数据格式
- Accept：客户端能够接受什么类型的返回内容
- Accept-Language：客户端期望接受的人类文本语言

**空行**：通知服务器请求头部就此结束

**请求体**：存放的是要通过post方式提交到服务器的数据（GET没有请求体）

## HTTP响应消息

**组成**：状态行、响应头部、响应体

**状态行**：HTTP下协议版本、状态码、状态码的描述文本（`HTTP/1.1 200 OK`)

**响应头部**：描述服务器的基本信息，键值对

**空行**：通知客户端响应头部到此结束，分隔响应头部与响应体

**响应体**：存放的服务器相应给客户端的内容

## HTTP请求方法

表明对服务器上的资源执行的操作

![image-20220312231636853](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220312231636853.png)

## HTTP响应状态码

用于标识响应状态

由三个十进制数字组成，第一个数字定义了状态码的类型

![image-20220312232157171](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220312232157171.png)

- 200 ： OK 请求成功
- 201： Created 已创建，成功请求并创建了新的资源



- 301：Moved Permanently 永久移动，请求的资源已被永久移动到新的URI中，返回信息会包含新的URI
- 302：Found 临时移动
- 304：Not Modified 未修改



- 400：Bad Request 语义有误，请求的参数有误
- 401：Unauthorized 当前请求需要用户验证
- 403：Forbidden 服务器已经理解请求但拒绝执行
- 404：Not Found 服务器无法根据客户端的请求找到资源（网页）
- 408：Request Timeout 请求超时



- 500：Internal Server Error 服务器内部错误，无法完成请求
- 501：Not Implement 服务器不支持该请求方法
- 503：Service Unavailable 由于超载或者系统维护，服务器暂时无法处理客户端的请求

