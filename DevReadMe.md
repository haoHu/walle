Walle JIBO Skill 前端开发探索
====

# 背景

    我们要在jibo机器人构建的平台上制作一个App，在jibo的世界里被称为skill。
    但是我们要做这个Skill是一个综合性的应用，可能需要几何很多个应用于一身。
    例如`播放音乐`，`播放儿童故事`，`查看天气预报`，`收听广播`，`灯光控制`等等。

    在这样的背景下我们需要探索如何让jibo能够快速、流畅、柔和的切换到各个功能。

# jibo的交互组成部分

    jibo是一个智能型机器人设备，它具有显示屏，摄像头，身体运动，头部感应触摸板。
    这些都是可以与用户有交互的功能点。

  [jibo设计风格指南](https://developers.jibo.com/sdk/docs/guides/design-style-guide.html#personality)

# Walle Skill 的构建思考

    jibo的UI显示是基于webkit浏览器的。所以我们可以考虑像构建SPA的方式，构建这个Skill。
    需要有一个路由模块，对这个Skill下的各个功能模块进行划分。同时提供对外的接口，
    方便jibo的behavior tree进行调用，以切换功能模块儿的UI。
    同时，我们还考虑引入组件化开发的模式。

    优点：代码易于维护、组件复用
    缺点：需要在发布前编译、需要学习成本

# 尝试React

## 参考资料

> [React入门实例教程](http://www.ruanyifeng.com/blog/2015/03/react)    
> [React China](http://react-china.org/)    
> [React 中文文档](http://reactjs.cn/)
    
