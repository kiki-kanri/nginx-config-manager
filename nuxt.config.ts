import { ModuleOptions } from '@sidebase/nuxt-session';
import removeConsole from 'vite-plugin-remove-console';

const sessionConfig: ModuleOptions = {
	api: {
		isEnabled: false
	},
	isEnabled: true,
	session: {
		cookieHttpOnly: true,
		cookieSecure: true,
		storageOptions: {
			driver: 'memory'
		},
		storePrefix: 's'
	}
}

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
	elementPlus: {
		themes: [
			'dark'
		]
	},
	modules: [
		'@averjs/nuxt-compression',
		'@element-plus/nuxt',
		['@sidebase/nuxt-session', sessionConfig],
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
			standard: [
				'body',
				'dark',
				'html'
			]
		}
	},
	vite: {
		build: {
			chunkSizeWarningLimit: 1024,
			manifest: false
		},
		plugins: [
			removeConsole()
		]
	}
});
