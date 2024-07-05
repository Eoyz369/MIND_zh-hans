# MIND_简体中文

[![Docker Pulls](https://img.shields.io/docker/pulls/eoyz369/mind_zh-hans.svg)](https://hub.docker.com/r/eoyz369/mind_zh-hans)



__一款简单的自托管提醒应用程序，可向您的设备发送推送通知。设置提醒，然后忘掉它！__

Mind 是一款简单的自托管应用程序，用于创建提醒信息，并使用 [Apprise](https://github.com/caronc/apprise) API 将提醒信息推送到您的设备。您可以向几乎所有平台发送信息，包括预定的电子邮件！

## 工作原理

MIND 可用于在所需时间发送通知。这可以是一个设定的时间，比如每年的生日提醒，也可以是点击一个按钮，在你想要的时候轻松发送预定义的通知。通过集成 [Apprise](https://github.com/caronc/apprise)，通知可以发送到 80 多个平台。

## 功能

- 跨时区工作

- 以秒为精度发送通知

- 可对重复次数进行精细控制：单次、时间间隔、特定工作日或手动触发。

- 使用 [Apprise 库](https://github.com/caronc/apprise)，可向 80 多个平台发送通知，每个提醒可发送到多个平台

- 通过排序选项、搜索功能和颜色编码轻松管理提醒事项

- 用于用户管理、设置和备份的管理面板

- 提供 Docker 映像

- 移动友好的网页界面

- 提供应用程序接口

## 安装、支持和文档



访问 ```IP:8080``` ，可以进行登录   
默认账号密码：```admin/admin```，登录以后必须先修改密码。   
**输入新密码后需要按回车键。**    
然后需要创建一个新账户，再退出使用新的账户登录。   
即可创建一个通知方式！

### Docker CLI
```
docker run -d \
--name mind \
-v /home/docker/mind:/app/db \
-e TZ=Asia/Shanghai \
-p 8080:8080 \
--restart=always \
eoyz369/mind_zh-hans:latest
```

### Docker Compose
```
version: "3.3"
services:
  mind:
      container_name: mind
      image: eoyz369/mind_zh-hans:latest
      volumes:
        - "mind-db:/app/db"
      environment:
        - TZ=Asia/Shanghai
      ports:
        - 8080:8080

volumes:
  mind-db:  
```




- 有关如何安装 MIND 的说明，请参阅 [安装文档](https://casvt.github.io/MIND/installation/installation)

- 有关所有文档，请参见[文档中心](https://casvt.github.io/MIND)。

## Screenshots

<img src="https://github.com/Eoyz369/MIND_zh-hans/blob/Main/Screenshots/114356.png" style="width: max(45%, 400px); margin: .5rem;">
<img src="https://github.com/Eoyz369/MIND_zh-hans/blob/Main/Screenshots/115509.png" style="width: max(45%, 400px); margin: .5rem;">
<img src="https://github.com/Eoyz369/MIND_zh-hans/blob/Main/Screenshots/115305.png" style="width: max(45%, 400px); margin: .5rem;">
