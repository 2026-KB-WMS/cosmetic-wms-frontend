import router from '../router';
import { pinia } from '../store';

export function setupProviders(app) {
  app.use(pinia);
  app.use(router);
}
