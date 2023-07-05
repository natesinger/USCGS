import { createApp } from 'vue';
import store from '@/store';
import Home from './HomeApp.vue';

const uscgsHomeApp = createApp(Home);
uscgsHomeApp.config.globalProperties.window = window;
uscgsHomeApp.use(store).mount('#app');
