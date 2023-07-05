import { createApp } from 'vue';
import store from '@/store';
import FourOhFour from './404App.vue';

const uscgs404App = createApp(FourOhFour);
uscgs404App.config.globalProperties.window = window;
uscgs404App.use(store).mount('#app');
