// vite.config.js
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

// add the following dependencies
import components from 'unplugin-vue-components/vite';
import { AntDesignXVueResolver } from 'ant-design-x-vue/resolver';

export default defineConfig({
  // ...
  plugins: [
    vue(),
    // add the following plugin
    components({
      resolvers: [AntDesignXVueResolver()]
    })
  ]
});
