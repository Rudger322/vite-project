import { createRouter, createWebHistory } from 'vue-router';
import DefaulLayout from '../layouts/default.vue';
import SecondaryLayout from '../layouts/secondary.vue';
import HomeView from '../views/home.vue'
import CatalogView from '../views/catalog.vue'
import KartView from '../views/kart.vue'
import RegistrationView from '../views/registration.vue'
import ProductView from '../views/product.vue'
const routes = [
    { path: '/', component: DefaulLayout,
        children: [
            { path: '', name: 'home', component: HomeView },
            { path: 'catalog', name: 'catalog', component: CatalogView }
          ]
    },
    {
      path: '/', component: SecondaryLayout,
        children: [
          { path: 'product/:id', name: 'product', component: ProductView },
          { path: 'kart', name: 'kart', component: KartView },
          { path: 'registration', name: 'registration', component: RegistrationView }
        ]
    }
  ]

  const router = createRouter({ history: createWebHistory(), routes })

export default router;


