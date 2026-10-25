# Kloudy Shape 纯静态发布产物

适用源码版本 0.1.5 的双模式构建。`kloudy-shape-ssr-static-dist` 是独立静态制品仓库；部署根目录是 `public/`。不需要安装依赖或运行 Node；API-X/API-G、媒体服务和 WebSocket 仍由独立服务提供。

## 构建与同步

源码仓库使用 Node 24.11+、pnpm 11.22.0。两个制品仓库与源码同级，静态仓库首次执行 `git init -b main kloudy-shape-ssr-static-dist`，并配置下方忽略规则。构建不会自动建仓库、提交或推送。

```sh
pnpm install --frozen-lockfile
pnpm build:static
```

命令更新项目诊断信息，以全站 CSR 模式执行 Nuxt generate，在 `.output-static/public/` 生成 HTML、JS、CSS，通过 CSS 检查后自动同步到 `../kloudy-shape-ssr-static-dist/public/`。`pnpm publish-dist:static` 可重新同步已有静态产物。源码版本与制品版本相同，构建不升版。

默认 `pnpm build` 仍构建 SSR `.output/` 并同步 `kloudy-shape-ssr-dist`；两种输出和制品仓库互不覆盖。静态构建保留全部页面和客户端 API 调用，页面正文由浏览器取数渲染，公开页没有实时 SSR 的 HTML、HTTP 状态和 SEO 效果。`server/api/public`、Node 安全中间件和 `/health/live` 不随静态产物提供，代理、安全响应头和路径限制由托管服务配置。

静态仓库 `.gitignore`：

```gitignore
.release-archives/
.release-staging/
public/shape-config.json
*.log
.DS_Store
```

## 每台服务器的配置

`public/shape-config.json` 是独立公开配置文件。首次同步自动从 `shape-config.example.json` 创建；之后同步保留已有文件内容。配置不进入静态仓库 Git，服务器首次部署时从示例创建。示例域名必须替换为实际站点，里面只能放公开地址。

```json
{
  "apiXUrl": "/api-x",
  "apiGUrl": "/api-g",
  "staticUrl": "/static",
  "siteUrl": "https://shape.example.com",
  "oauthResource": ""
}
```

- `apiXUrl`、`apiGUrl`、`staticUrl`：同域绝对路径或完整 HTTP(S) 地址，建议不带结尾 `/`。
- `siteUrl`：完整站点地址，用于 canonical；根域名部署，不带结尾 `/`。
- `oauthResource`：OAuth Resource 地址；不用时保留空字符串。

浏览器启动时用 `cache: no-store` 读取配置，加载并校验成功后才初始化设备、会话和业务请求。缺失、HTTP 失败、非 JSON 或字段不合法会显示配置错误，不静默退回构建机配置。修改后刷新页面生效，不需要重新打包。SSR 模式继续使用原有 `NUXT_*` 环境变量，不读取这个文件。纯静态服务器设置 `NUXT_*` 不会改变既有静态包配置。

## 静态托管

将 `public/` 内容作为网站根目录，配置 SPA 回退到 `index.html` 或 `200.html`，确保直接访问和刷新文章、角色等深链接正常。API、媒体、WebSocket 路径必须先于 SPA 回退匹配；缺失 JS/CSS 应返回 404，配置文件禁止回退成 HTML。

Nginx 同域接口示意（上游地址另按服务器实际配置）：

```nginx
root /srv/kloudy-shape-ssr-static-dist/public;
location = /shape-config.json {
    add_header Cache-Control "no-store" always;
    try_files $uri =404;
}
location ^~ /_nuxt/ { try_files $uri =404; }
# /api-x、/api-g、/static 等代理及 WebSocket 按既有网关配置保留。
location / { try_files $uri $uri/ /index.html; }
```

不能配置同域代理的静态托管可使用独立接口域名，但 API 需允许该网站 Origin、自定义鉴权头和携带凭据，聊天需要可达的 WebSocket。身份 Cookie、OAuth 回调和 HTTPS 必须在目标环境验证。所有部署方式均需支持 SPA 路由回退；子目录部署需要单独调整和验证 baseURL。

服务器或 CDN 对 `index.html`、`200.html`、`404.html` 及配置文件禁用长期缓存；带 hash 的 `_nuxt` 资源可长缓存。重复制品同步会替换 `public/`，只有 `shape-config.json` 被保留，不在其中放手工业务文件。旧受管文件保存在 `.release-archives/<毫秒时间戳>/原文件名.<同一时间戳>.deleted`，失败时恢复原文件；不要将归档目录设为网站根目录。

## 验证范围

本地双模式构建、HTTP 与内存夹具浏览器验证记录在工作区 `plans/active/shape-dual-build/metadata.json`。本地制品同步和 Git 提交不代表部署；真实身份、跨域 Cookie、OAuth 和真实写操作仍须在目标环境验收。

本地验证入口：先构建两种产物，再运行 `pnpm test`、`pnpm type-check`。仅检查配置及同步可运行 `node --test tests/static-build.test.mjs tests/publish-dist.test.mjs`。`node tests/static-preview.mjs` 在 `127.0.0.1:3208` 提供静态制品及内存 API 夹具；配置错误页复用 KPlaceholder，配置失败时停止会话和业务页面启动。
