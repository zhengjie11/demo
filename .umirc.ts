import { defineConfig } from 'umi';
import { resolve } from 'path';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },{ path: '/PPT', component: '@/pages/PPT' },{ path: '/Canvas', component: '@/pages/Canvas' },
  ],  
  alias: {
    pages: resolve(__dirname, './src/pages'),
  
  },
  fastRefresh: {},
});
