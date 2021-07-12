import { ConfigEnv, UserConfigExport, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import resolve from 'path'
import styleImport from 'vite-plugin-style-import'
const srcPath = resolve.resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  return defineConfig({
    plugins: [
      vue(),
      styleImport({
        libs: [
          {
            libraryName: 'element-plus',
            esModule: true,
            ensureStyleFile: true,
            resolveStyle: name => {
              name = name.slice(3)
              return `element-plus/packages/theme-chalk/src/${name}.scss`
            },
            resolveComponent: name => {
              return `element-plus/lib/${name}`
            },
          },
        ],
      }),
    ],
    resolve: {
      alias: [{ find: '@', replacement: srcPath }],
    },
    server: {
      // 是否开启 https
      https: false,
      // 默认localhost
      host: '0.0.0.0',
      /**
       * 端口号
       * @default 3000
       */
      port: 8080,
      // 浏览器自动打开
      open: true,
      // 本地跨域代理
      proxy: {
        // "/test": {
        //   target: "http://stzbxinghe.com/stzbxinghe/php/",
        //   changeOrigin: true,
        //   rewrite: path => path.replace(/^\/test/, ""),
        // },
      },
    },
  })
}
