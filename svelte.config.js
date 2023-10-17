import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess({
		  postcss: true,
		}),
	  ],

	kit: {
		paths: {
			base: '',
		  },
		  
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// ignore deliberate link to shiny 404 page
				if (path === '/not-found' && referrer === '/blog/how-we-built-our-404-page') {
					print(message)
					return;
				}

				// otherwise fail the build
				throw new Error(message);
			}
		},


		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null
		  }),

		alias: {
            // this will match a file
            // 'my-file': 'path/to/my-file.js',

            // this will match a directory and its contents
            // (`my-directory/x` resolves to `path/to/my-directory/x`)
            'src': 'src',

            // an alias ending /* will only match
            // the contents of a directory, not the directory itself
            // 'my-directory/*': 'path/to/my-directory/*'
        }
	}
};

export default config;
