# 个人博客网站

一个基于React开发的现代化个人博客网站，支持QQ登录、文章发布、留言互动等功能。

## 功能特色

- 🏠 **首页** - 展示博客统计和网站介绍
- 📝 **个人随笔** - 发布和管理个人文章
- 💬 **留言板** - 用户互动交流平台
- 🔐 **QQ登录** - 支持QQ快速登录和访客模式
- 🎨 **现代设计** - 响应式布局，美观大方
- ⚡ **高性能** - 基于React 18，体验流畅

## 技术栈

- **前端框架**: React 18
- **路由**: React Router 6
- **样式**: Styled Components + CSS
- **构建工具**: Create React App
- **图标**: Emoji Icons

## 快速开始

### 环境要求

- Node.js >= 14.0.0
- npm >= 6.0.0

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm start
```

应用将在 http://localhost:3000 上运行

### 构建生产版本

```bash
npm run build
```

## 项目结构

```
src/
├── components/          # 公共组件
│   ├── Header.js       # 页头导航
│   └── Footer.js       # 页脚信息
├── pages/              # 页面组件
│   ├── Home.js         # 首页
│   ├── Essays.js       # 个人随笔
│   ├── Guestbook.js    # 留言板
│   └── Login.js        # 登录页
├── App.js              # 主应用组件
├── App.css             # 全局样式
├── index.js            # 入口文件
└── index.css           # 基础样式
```

## 功能说明

### QQ登录配置

项目使用QQ互联APP ID: `342096044`

实际部署时需要在QQ互联平台申请真实的APP ID，并配置回调地址。

### 数据存储

当前版本使用 localStorage 存储用户登录状态，文章和留言数据为模拟数据。

生产环境建议集成后端API和数据库。

### 响应式设计

网站完全响应式设计，支持：
- 桌面端 (1200px+)
- 平板端 (768px-1199px)
- 移动端 (<768px)

## 部署指南

### 静态部署

1. 构建项目：`npm run build`
2. 将 build 文件夹上传到服务器
3. 配置nginx或Apache指向build目录

### 云平台部署

支持部署到：
- GitHub Pages
- Netlify
- Vercel
- 腾讯云 COS
- 阿里云 OSS

## 开发说明

### 添加新页面

1. 在 `src/pages/` 创建新页面组件
2. 在 `App.js` 中添加路由
3. 在 `Header.js` 中添加导航链接

### 样式定制

- 全局样式：`src/index.css`
- 组件样式：使用 Styled Components
- 主题色：#667eea (主色), #764ba2 (辅色)

## 许可证

MIT License

## 联系方式

- 邮箱：your-email@example.com
- GitHub：https://github.com/your-username
- 博客：https://your-blog.com

---

⭐ 如果这个项目对你有帮助，请给个星标支持一下！