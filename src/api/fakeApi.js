// src/api/fakeStoreApi.js
import api from './axios';

// Домашняя страница — например, покажем 5 популярных товаров
export const getHomeData = () => api.get('/products?limit=6');

// Каталог — список всех товаров
export const getCatalogData = (limit = 10) => api.get(`/products?limit=${limit}`);

// Один товар по ID
export const getProductData = (id) => api.get(`/products/${id}`);

// Корзина — у fakestoreapi есть пример корзины
export const getCartData = (cartId = 1) => api.get(`/carts/${cartId}`);

// Регистрация пользователя — POST запрос
export const registerUser = (formData) => {
  return api.post('/users', {
    email: formData.email,
    username: formData.username,
    password: formData.password,
    name: {
      firstname: formData.firstName,
      lastname: formData.lastName,
    },
    address: {
      city: 'some city',
      street: 'some street',
      number: 3,
      zipcode: '12345',
      geolocation: {
        lat: '0',
        long: '0',
      },
    },
    phone: formData.phone,
  });
};
