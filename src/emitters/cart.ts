import mitt, { Handler } from 'mitt';
const emitter: mitt.Emitter = mitt();

interface ICart {
  [id: string]: number;
}

let currentCart: ICart = {};

getLocalStorageCart();

on('change', saveCartHandler);
function saveCartHandler() {
  localStorage.setItem('cart', JSON.stringify(currentCart));
}

type Types = 'change';

export function on(type: Types, handler: Handler) {
  emitter.on(type, handler);
  // TODO - Is this OK?
  handler(current());
}

export function empty() {
  currentCart = {};
}
export function add(id: string) {
  currentCart = { ...currentCart, [id]: zeroOrNumber(currentCart[id]) + 1 };
  emitter.emit('change', current());
}

export function reduce(id: string) {
  currentCart = {
    ...currentCart,
    [id]: Math.max(0, zeroOrNumber(currentCart[id]) - 1),
  };
  emitter.emit('change', current());
}
/**
 * Quantity of given itemId
 */
export function get(id: string) {
  return currentCart[id] || 0;
}
/**
 * How many items are currently in cart
 */
export function itemCount(): number {
  const itemCount = Object.values(currentCart).reduce(
    (prev, next) => prev + next,
    0
  );
  return itemCount;
}

export function current(): ICart {
  return currentCart;
}

function getLocalStorageCart() {
  const cart = localStorage.getItem('cart');
  if (cart) {
    currentCart = JSON.parse(cart);
  }
}

function zeroOrNumber(input: unknown): number {
  return Number(input) || 0;
}
