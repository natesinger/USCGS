import { createApp } from 'vue';
import store from '@/store';
import Poetry from './PoetryApp.vue';

const uscgsPoetryApp = createApp(Poetry);
uscgsPoetryApp.config.globalProperties.window = window;
uscgsPoetryApp.use(store).mount('#app');
