import { createApp } from 'vue';
import store from '@/store';
import About from './AboutApp.vue';

const uscgsHomeApp = createApp(About);
uscgsHomeApp.config.globalProperties.window = window;
uscgsHomeApp.use(store).mount('#app');
