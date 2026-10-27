# Kloudy Shape 静态发布产物

将本仓库根目录作为网站根目录，无需安装依赖或运行 Node。页面由浏览器渲染，接口、媒体和 WebSocket 使用独立服务。

## 站点配置

编辑 `shape-config.json`，刷新页面即可生效，无需重新构建；后续同步会保留此文件。字段格式见 `shape-config.example.json`，只填写公开地址：

- `apiXUrl`、`apiGUrl`、`staticUrl`：接口与媒体地址，可用同域绝对路径或完整 HTTP(S) 地址。
- `siteUrl`：完整站点地址，不带结尾 `/`。
- `oauthResource`：OAuth Resource 地址，不使用时留空。

跨域接口须允许站点 Origin、鉴权头及凭据；登录、OAuth 和聊天需在部署环境验证。

## 部署

- GitHub Pages：Settings → Pages → Deploy from a branch，选择 `main`、`/ (root)`；保留 `.nojekyll`。接口须使用完整 HTTPS 地址；深链接通过 `404.html` 回退，HTTP 状态仍可能为 404。
- 其他静态服务器：配置 SPA 路由回退到 `index.html`；API、媒体、WebSocket 和静态资源优先匹配，缺失资源及配置文件返回 404。
- HTML 与 `shape-config.json` 不设长期缓存；带 hash 的 `_nuxt` 资源可长缓存。禁止访问 `.git`、`.release-archives`、`.release-staging` 等隐藏管理目录。

## 更新产物

在同级源码仓库 `kloudy-shape-ssr` 中使用 Node 24.11+、pnpm 11.22.0：

```sh
pnpm install --frozen-lockfile
pnpm build:static
```

构建后自动同步到本仓库；`pnpm publish-dist:static` 可同步已有产物。版本沿用源码，旧产物归档到 `.release-archives/`，不应对外提供。修改产物应回到源码仓库；Git 推送由用户执行，构建与同步不代表已部署。
