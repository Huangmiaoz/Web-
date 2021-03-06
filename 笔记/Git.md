# Git

## 版本控制

**文件的版本控制**：

- 操作麻烦
- 命名不规范
- 容易丢失
- 协作困难

**版本控制软件**：是一个用来记录文件变化，以便查阅特定版本修订情况的系统

- 操作简便
- 易于对比
- 易于回溯
- 不易丢失
- 协作方便

**分类**：

- **本地版本控制系统**：单机运行，使维护版本的操作工具化

- **集中化的版本控制系统**：联网运行，支持多人开发，性能差，用户体验不好

  - 基于服务器客户端的运行模式
  - 服务器保存文件的所有更新记录
  - 客户端只保留**最新**的文件版本

  缺点：

  - 不支持离线提交版本更新
  - 中心服务器崩溃后，所有人无法正常工作
  - 版本数据库故障后，所有历史更新记录丢失

- **分布式版本控制系统**：联网运行，支持多人协作开发，性能优秀，用户体验好

  - 基于服务器客户端的运行模式
  - 服务器保存文件所有的更新版本
  - 客户端是服务器的**完整备份**，并不是只保留文件的最新版本

  **优点**

  - 联网运行，支持多人开发
  - 客户端断网支持离线本地版本提交，联网后再同步到云端

## Git 基础

开源的分布式版本控制系统，用于处理项目版本管理

**特性**：

1. 直接记录快照，而非版本差异比较
2. 近乎所有操作都是本地操作

### SVN的差异比较

传统的版本控制系统（eg.SVN）是基于差异的版本控制，存储的是**一组基本文件**和每个文件**逐步积累的差异**，每次再切换版本的时候，都需要在基本文件的基础上，应用每个差异，从而生成目标版本对应的文件

- 节省磁盘空间
- 耗时效率低

### Git 记录的快照

在原有文件版本的基础上重新生成一份新的文件，类似于备份；如果没有修改，Git不重新存储该文件，只保留一个连接指向之前存储的文件

- 占用磁盘空间大
- 版本切换的快，直接回复目标版本的快照即可

在Git中的绝大部分操作只需要访问本地文件和资源，一般不需要来自网络上其他的计算机

### Git区域

工作区、暂存区、Git仓库

### GIt状态

- 已修改：已经修改了文件但还没吧修改的结果放入暂存区
- 已暂存：表示对已修改的文件的当前版本做了标记，使之包含在下次提交的列表里
- 已提交：文件已经安全地保存在Git仓库里

**工作区文件状态**

![image-20220313094222844](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220313094222844.png)

git操作的最终结果是让工作区的文件都处于未修改状态

### GIt流程

在工作区中修改文件

想要提交的更改进行暂存

提交更新，找到暂存区的文件，将快照永久性的存储到Git仓库

![image-20220313100200816](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220313100200816.png)



### 操作

#### 设置用户名邮箱

![image-20220313003139874](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220313003139874.png)

#### 查看操作

`$ git config --list --global`

![image-20220313003147232](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220313003147232.png)

![image-20220313003235567](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220313003235567.png)

`$ git config user.name`

![image-20220313003322185](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220313003322185.png)

#### 获取帮助

`git config + 具体操作`

`git config -h` 快速命令参考

#### 获取仓库

将尚未进行版本控制的本地目录转化为Git仓库

从其他服务器克隆一个已经存在的Git仓库

#### 初始化仓库

在项目目录中，右键GIt Bash

执行Git Init 将当前目录转化为Git 仓库--会创建一个名为.git的隐藏目录，这个目录就是当前项目的Git仓库，包含了初始化的必要文件，这些文件就是Git仓库的必要组成部分

#### 查看状态

`git status`

精简的显示：

`git status -s` 

`git status --short`

#### 跟踪新文件

`git add`

新添加到暂存区的文件前有绿色的A标志

#### 提交更新

`git commit`

在后面跟着 -m 描述的是提交的信息

#### 提交修改

查看状态时，前面有红色的M说明已经被修改过但还没被提交

绿色的M，已修改，且放入暂存区

`git add`

1. 追踪新文件
2. 将已追踪+修改的文件放入暂存区
3. 将有冲突地文件标记为已解决状态

#### 提交暂存

![image-20220313101059347](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220313101059347.png)

#### 撤销对文件的修改

`git checkout --file_name`

将工作区中的文件修改还原成Git仓库中所保存的版本

![image-20220313101222708](C:\Users\HP\AppData\Roaming\Typora\typora-user-images\image-20220313101222708.png)

#### 向暂存区一次存放多个文件

直接`git add .`把所有文件都加入暂存区

#### 取消暂存的文件

`git reset HEAD`

#### 跳过暂存

`git commit -a -m` 

将所有已经跟踪过的文件暂存起来一起提交，从而跳过`git add`

#### 移除文件

将工作区和仓库中同时移除

`git rm -f file_name`

只从git中移除指定文件，但保留工作区中对应的将文件

`git rm --cached file_name`

#### 忽略文件

一些不需要纳入git管理，不希望出现在未跟踪列表里的文件

创建一个名为`.gitignore`的配置文件，列出要忽略的文件的匹配模式

1. 以#开头是注释
2. 以/结尾是目录
3. 以/开头防止递归
4. 以！开头表示取反
5. 使用glob模式进行文件和文件夹的配置

##### glob模式

1. *匹配零个或任意多个字符
2. 【abc】匹配任何一个列在方括号中的字符--如这里，匹配一个a或一个b或一个c
3. ？匹配任何一个字符
4. 在方括号中使用短划线分隔两个字符，表示所有在这两个字符范围内的都可以匹配，如【0-9】表示所有0-9的数字
5. **表示匹配任意中间目录，比如，`a/**/z`可以匹配 a/z, a/b/z, a/b/c/z

#### 查看提交历史

`git log` ：按时间先后顺序列出所有提交历史，最近提交的在最上面

`git log -num` ：只展示前num条历史

`git log -num --pretty=oneline`：在一行上展示最近的num条提交历史信息

`git log -num --pretty=format:"%h | %an | %s` ：%h提交的简写哈希值，%an作者的名字，%ar作者的修订日期，按多久之前的方式显示，%s提交说明

#### 回退到历史版本

`git reset --hard<CommitID>`

根据指定的提交ID回退到指定版本

`git reflog --pretty=online`

查看命令操作的历史

`git reset -- hard<CommitID>`

根据最新提交的ID，跳转到最新的版本
