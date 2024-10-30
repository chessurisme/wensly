import postcss from 'rollup-plugin-postcss';
import postcssImport from 'postcss-import';

export default {
	input: 'src/main.js',
	output: {
		file: 'dist/bundle.js',
		format: 'cjs',
		extract: 'index.css'
	},
	plugins: [
		postcss({
			plugins: [postcssImport()],
			extract: 'bundle.css',
			minimize: true,
			inject: false
		})
	]
};
