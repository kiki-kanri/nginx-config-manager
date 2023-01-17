import removeConsole from 'vite-plugin-remove-console';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			link: [
				{ rel: 'icon', href: '/favicon.svg' },
				{ rel: 'preconnect', href: 'https://fonts.googleapis.com' }
			],
			noscript: [
				{ children: 'Javascript is required.' }
			],
			title: 'Nginx設定檔管理系統'
		},
		keepalive: true
	},
	compression: {
		viteCompression: {
			algorithm: 'gzip',
			threshold: 513
		}
	},
	css: [
		'element-plus/dist/index.css',
		'element-plus/theme-chalk/dark/css-vars.css'
	],
	imports: {
		dirs: [
			'composables',
			'composables/*/*.{ts,js,mjs,mts}'
		]
	},
	modules: [
		'@averjs/nuxt-compression',
		'@vueuse/nuxt',
		['kikiutils-nuxt', { elementPlus: true, scss: true }],
		'nuxt-purgecss'
	],
	purgecss: {
		enabled: true,
		safelist: {
			deep: [
				/dialog-/,
				/el-/,
				/swal2/
			],
			standard: []
		}
	},
	vite: {
		build: {
			chunkSizeWarningLimit: 1024,
			manifest: false,
			rollupOptions: {
				output: {
					manualChunks: {
						'axios': ['axios'],
						'lodash-es': ['lodash-es']
					}
				}
			},
			ssr: false
		},
		plugins: [
			removeConsole()
		],
		// server: {
		// 	hmr: {
		// 		clientPort: 443,
		// 		path: '/hmrws',
		// 		port: 12101,
		// 		protocol: 'wss'
		// 	}
		// }
	}
});
