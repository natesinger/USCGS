import { createApp } from 'vue';
import store from '@/store';
import Menu from './MenuApp.vue';

const uscgsMenuApp = createApp(Menu);
uscgsMenuApp.config.globalProperties.window = window;
uscgsMenuApp.use(store).mount('#app');
