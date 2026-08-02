import { createApp } from 'vue';
import App from '@/App.vue';
import '@/shared/styles/style.css';
import { setupProviders } from './providers';

const app = createApp(App);

setupProviders(app);

app.mount('#app');
