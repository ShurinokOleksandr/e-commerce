import { ProductCart } from './store';

const CART_COOKIE_NAME = 'cartItems';

export const saveCartToCookies = (items: ProductCart[]) => {
    const cartItemsJSON = JSON.stringify(items);
    document.cookie = `${CART_COOKIE_NAME}=${encodeURIComponent(cartItemsJSON)};path=/`;
};

export const getCartFromCookies = (): ProductCart[] => {
    const cookieValue = document.cookie.replace(
        new RegExp(`(?:(?:^|.*;)\\s*${encodeURIComponent(CART_COOKIE_NAME).replace(/[-.+*]/g, '\\$&')}\\s*\\=\\s*([^;]*).*$)|^.*$`),
        '$1',
    );
    return cookieValue ? JSON.parse(decodeURIComponent(cookieValue)) : [];
};
